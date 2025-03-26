import { cn } from "@/lib/utils";

interface BadgeProps {
  text: string;
  className?: string;
}

const Badge = ({ text, className }: BadgeProps) => {
  return (
    <div
      className={cn(
        "bg-primary-foreground inline-flex flex-row items-center gap-2 rounded-[10px] border border-white/15 px-3 py-1 text-white",
        className,
      )}
    >
      {text}
    </div>
  );
};

export default Badge;
