import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
const navItems = [{
  to: "/",
  label: "Home"
}, {
  to: "/about",
  label: "About"
}, {
  to: "/portfolio",
  label: "Portfolio"
}, {
  to: "/approach",
  label: "Approach"
}, {
  to: "/news",
  label: "News"
}, {
  to: "/contact",
  label: "Contact"
}];
export const Navbar = () => {
  const {
    pathname
  } = useLocation();
  return <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-ring rounded-md">
          <span className="tracking-tight font-extralight text-xl text-slate-700">Kennedy Equity</span>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map(item => <Link key={item.to} to={item.to} className={`text-sm transition-colors hover:text-foreground/80 ${pathname === item.to ? "text-foreground" : "text-foreground/70"}`}>
              {item.label}
            </Link>)}
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