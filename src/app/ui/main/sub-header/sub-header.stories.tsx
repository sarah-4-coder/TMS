import type { Meta, StoryObj } from "@storybook/react";
import { withMainContext, withRemixStub } from "@app/stories/utils";
import { SubHeader } from "./sub-header";

const meta: Meta<typeof SubHeader> = {
  title: "Pages/Main/Header",
  component: SubHeader,
  parameters: {
    layout: "top",
  },
  decorators: [
    (Story) => (
      <div className="w-full">{withRemixStub(withMainContext(Story))}</div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof SubHeader>;

export const Default: Story = {};
