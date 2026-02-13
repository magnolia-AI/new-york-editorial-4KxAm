import { Button } from "@/components/ui/button";

export function EditorialHero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/editorial-hero.webp"
          alt="Luxury Fashion Hero"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center text-white">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
          THE NEW <br />
          STANDARD
        </h1>
        <p className="text-lg md:text-xl font-light tracking-widest uppercase mb-8 max-w-2xl mx-auto">
          Experimental Design meets high-performance aesthetics.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black rounded-none px-8 py-6 text-sm tracking-widest"
          >
            SHOP COLLECTION
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 rounded-none px-8 py-6 text-sm tracking-widest"
          >
            THE EDITORIAL
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-white/50" />
      </div>
    </section>
  );
}

