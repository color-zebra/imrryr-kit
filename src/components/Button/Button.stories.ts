import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Кнопка",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Кнопка",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    variant: "default",
    children: "Кнопка",
  },
};
