import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  cn(
    "i_inline-flex i_items-center i_justify-center i_gap-2 i_whitespace-nowrap i_rounded-md i_text-sm i_font-medium i_ring-offset-background i_transition-colors",
    "focus-visible:i_outline-none focus-visible:i_ring-2 focus-visible:i_ring-ring focus-visible:i_ring-offset-2",
    "disabled:i_pointer-events-none disabled:i_opacity-50",
    "[&_svg]:i_pointer-events-none [&_svg]:i_size-4 [&_svg]:i_shrink-0"
  ),
  {
    variants: {
      variant: {
        default: cn("i_bg-primary i_text-primary-foreground"),
      },
      size: {
        default: "i_h-10 i_px-4 i_py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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

export { Button, buttonVariants };
