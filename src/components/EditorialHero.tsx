import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function EditorialHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img
          src="/images/editorial-hero.webp"
          alt="Luxury Fashion Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="container relative z-20 text-center px-4 md:px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[0.9] tracking-tight text-white whitespace-pre-line"
          variants={itemVariants}
        >
          THE NEW {"\n"} STANDARD
        </motion.h1>
        <motion.p 
          className="text-lg md:text-xl font-light tracking-widest uppercase mb-12 max-w-2xl mx-auto text-white"
          variants={itemVariants}
        >
          Experimental Design meets high-performance aesthetics.
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          variants={itemVariants}
        >
          <Button
            variant="outline"
            className="rounded-none border-white text-white hover:bg-white hover:text-black min-w-[220px] h-12 text-xs tracking-[0.2em] transition-all duration-300"
          >
            SHOP COLLECTION
          </Button>
          <Button
            variant="ghost"
            className="rounded-none text-white hover:bg-white/10 min-w-[220px] h-12 text-xs tracking-[0.2em] transition-all duration-300"
          >
            THE EDITORIAL
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-12 bg-white/50 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-white h-full"
            animate={{ 
              y: ["-100%", "100%"] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
