import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-light-gray" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="contact-heading" className="text-4xl lg:text-5xl font-bold text-dark mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-dark mb-6">
                Send me a message
              </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold text-gray-700">
                    Name
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Your Name"
                    className="mt-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-700">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="your.email@example.com"
                    className="mt-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="subject" className="text-sm font-semibold text-gray-700">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    {...register("subject")}
                    placeholder="Project Discussion"
                    className="mt-2 focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message")}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="mt-2 focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-dark mb-6">Get in touch</h3>
              <p className="text-lg text-gray-600 mb-8">
                Whether you have a project in mind or just want to chat about
                technology, I'm always open to new opportunities and interesting
                conversations.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="flex items-center p-4 bg-white shadow-lg">
                <CardContent className="flex items-center p-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">Email</h4>
                    <p className="text-gray-600">alex.johnson@email.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex items-center p-4 bg-white shadow-lg">
                <CardContent className="flex items-center p-0">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex items-center p-4 bg-white shadow-lg">
                <CardContent className="flex items-center p-0">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark">Location</h4>
                    <p className="text-gray-600">San Francisco, CA</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-dark mb-4">Follow me</h4>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("#", "_blank")}
                  className="w-12 h-12 bg-primary rounded-full text-white hover:bg-blue-600 transition-colors duration-200"
                >
                  <Linkedin className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("#", "_blank")}
                  className="w-12 h-12 bg-gray-700 rounded-full text-white hover:bg-gray-800 transition-colors duration-200"
                >
                  <Github className="h-6 w-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => window.open("#", "_blank")}
                  className="w-12 h-12 bg-blue-400 rounded-full text-white hover:bg-blue-500 transition-colors duration-200"
                >
                  <Twitter className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
