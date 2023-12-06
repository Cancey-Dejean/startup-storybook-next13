import type { Meta, StoryObj } from "@storybook/react";
import Features from "./";

const meta = {
  title: "Sections/Features",
  component: Features,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Features>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Features {...args} />;
  },
};
