import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    className: "",
    intent: "primary",
    fontWeight: "semibold",
    size: "medium",
    shadow: "none",
    shadowHover: false,
    label: "Button",
    ariaLabel: "Aria Label",
    linkUrl: "",
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    label: {
      control: { type: "text" },
    },
    intent: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary", "text"],
    },
    size: {
      control: { type: "select" },
      options: ["medium", "large"],
    },
    fontWeight: {
      control: { type: "select" },
      options: ["semibold", "bold"],
    },
    shadow: {
      control: { type: "select" },
      options: ["none", "one", "signUp"],
    },
    icon: {
      control: false,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => {
    return <Button {...args}></Button>;
  },
};
