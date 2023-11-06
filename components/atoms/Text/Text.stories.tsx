import type { Meta, StoryObj } from "@storybook/react";

import Text from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  tags: ["autodocs"],
  title: "Components/Text",
  component: Text,
  args: {
    as: "h1",
    intent: "semibold",
    size: "heading-one",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
    },
    intent: {
      control: { type: "select" },
      options: ["normal", "semibold", "bold"],
    },
    size: {
      control: { type: "select" },
      options: [
        "display-one",
        "display-two",
        "heading-one",
        "heading-two",
        "body",
      ],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Typography: Story = {
  args: {
    children: "Heading goes here",
  },
  render: (args) => {
    return <Text {...args} />;
  },
};
