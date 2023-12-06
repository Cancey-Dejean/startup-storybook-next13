import type { Meta, StoryObj } from "@storybook/react";
import SingleTestimonial from "./";

const meta = {
  title: "Components/SingleTestimonial",
  component: SingleTestimonial,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  args: {
    name: "John Doe",
    designation: "Frontend Developer",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    image: "/images/testimonials/author-01.png",}
    ,
} satisfies Meta<typeof SingleTestimonial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <SingleTestimonial {...args} />;
  },
};
