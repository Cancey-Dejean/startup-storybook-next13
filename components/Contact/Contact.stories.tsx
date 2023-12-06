import type { Meta, StoryObj } from "@storybook/react";
import Contact from "./";

const meta = {
  title: "Sections/Contact",
  component: Contact,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Contact {...args} />;
  },
};
