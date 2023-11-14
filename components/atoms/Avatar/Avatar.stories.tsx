import type { Meta, StoryObj } from "@storybook/react";
import Avatar from "./";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="py-20 flex justify-center">
        <Story />
      </div>
    ),
  ],
  args: {
    imgSrc: "/images/blog/author-01.png",
    name : "Name",
    height: 50,
    width: 50,
    size : "medium",
  },
  argTypes: {
    width: {
      control: false
    },
    height: {
      control: false
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium"]
      }
    },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Avatar {...args} />;
  },
};
