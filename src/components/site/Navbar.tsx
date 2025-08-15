import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
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
  to: "/portfolio?tab=construction",
  label: "Construction"
}];
export const Navbar = () => {
  const { pathname } = useLocation();
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  
  return <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-ring rounded-md">
          <span className="tracking-tight font-extralight text-xl text-slate-700">Kennedy Equity</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => <Link key={item.to} to={item.to} className={`text-sm transition-colors hover:text-foreground/80 ${pathname === item.to ? "text-foreground" : "text-foreground/70"}`}>
              {item.label}
            </Link>)}
          
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
          <Link to="/contact">
            <Button variant="cta" size="sm" className="font-light">Work With Us</Button>
          </Link>
        </div>
      </nav>
    </header>;
};
export default Navbar;