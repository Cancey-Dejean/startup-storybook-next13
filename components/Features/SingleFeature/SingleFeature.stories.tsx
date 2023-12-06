import type { Meta, StoryObj } from "@storybook/react";
import SingleFeature from "./";
import { FeatureIconGrid } from "../../../components/atoms/Icons";

const meta = {
  title: "Components/SingleFeature",
  component: SingleFeature,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="mx-auto max-w-[434px] py-20">
        <Story />
      </div>
    ),
  ],
  args: {
    icon: <FeatureIconGrid />,
   title: "Crafted for Startups",
   paragraph: "Tuae nam ex similique incidunt expedita exerci tationem laudantium. Repellendus quisquam numquam perferendis earum sapiente non tempore? Fugit repellat ut maiores.",
  },
  argTypes: {
    icon: {
      control: false
    }
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof SingleFeature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <SingleFeature {...args} />;
  },
};
