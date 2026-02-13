import { Outlet, Link } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 py-4 px-10 flex justify-between items-center transition-all duration-300">
        <Link to="/" className="text-xl font-serif tracking-tighter uppercase italic text-foreground">NY/ED</Link>
        <nav className="hidden md:flex space-x-8 text-[10px] uppercase tracking-[0.2em] font-medium text-foreground">
          <Link to="/category/fashion" className="hover:opacity-60 transition-opacity">Fashion</Link>
          <Link to="/category/living" className="hover:opacity-60 transition-opacity">Living</Link>
          <Link to="/category/art" className="hover:opacity-60 transition-opacity">Art</Link>
        </nav>
        <div className="text-[10px] uppercase tracking-[0.2em]">Menu</div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="py-20 px-10 border-t border-border bg-background">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-6 max-w-sm">
            <h2 className="text-2xl font-serif italic uppercase tracking-tighter">New York Editorial</h2>
            <p className="text-xs text-muted-foreground leading-relaxed uppercase tracking-widest">
              A physical and digital archive of modern existence. Dedicated to the preservation of form and function.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-[10px] uppercase tracking-[0.2em]">
            <div className="flex flex-col space-y-4">
              <span className="text-muted-foreground">Social</span>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
            <div className="flex flex-col space-y-4">
              <span className="text-muted-foreground">Contact</span>
              <a href="#">Stockholm</a>
              <a href="#">New York</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
