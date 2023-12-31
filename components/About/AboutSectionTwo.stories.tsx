import type { Meta, StoryObj } from "@storybook/react";
import AboutSectionTwo from "./AboutSectionTwo";

const meta = {
  title: "Sections/About/AboutSectionTwo",
  component: AboutSectionTwo,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof AboutSectionTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <AboutSectionTwo {...args} />;
  },
};
