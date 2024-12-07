import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

export const glassVariants = cva(
  cn(
    "i_backdrop-blur-[10px] i_absolute i_top-0 i_left-0 i_w-full i_h-full i_rounded-md"
  ),
  {
    variants: {
      glassColor: {
        black: "i_bg-container",
        transparent: " i_bg-transparent",
      },
      glow: {
        no: "i_shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25)]",
        small:
          "i_shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),inset_0px_0px_10px_5px_rgba(255,255,255,0.025),inset_0px_0px_40px_5px_rgba(255,255,255,0.025)]",
        big: "i_shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.25),inset_0.75px_0.5px_rgba(255,255,255,0.25),3px_2px_10px_rgba(0,0,0,0.25),inset_0px_0px_10px_5px_rgba(255,255,255,0.025),inset_0px_50px_100px_5px_rgba(255,255,255,0.1)]",
      },
    },
    defaultVariants: {
      glow: "small",
    },
  }
);

export interface GlassProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof glassVariants> {}

export const Glass = ({
  children,
  className,
  glassColor,
  glow,
}: GlassProps) => {
  return (
    <div className={cn("i_relative i_w-full i_h-full")}>
      <div className={cn(glassVariants({ glassColor, glow }))} />
      <div className={cn("i_relative i_z-10 i_text-white i_p-3", className)}>
        {children}
      </div>
    </div>
  );
};
