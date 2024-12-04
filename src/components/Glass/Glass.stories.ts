import type { Meta, StoryObj } from "@storybook/react";

import { Glass } from "./Glass";

const meta = {
  title: "UI/Glass",
  component: Glass,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Glass>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {},
};
