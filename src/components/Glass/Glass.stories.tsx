import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Glass } from "./Glass";
import { Button } from "../Button";

const meta = {
  title: "UI/Glass",
  component: Glass,
  argTypes: {
    glassColor: {
      options: ["black", "transparent"],
      control: {
        type: "radio",
      },
    },
    glow: {
      options: ["no", "small", "big"],
      control: {
        type: "radio",
      },
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Glass>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    glow: "small",
    glassColor: "transparent",
    className: "i_max-w-[300px] i_flex i_flex-col i_items-center",
    children: (
      <>
        <h3 className="i_text-2xl i_text-center i_mb-8">Title</h3>
        <p className="i_mb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque minima
          eaque iste quos ipsa sunt ab suscipit, odit cum cupiditate!
        </p>
        <Button>Button</Button>
      </>
    ),
  },
};
