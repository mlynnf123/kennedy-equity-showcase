import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  image: string;
  name: string;
  description: string;
  location: string;
  sector: string;
  action?: React.ReactNode;
}

export const PortfolioCard = ({ image, name, description, location, sector, action }: PortfolioCardProps) => {
  return (
    <article className={cn("rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow")}> 
      <div className="aspect-[16/10] overflow-hidden">
        <img src={image} alt={`${name} property in ${location}`} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <span className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground">{sector}</span>
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
        <div className="mt-3 text-xs text-muted-foreground">{location}</div>
        {action && <div className="mt-4">{action}</div>}
      </div>
    </article>
  );
};

export default PortfolioCard;
