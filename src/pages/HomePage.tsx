import { EditorialHero } from "@/components/EditorialHero";
import { EditorialGrid } from "@/components/EditorialGrid";
import { ProductCarousel } from "@/components/ProductCarousel";
import { EditorialStory } from "@/components/EditorialStory";
import { Button } from "@/components/ui/button";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <EditorialHero />
      <EditorialGrid />
      <ProductCarousel />
      <EditorialStory />
      
      {/* Newsletter / Footer Preview Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter mb-4 italic">STAY INFORMED</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Join our inner circle for early access to new drops and editorial deep-dives.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-muted px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button className="rounded-none px-8 py-3 text-sm font-bold tracking-widest uppercase transition-colors">
              JOIN
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
