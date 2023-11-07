import type { Meta, StoryObj } from "@storybook/react";
import Hero from ".";

const meta = {
  title: "Sections/Hero",
  component: Hero,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  args: {
    title: "Free and Open-Source Next.js Template for Startup & SaaS",
    subText:
      "Startup is free Next.js template for startups and SaaS business websites comes with all the essential pages,  components, and sections you need to launch a complete business website, built-with Next 13.x and Tailwind CSS.",
    showImageTopRight: true,
    showImageBottomLeft: true,
    btnOneLabel: "🔥 Get Pro",
    btnOneLink: "https://nextjstemplates.com/templates/startup",
    btnTwoLabel: "Star on GitHub",
    btnTwoLink: "https://nextjstemplates.com/templates/saas",
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return <Hero {...args} />;
  },
};
