import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const newArrivals = [
  {
    name: "LINEAR WATCH",
    price: "$450",
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=600&q=80",
  },
  {
    name: "SILK BLEND SHIRT",
    price: "$280",
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?w=600&q=80",
  },
  {
    name: "LEATHER TOTE",
    price: "$890",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&q=80",
  },
  {
    name: "WOOL TROUSERS",
    price: "$320",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80",
  },
  {
    name: "TECHNICAL PARKA",
    price: "$1,200",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
  },
];

export function ProductCarousel() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const productVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex justify-between items-end mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tighter mb-2">NEW ARRIVALS</h2>
            <motion.div 
              className="h-1 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>
          <Button variant="link" className="text-sm tracking-widest underline underline-offset-4">
            VIEW ALL
          </Button>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <CarouselContent className="-ml-4">
              {newArrivals.map((product, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                  <motion.div 
                    variants={productVariants}
                    className="group space-y-4 cursor-pointer"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-background relative">
                      <motion.img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      />
                      <motion.div 
                        className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                      />
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-sm tracking-wider uppercase mb-1">{product.name}</h4>
                        <p className="text-muted-foreground text-xs">{product.price}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </motion.div>
          <div className="flex justify-end gap-2 mt-8">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 border-none bg-background shadow-none hover:bg-muted" />
            <CarouselNext className="static translate-y-0 h-10 w-10 border-none bg-background shadow-none hover:bg-muted" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

