import type { Meta, StoryObj } from "@storybook/react"
import Switch from "./"

const meta = {
  title: "Components/Switch",
  component: Switch,
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
    isMonthly: true,
  },
  argTypes: {
    isMonthly: {
      control: false,
    },
    setIsMonthly: {
      control: false,
    },
  },
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => {
    return <Switch {...args} />
  },
}
