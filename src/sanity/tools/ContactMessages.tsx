'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import {
  Card,
  Flex,
  Text,
  Heading,
  Stack,
  Box,
  Badge,
  Container,
  Spinner,
  Button
} from '@sanity/ui';
import { format } from 'date-fns';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  created_at: string;
}

export default function ContactMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMessages = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Supabase Error:', error);
        throw error;
      }
      setMessages(data || []);

      // Debug log to check if environment variables are present
      if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
        console.warn('Supabase environment variables are missing in Sanity Studio context.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch messages');
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;

    try {
      const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Refresh list
      setMessages(messages.filter(m => m.id !== id));
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Failed to delete message');
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  if (loading) {
    return (
      <Container width={1} padding={5}>
        <Flex align="center" justify="center" style={{ height: '50vh' }}>
          <Flex direction="column" align="center">
            <Spinner />
            <Box marginTop={4}>
              <Text>Loading messages from Supabase...</Text>
            </Box>
          </Flex>
        </Flex>
      </Container>
    );
  }

  if (error) {
    return (
      <Container width={1} padding={5}>
        <Card padding={4} tone="critical">
          <Text>{error}</Text>
          <Button
            marginTop={4}
            fontSize={1}
            padding={3}
            text="Retry"
            onClick={fetchMessages}
          />
        </Card>
      </Container>
    );
  }

  return (
    <Box padding={4}>
      <Container width={4}>
        <Stack space={5}>
          <Flex justify="space-between" align="center">
            <Heading as="h1">Contact Messages</Heading>
            <Flex gap={2}>
              <Button
                fontSize={1}
                padding={2}
                mode="ghost"
                text="Refresh"
                onClick={fetchMessages}
              />
              <Badge tone="primary">{messages.length} Total</Badge>
            </Flex>
          </Flex>

          {messages.length === 0 ? (
            <Card padding={5} border radius={2} tone="caution">
              <Stack space={3}>
                <Text align="center" weight="bold">No messages found.</Text>
                <Text align="center" size={1} muted>
                  If you have data in Supabase but it's not appearing here, please ensure:
                </Text>
                <Box padding={3}>
                  <Text size={1} style={{ paddingBottom: "8px" }}>• The table name is exactly <code>contacts</code>.</Text>
                  <Text size={1} style={{ paddingBottom: "8px" }}>• Row Level Security (RLS) on Supabase allows <code>SELECT</code> (and <code>DELETE</code>) for the <code>anon</code> role.</Text>
                  <Text size={1} style={{ paddingBottom: "8px" }}>• Environment variables are correctly set in <code>.env.local</code>.</Text>
                </Box>
              </Stack>
            </Card>
          ) : (
            <Stack space={4}>
              {messages.map((msg) => (
                <Card key={msg.id} padding={4} border radius={3} shadow={1}>
                  <Stack space={4}>
                    <Flex justify="space-between">
                      <Stack space={2}>
                        <Text weight="bold" size={2}>{msg.name}</Text>
                        <Text size={1} muted>{msg.email}</Text>
                      </Stack>
                      <Flex gap={3} align="center">
                        <Text size={1} muted>
                          {format(new Date(msg.created_at), 'PPPp')}
                        </Text>
                        <Button
                          fontSize={1}
                          padding={2}
                          tone="critical"
                          mode="ghost"
                          text="Delete"
                          onClick={() => deleteMessage(msg.id)}
                        />
                      </Flex>
                    </Flex>

                    {msg.subject && (
                      <Box padding={2} style={{ background: 'rgba(0,0,0,0.05)', borderRadius: '4px' }}>
                        <Text size={1} weight="semibold">Subject: {msg.subject}</Text>
                      </Box>
                    )}

                    <Box>
                      <Text style={{ whiteSpace: 'pre-wrap' }}>{msg.message}</Text>
                    </Box>
                  </Stack>
                </Card>
              ))}
            </Stack>
          )}
        </Stack>
      </Container>
    </Box>
  );
}
