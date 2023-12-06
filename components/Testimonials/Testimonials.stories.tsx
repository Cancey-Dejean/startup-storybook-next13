import type { Meta, StoryObj } from "@storybook/react";
import Testimonials from "./";

const meta = {
  title: "Sections/Testimonials",
  component: Testimonials,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    showBottomLeftImage: true,
    showRightImage: true,
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Testimonials {...args} />;
  },
};
