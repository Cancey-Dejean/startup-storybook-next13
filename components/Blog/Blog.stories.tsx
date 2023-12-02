import type { Meta, StoryObj } from "@storybook/react";
import Blog from "./";

const meta = {
  title: "Sections/Blog",
  component: Blog,

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Blog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Blog {...args} />;
  },
};
