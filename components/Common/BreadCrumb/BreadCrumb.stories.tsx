import type { Meta, StoryObj } from "@storybook/react"
import BreadCrumb from "./"

const meta = {
  title: "Common/BreadCrumb",
  component: BreadCrumb,
  args: {
    pageName: "Page Name",
    description: "Page Description",
    showLeftImage: true,
    showRightImage: true,
  },
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof BreadCrumb>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <BreadCrumb {...args} />
  },
}
