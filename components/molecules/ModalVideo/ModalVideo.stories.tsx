import type { Meta, StoryObj } from "@storybook/react";
import ModalVideo from "./";

const meta = {
  title: "Sections/ModalVideo",
  component: ModalVideo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} satisfies Meta<typeof ModalVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <ModalVideo {...args} />;
  },
};
