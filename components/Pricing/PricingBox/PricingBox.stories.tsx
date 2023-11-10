import type { Meta, StoryObj } from "@storybook/react";
import PricingBox from "./";

const meta = {
  title: "Components/PricingBox",
  component: PricingBox,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof PricingBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <PricingBox {...args} />;
  },
};
