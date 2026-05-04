import Link from 'next/link';

interface Category {
  title: string;
  slug: { current: string };
  color: string;
}

export default function CategoryLabel({ categories, center = false }: { categories: Category[]; center?: boolean }) {
  const colorMap: Record<string, string> = {
    green: 'text-emerald-500',
    blue: 'text-blue-500',
    orange: 'text-orange-500',
    purple: 'text-purple-500',
    pink: 'text-pink-500',
  };

  return (
    <div className={`${center ? '' : 'flex'} gap-3 mt-5`}>
      {categories?.length > 0 &&
        categories.map((category, index) => (
          <Link href={`/blog/category/${category.slug.current}`} key={index}>
            <span
              className={`inline-block text-xs font-medium tracking-wider uppercase ${
                colorMap[category.color] || colorMap['pink']
              }`}
            >
              {category.title}
            </span>
          </Link>
        ))}
    </div>
  );
}
