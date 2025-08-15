import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border mt-20">
      <div className="container py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-base font-semibold">Kennedy Equity</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Strategic real estate investments and trusted property management.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:underline" to="/about">About</Link></li>
            <li><Link className="hover:underline" to="/portfolio">Portfolio</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-2">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:underline" to="/terms">Terms of Service</Link></li>
            <li><Link className="hover:underline" to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {year} Kennedy Equity. All rights reserved.</p>
          <a href="mailto:info@kennedyequity.com" className="text-xs hover:underline">info@kennedyequity.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
