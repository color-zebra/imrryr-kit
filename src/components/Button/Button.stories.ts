import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: {
        type: "inline-radio",
      },
      options: ["default", "ghost", "glow"],
    },
    size: {
      control: {
        type: "inline-radio",
      },
      options: ["sm", "md", "lg", "xl", "icon"],
    },
  },
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Кнопка",
    size: "sm",
  },
};
