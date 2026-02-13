import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const collections = [
  {
    title: "SLOANE WOOL COAT",
    category: "CURATED PIECE",
    image: "https://images.unsplash.com/photo-1539533377285-3422b0022b8f?w=800&q=80",
    className: "md:col-span-2 md:row-span-2",
    href: "/product/sloane-coat"
  },
  {
    title: "STRUCTURE",
    category: "APPAREL",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    className: "md:col-span-1 md:row-span-1",
    href: "/category/apparel"
  },
  {
    title: "ESSENTIALS",
    category: "ACCESSORIES",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    className: "md:col-span-1 md:row-span-1",
    href: "/category/accessories"
  },
];

export function EditorialGrid() {
  return (
    <section className="py-24 px-4 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
        <h2 className="text-4xl font-bold tracking-tighter italic uppercase underline underline-offset-8 decoration-1 decoration-foreground/20">THE EDIT</h2>
        <p className="text-muted-foreground max-w-sm text-sm tracking-tight leading-relaxed font-light">
          A curated selection of our most iconic pieces, photographed in the heart of Manhattan for the modern collector.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[450px]">
        {collections.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={`group relative overflow-hidden transition-all duration-700 bg-muted ${item.className}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-background/5 group-hover:bg-background/20 transition-colors duration-500" />
            <div className="absolute bottom-10 left-10 text-primary-foreground drop-shadow-sm">
              <Badge variant="outline" className="text-primary-foreground border-primary-foreground/40 mb-3 rounded-none bg-background/20 backdrop-blur-sm text-[10px] tracking-widest uppercase px-3 py-1">
                {item.category}
              </Badge>
              <h3 className="text-3xl font-light tracking-tighter uppercase">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
