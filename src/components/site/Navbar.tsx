import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";
const navItems = [{
  to: "/",
  label: "Home"
}, {
  to: "/about",
  label: "About"
}, {
  to: "/contact",
  label: "Contact"
}];

const portfolioItems = [{
  to: "/portfolio?tab=pmi-austin",
  label: "PMI Austin"
}, {
  to: "/portfolio?tab=residential", 
  label: "Single & Multi Family"
}, {
  to: "/new-construction",
  label: "New Construction"
}];

const galleryItems = [{
  to: "/gallery",
  label: "Flip Homes"
}, {
  to: "/new-construction",
  label: "New Construction"
}];
export const Navbar = () => {
  const { pathname } = useLocation();
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-ring rounded-md">
          <span className="tracking-tight font-extralight text-xl text-slate-700">Kennedy Equity</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => <Link key={item.to} to={item.to} className={`text-sm transition-colors hover:text-foreground/80 ${pathname === item.to ? "text-foreground" : "text-foreground/70"}`}>
              {item.label}
            </Link>)}
          
          <DropdownMenu open={galleryOpen} onOpenChange={setGalleryOpen}>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center gap-1 text-sm transition-colors hover:text-foreground/80 ${pathname === "/gallery" || pathname === "/new-construction" ? "text-foreground" : "text-foreground/70"}`}>
                Gallery
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${galleryOpen ? 'rotate-180' : ''}`} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg z-50">
              {galleryItems.map(item => (
                <DropdownMenuItem key={item.to} asChild>
                  <Link to={item.to} className="w-full text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <DropdownMenu open={portfolioOpen} onOpenChange={setPortfolioOpen}>
            <DropdownMenuTrigger asChild>
              <button className={`flex items-center gap-1 text-sm transition-colors hover:text-foreground/80 ${pathname === "/portfolio" ? "text-foreground" : "text-foreground/70"}`}>
                Portfolio
                <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${portfolioOpen ? 'rotate-180' : ''}`} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-background border border-border shadow-lg z-50">
              {portfolioItems.map(item => (
                <DropdownMenuItem key={item.to} asChild>
                  <Link to={item.to} className="w-full text-sm hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden md:block">
            <Button variant="cta" size="sm" className="font-light">Work With Us</Button>
          </Link>
          
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-6 mt-8">
                {navItems.map(item => (
                  <Link 
                    key={item.to} 
                    to={item.to} 
                    className={`text-lg transition-colors hover:text-foreground/80 ${pathname === item.to ? "text-foreground font-medium" : "text-foreground/70"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                
                <div className="flex flex-col gap-3">
                  <span className="text-lg font-medium text-foreground">Gallery</span>
                  <div className="flex flex-col gap-3 ml-4">
                    {galleryItems.map(item => (
                      <Link 
                        key={item.to} 
                        to={item.to} 
                        className="text-base text-foreground/70 hover:text-foreground/80 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <span className="text-lg font-medium text-foreground">Portfolio</span>
                  <div className="flex flex-col gap-3 ml-4">
                    {portfolioItems.map(item => (
                      <Link 
                        key={item.to} 
                        to={item.to} 
                        className="text-base text-foreground/70 hover:text-foreground/80 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="cta" size="lg" className="w-full font-light">Work With Us</Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>;
};
export default Navbar;