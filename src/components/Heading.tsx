import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "lg" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight font-display text-slate-700 ",
        size === "xl" && "text-5xl md:text-7xl",
        size === "lg" && "text-4xl md:text-5xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}
