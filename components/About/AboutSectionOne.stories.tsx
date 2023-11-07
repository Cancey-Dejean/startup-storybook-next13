import type { Meta, StoryObj } from "@storybook/react";
import AboutSectionOne from "./AboutSectionOne";

const meta = {
  title: "Sections/About/AboutSectionOne",
  component: AboutSectionOne,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof AboutSectionOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <AboutSectionOne {...args} />;
  },
};
