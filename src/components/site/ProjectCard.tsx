import { cn } from "@/lib/utils";

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  location: string;
  action?: React.ReactNode;
}

export const ProjectCard = ({ image, name, description, location, action }: ProjectCardProps) => {
  return (
    <article className={cn("rounded-lg overflow-hidden border border-border bg-card shadow-sm hover:shadow-md transition-shadow")}> 
      <div className="aspect-[16/10] overflow-hidden">
        <img src={image} alt={`${name} property in ${location}`} className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
        <div className="mt-3 text-xs text-muted-foreground">{location}</div>
        {action && <div className="mt-4">{action}</div>}
      </div>
    </article>
  );
};

export default ProjectCard;
