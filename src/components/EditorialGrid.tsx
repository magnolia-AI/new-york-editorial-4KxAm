import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const collections = [
  {
    title: "MONOCHROME",
    category: "OBJECTS",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "STRUCTURE",
    category: "APPAREL",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "ESSENTIALS",
    category: "ACCESSORIES",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    className: "md:col-span-1 md:row-span-1",
  },
];

export function EditorialGrid() {
  return (
    <section className="py-24 px-4 container mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 gap-4">
        <h2 className="text-4xl font-bold tracking-tighter italic">THE EDIT</h2>
        <p className="text-muted-foreground max-w-sm">
          A curated selection of our most iconic pieces, photographed in the heart of New York City.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px] md:auto-rows-[400px]">
        {collections.map((item, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden transition-all duration-700 ${item.className}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute bottom-8 left-8 text-white">
              <Badge variant="outline" className="text-white border-white mb-2 rounded-none">
                {item.category}
              </Badge>
              <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

