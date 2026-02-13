import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CategoryHeader } from '@/components/CategoryHeader';
import { motion } from 'framer-motion';

const CATEGORY_DATA = {
  fashion: {
    title: 'Fashion',
    description: 'A curated selection of silhouettes that define the modern era.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop',
    items: [
      { id: 1, type: 'product', title: 'Architectural Blazer', price: '$850', image: 'https://images.unsplash.com/photo-1591047139829-d91aec36caea?w=800&auto=format&fit=crop' },
      { id: 2, type: 'editorial', title: 'The New Minimal', image: 'https://images.unsplash.com/photo-1485230895905-ec1783e81bc9?w=800&auto=format&fit=crop' },
      { id: 3, type: 'product', title: 'Silk Column Dress', price: '$1,200', image: 'https://images.unsplash.com/photo-1539109132332-629851e796d1?w=800&auto=format&fit=crop' },
      { id: 4, type: 'product', title: 'Leather Trousers', price: '$980', image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&auto=format&fit=crop' },
    ]
  },
  living: {
    title: 'Living',
    description: 'Objects and environments designed for intentional residency.',
    image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2000&auto=format&fit=crop',
    items: [
      { id: 5, type: 'product', title: 'Sculptural Lounge Chair', price: '$3,400', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&auto=format&fit=crop' },
      { id: 6, type: 'editorial', title: 'Quiet Spaces', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop' },
      { id: 7, type: 'product', title: 'Ceramic Vessel No. 4', price: '$450', image: 'https://images.unsplash.com/photo-1578749553558-13fc30155b9a?w=800&auto=format&fit=crop' },
    ]
  },
  art: {
    title: 'Art',
    description: 'Contemporary expressions across texture, form, and medium.',
    image: 'https://images.unsplash.com/photo-1459908276235-d4fc7bbec341?q=80&w=2000&auto=format&fit=crop',
    items: [
      { id: 8, type: 'editorial', title: 'Abstract Dialogues', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=800&auto=format&fit=crop' },
      { id: 9, type: 'product', title: 'Limited Edition Print', price: '$1,800', image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop' },
    ]
  }
};

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const data = useMemo(() => {
    return CATEGORY_DATA[categoryId as keyof typeof CATEGORY_DATA] || CATEGORY_DATA.fashion;
  }, [categoryId]);

  return (
    <div className="bg-background min-h-screen">
      <CategoryHeader 
        title={data.title}
        description={data.description}
        image={data.image}
      />

      <main className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {data.items.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col space-y-4 ${item.type === 'editorial' ? 'lg:col-span-2' : ''}`}
            >
              <div className="overflow-hidden bg-muted aspect-[3/4] relative group">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {item.type === 'editorial' && (
                  <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
                    <span className="text-white border border-white px-6 py-2 uppercase tracking-widest text-xs translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                      Read Story
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col space-y-1">
                <h3 className="text-sm font-medium tracking-tight uppercase italic">{item.title}</h3>
                {item.price && (
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{item.price}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Cross-linking Section */}
      <section className="border-t border-border mt-24 py-24 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-serif italic mb-12">Other Directions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {Object.entries(CATEGORY_DATA)
              .filter(([key]) => key !== categoryId)
              .map(([key, cat]) => (
                <Link key={key} to={`/category/${key}`} className="group space-y-4">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h4 className="text-lg uppercase tracking-widest italic flex items-center">
                    {cat.title} <span className="ml-2 group-hover:translate-x-2 transition-transform h-[1px] w-8 bg-foreground hidden md:inline-block" />
                  </h4>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;

