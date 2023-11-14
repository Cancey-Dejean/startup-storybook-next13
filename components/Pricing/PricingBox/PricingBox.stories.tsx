import type { Meta, StoryObj } from "@storybook/react";
import PricingBox from "./";
import CheckWithText from "../../../components/molecules/CheckWithText";

const meta = {
  decorators: [
    (Story) => (
      <div className="max-w-[434px] py-20 mx-auto">
        <Story />
      </div>
    ),
  ],
  title: "Components/PricingBox",
  component: PricingBox,
  tags: ["autodocs"],
  args: {
    price: "40",
    duration: "mo",
    packageName: "Lite",
    subtitle: "Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim.",
    showBottomRightImage: true,
    children: "",
  },
  argTypes: {
    children: {
      control: false
    }
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof PricingBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <PricingBox {...args}>
      <CheckWithText />
      <CheckWithText />
      <CheckWithText />
      <CheckWithText />
      <CheckWithText />
    </PricingBox>;
  },
};
