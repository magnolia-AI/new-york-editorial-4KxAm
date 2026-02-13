import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function EditorialStory() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const imageReveal = {
    hidden: { clipPath: "inset(0 100% 0 0)", opacity: 0 },
    visible: {
      clipPath: "inset(0 0% 0 0)",
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  };

  return (
    <section className="py-40 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            className="relative aspect-[3/4] order-2 lg:order-1 bg-muted"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageReveal}
          >
            <img
              src="/images/editorial-story.webp"
              alt="Editorial Story"
              className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            {/* Artistic overlay text */}
            <motion.div 
              className="absolute -top-16 -right-16 hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 0.1, x: 0 }}
              transition={{ delay: 1, duration: 1.2 }}
              viewport={{ once: true }}
            >
              <span className="text-[16rem] font-bold select-none leading-none tracking-tighter text-foreground">
                01
              </span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-12 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="space-y-6">
              <motion.span 
                className="text-xs tracking-[0.4em] font-semibold text-muted-foreground uppercase block italic"
                variants={itemVariants}
              >
                The Narrative
              </motion.span>
              <motion.h2 
                className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] uppercase"
                variants={itemVariants}
              >
                A Dialogue <br />
                Between <br />
                Street & Chic
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-xl leading-relaxed text-muted-foreground max-w-xl font-light tracking-tight"
              variants={itemVariants}
            >
              Our latest collection explores the intersection of raw urban textures and refined minimalist tailoring. Each piece is designed as a modular element for the modern wardrobe, transitioning seamlessly from morning rituals to industrial nightscapes.
            </motion.p>

            <motion.div 
              className="pt-8 border-t border-border/60 flex flex-col sm:flex-row gap-12"
              variants={itemVariants}
            >
              <div>
                <span className="text-xs font-bold tracking-[0.2em] block mb-2 uppercase">Craft</span>
                <p className="text-sm text-muted-foreground italic leading-relaxed">Ethically sourced materials,<br />precisely engineered silhouettes.</p>
              </div>
              <div>
                <span className="text-xs font-bold tracking-[0.2em] block mb-2 uppercase">Vision</span>
                <p className="text-sm text-muted-foreground italic leading-relaxed">Redefining the New York<br />aesthetic for a global era.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="pt-4">
              <Button variant="outline" className="rounded-none px-16 h-16 tracking-[0.2em] text-xs font-bold hover:bg-foreground hover:text-background transition-colors uppercase border-foreground/20">
                READ THE STORY
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
