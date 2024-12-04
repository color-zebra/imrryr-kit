import { cva, VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";

export const glassVariants = cva(
  cn(
    "i_backdrop-blur-[10px] i_p-4 i_absolute i_w-full i_h-full i_rounded-lg",
    "i_shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),inset_0px_0px_10px_5px_rgba(255,255,255,0.025),inset_0px_0px_40px_5px_rgba(255,255,255,0.025)]"
  )
);

export interface GlassProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof glassVariants> {}

export const Glass = () => {
  return (
    <div className="i_w-[400px] i_p-8 i_h-[400px] i_bg-cover i_bg-no-repeat i_bg-black i_bg-[url('https://cdn.mos.cms.futurecdn.net/AoWXgnHSxAAPxqymPQMQYL-650-80.jpg.webp')]">
      <div className="i_relative i_w-full i_h-full">
        <div className={cn(glassVariants())} />
        <span>Glass</span>
      </div>
    </div>
  );
};
