import { motion } from 'framer-motion'

export function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-sm uppercase tracking-widest text-muted-foreground mb-4 block">Our Story</span>
        <h1 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight">The intersection of curation and culture.</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg leading-relaxed mb-24">
          <p>
            Born in the heart of New York, we are more than a boutique. We are an editorial lens on the modern wardrobe, selecting pieces that embody the city's restless spirit and enduring elegance.
          </p>
          <p>
            Our collection is a dialogue between established heritage and emerging voices. We believe that true style is a form of literature—a story told through texture, silhouette, and intent.
          </p>
        </div>

        <div className="aspect-[16/9] bg-muted mb-24 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="w-full h-full flex items-center justify-center text-muted-foreground italic">
            Editorial Workspace Imaging
          </div>
        </div>
      </motion.div>
    </div>
  )
}

