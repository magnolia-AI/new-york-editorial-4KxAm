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
        duration: 1.2,
        ease: [0.77, 0, 0.175, 1],
      },
    },
  };

  return (
    <section className="py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="relative aspect-[3/4] order-2 lg:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={imageReveal}
          >
            <img
              src="/images/editorial-story.webp"
              alt="Editorial Story"
              className="h-full w-full object-cover"
            />
            {/* Artistic overlay text */}
            <motion.div 
              className="absolute -top-10 -right-10 hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 0.05, x: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
            >
              <span className="text-[12rem] font-bold select-none leading-none">
                01
              </span>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-8 order-1 lg:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <div className="space-y-4">
              <motion.span 
                className="text-sm tracking-[0.3em] font-medium text-muted-foreground uppercase block italic"
                variants={itemVariants}
              >
                The Narrative
              </motion.span>
              <motion.h2 
                className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1]"
                variants={itemVariants}
              >
                A DIALOGUE <br />
                BETWEEN <br />
                STREET & CHIC
              </motion.h2>
            </div>
            
            <motion.p 
              className="text-lg leading-relaxed text-muted-foreground max-w-xl"
              variants={itemVariants}
            >
              Our latest collection explores the intersection of raw urban textures and refined minimalist tailoring. Each piece is designed as a modular element for the modern wardrobe, transitioning seamlessly from morning rituals to industrial nightscapes.
            </motion.p>

            <motion.div 
              className="pt-4 border-t border-border flex flex-col sm:flex-row gap-8"
              variants={itemVariants}
            >
              <div>
                <span className="text-xs font-bold tracking-widest block mb-1">CRAFT</span>
                <p className="text-sm text-muted-foreground italic">Ethically sourced, precisely engineered.</p>
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest block mb-1">VISION</span>
                <p className="text-sm text-muted-foreground italic">Redefining the New York aesthetic.</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button variant="outline" className="rounded-none px-12 h-14 tracking-widest hover:bg-foreground hover:text-background transition-colors">
                READ THE STORY
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

