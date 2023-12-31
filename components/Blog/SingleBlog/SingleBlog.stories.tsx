import type { Meta, StoryObj } from "@storybook/react";
import SingleBlog from "./";

const meta = {
  title: "Components/SingleBlog",
  component: SingleBlog,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  args: {
    title:"Best UI components for modern websites", 
    image:"/images/blog/blog-01.jpg", 
    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.", 
    authorImage:"/images/blog/author-01.png", 
    authorDesignation:"Graphic Designer", 
    authorName:"Samuyl Joshi", 
    tags:"Creative", 
    publishDate:"2025"
  },
  argTypes:{
    publishDate: {
      control: {
        type: "text",
      },
    },
    id: {
      control: false
    },
  }
} satisfies Meta<typeof SingleBlog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <SingleBlog {...args} />;
  },
};
