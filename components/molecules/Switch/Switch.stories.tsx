import type { Meta, StoryObj } from "@storybook/react";
import Switch from "./";

const meta = {
  title: "Components/Switch",
  component: Switch,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-[434px] py-20 mx-auto">
        <Story />
      </div>
    ),
  ],
  args: {
    switchOneText: "Monthly", 
    switchTwoText: "Yearly",
  },
  argTypes: {
    isMonthly: {
      control: false
    },
    setIsMonthly: {
      control: false
    },
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Switch {...args} />;
  },
};
