import heroImg from "@/assets/hero-modern-glass.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export const Hero = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${x}%`);
      document.documentElement.style.setProperty("--mouse-y", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section ref={ref} className="relative">
      <div className="relative overflow-hidden rounded-none shadow-[var(--shadow-elevated)]">
        <img
          src={heroImg}
          alt="Kennedy Equity modern glass residential building against blue sky"
          className="w-full h-[480px] md:h-[720px] object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/40 via-background/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-end">
          <div className="container pb-8 md:pb-12">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-normal leading-tight">
                Strategic Real Estate Investments. Sustainable Growth. Trusted Management.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-4">
                Kennedy Equity is a privately held real estate holding company focused on acquiring,
                developing, and managing exceptional assets across key markets.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/portfolio"><Button variant="cta" size="lg" className="rounded-[2%]">Explore Investments</Button></Link>
                <Link to="/contact"><Button variant="outline" size="lg" className="rounded-[2%]">Contact Us</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
