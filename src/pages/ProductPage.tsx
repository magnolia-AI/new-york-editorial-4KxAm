import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const ProductPage = () => {
  const product = {
    name: "SLOANE OVERSIZED WOOL COAT",
    price: "$1,250",
    description: "A masterclass in proportions. The Sloane Coat is crafted from heavy Italian double-faced wool, featuring dropped shoulders and a sweeping silhouette that defines modern New York elegance.",
    details: [
      { label: "Composition", content: "100% Virgin Wool. Lined in 100% Cupro." },
      { label: "Care", content: "Dry clean only. Store on a wide-shouldered hanger to preserve shape." },
      { label: "Sizing", content: "Oversized fit. We recommend sizing down if you prefer a more tailored look. Model is 5'10\" wearing size S." },
      { label: "Shipping", content: "Complimentary express shipping on orders over $500. Standard returns within 14 days." }
    ],
    images: [
      "https://images.unsplash.com/photo-1539533377285-3422b0022b8f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop"
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Scrolling Images */}
          <div className="lg:col-span-7 space-y-4">
            {product.images.map((src, index) => (
              <div key={index} className="aspect-[3/4] overflow-hidden bg-muted">
                <img 
                  src={src} 
                  alt={`${product.name} view ${index + 1}`} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            ))}
          </div>

          {/* Right Column: Sticky Info */}
          <div className="lg:col-span-5 relative">
            <div className="lg:sticky lg:top-32 space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <Badge variant="outline" className="rounded-full px-4 border-foreground/20 text-[10px] tracking-widest uppercase">
                    New Arrival
                  </Badge>
                  <span className="text-xs tracking-widest uppercase text-muted-foreground italic">Collection 01</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight">
                  {product.name}
                </h1>
                <p className="text-xl font-medium tracking-tighter">
                  {product.price}
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="w-full rounded-none bg-foreground text-background hover:bg-foreground/90 py-8 text-xs tracking-[0.2em] uppercase">
                    Add to Bag
                  </Button>
                  <Button variant="outline" size="lg" className="w-full rounded-none border-foreground/20 py-8 text-xs tracking-[0.2em] uppercase">
                    Find in Boutique
                  </Button>
                </div>
              </div>

              <Separator className="bg-foreground/10" />

              <Accordion type="single" collapsible className="w-full">
                {product.details.map((detail, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-foreground/10">
                    <AccordionTrigger className="text-[10px] tracking-[0.2em] uppercase font-medium hover:no-underline">
                      {detail.label}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-6">
                      {detail.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Complete The Look Section */}
        <section className="py-24 mt-24 border-t border-foreground/10">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase mb-4">You May Also Like</h2>
              <h3 className="text-3xl font-light italic">Complete the Look</h3>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { name: "Silk Slip Dress", price: "$490", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000&auto=format&fit=crop" },
              { name: "Leather Chelsea Boot", price: "$650", img: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop" },
              { name: "Ribbed Merino Scarf", price: "$220", img: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1000&auto=format&fit=crop" },
              { name: "Minimalist Tote", price: "$850", img: "https://images.unsplash.com/photo-1584917033904-7911ecf5f5f3?q=80&w=1000&auto=format&fit=crop" }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[3/4] overflow-hidden mb-4 bg-muted">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                  />
                </div>
                <h4 className="text-[10px] tracking-widest uppercase font-medium">{item.name}</h4>
                <p className="text-xs text-muted-foreground mt-1 tracking-tighter">{item.price}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductPage;
