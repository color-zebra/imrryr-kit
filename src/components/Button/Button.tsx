import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  cn(
    "i_inline-flex i_items-center i_justify-center i_gap-2 i_whitespace-nowrap i_font-medium i_ring-offset-background i_transition-colors i_rounded-[8px]",
    "focus-visible:i_outline-none focus-visible:i_ring-2 focus-visible:i_ring-ring focus-visible:i_ring-offset-2",
    "disabled:i_pointer-events-none disabled:i_opacity-50",
    "active:i_scale-95",
    "[&_svg]:i_pointer-events-none [&_svg]:i_size-4 [&_svg]:i_shrink-0"
  ),
  {
    variants: {
      variant: {
        default: cn("i_bg-blue i_text-foreground hover:i_bg-blue-hover"),
        ghost: cn(
          "i_border i_text-blue i_bg-transparent i_border-blue hover:i_border-blue-hover hover:i_text-blue-hover"
        ),
        glow: cn(
          "i_text-foreground i_transition-shadow i_duration_300 i_border i_border-[rgba(191,219,254,0.3)]",
          "i_shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),0px_0px_40px_10px_rgba(41,40,153,0.3),inset_0px_0px_10px_5px_rgba(0,0,255,0.25),inset_0px_0px_40px_5px_rgba(0,0,255,0.25)]",
          "hover:i_shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),0px_0px_40px_10px_rgba(41,40,153,0.3),inset_0px_2px_10px_10px_rgba(0,0,255,0.25),inset_0px_0px_40px_10px_rgba(0,0,255,0.25)]"
        ),
      },
      size: {
        sm: "i_h-7 i_px-4 i_rounded-sm i_text-sm",
        md: "i_h-8 i_px-4 i_rounded-md i_text-base",
        lg: "i_h-10 i_px-5 i_rounded-md",
        xl: "i_h-14 i_px-8 i_rounded-md i_text-xl",
        icon: "i_h-10 i_px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
