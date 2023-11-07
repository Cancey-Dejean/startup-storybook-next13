import type { Meta, StoryObj } from "@storybook/react";

import Text from "./";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  title: "Components/Text",
  component: Text,
  args: {
    as: "h1",
    intent: "display-one",
    fontWeight: "normal",
    children: "Heading goes here",
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
    },
    intent: {
      control: { type: "select" },
      options: [
        "display-one",
        "display-two",
        "heading-one",
        "heading-two",
        "body-large",
        "body",
        "label",
        "caption",
      ],
    },
    fontWeight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args) => {
    return <Text {...args}></Text>;
  },
};

export const Secondary: Story = {
  render: (args) => {
    return <Text {...args}></Text>;
  },
};
