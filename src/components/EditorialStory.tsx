import { Button } from "@/components/ui/button";

export function EditorialStory() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[3/4] order-2 lg:order-1">
            <img
              src="/images/editorial-story.webp"
              alt="Editorial Story"
              className="h-full w-full object-cover"
            />
            {/* Artistic overlay text */}
            <div className="absolute -top-10 -right-10 hidden lg:block">
              <span className="text-[12rem] font-bold opacity-5 select-none leading-none">
                01
              </span>
            </div>
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <span className="text-sm tracking-[0.3em] font-medium text-muted-foreground uppercase block italic">
                The Narrative
              </span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter leading-[1.1]">
                A DIALOGUE <br />
                BETWEEN <br />
                STREET & CHIC
              </h2>
            </div>
            
            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl">
              Our latest collection explores the intersection of raw urban textures and refined minimalist tailoring. Each piece is designed as a modular element for the modern wardrobe, transitioning seamlessly from morning rituals to industrial nightscapes.
            </p>

            <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-8">
              <div>
                <span className="text-xs font-bold tracking-widest block mb-1">CRAFT</span>
                <p className="text-sm text-muted-foreground italic">Ethically sourced, precisely engineered.</p>
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest block mb-1">VISION</span>
                <p className="text-sm text-muted-foreground italic">Redefining the New York aesthetic.</p>
              </div>
            </div>

            <Button variant="outline" className="rounded-none px-12 h-14 tracking-widest hover:bg-foreground hover:text-background transition-colors">
              READ THE STORY
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

