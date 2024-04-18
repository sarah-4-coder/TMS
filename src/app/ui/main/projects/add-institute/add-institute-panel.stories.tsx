import type { Meta, StoryObj } from "@storybook/react";
import { projectMock1 } from "@domain/project";
import { usersMock } from "@domain/user";
import { withRemixStub, withMainContext } from "@app/stories/utils";
import { AddInstitutePanelView } from "./add-institute-panel.view";

const meta: Meta<typeof AddInstitutePanelView> = {
  title: "Pages/Projects/CreateProjectPanelView",
  component: AddInstitutePanelView,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    project: {
      control: {
        type: "object",
      },
    },
    users: {
      control: {
        type: "object",
      },
    },
  },
  decorators: [(Story) => withRemixStub(withMainContext(Story))],
};

export default meta;
type Story = StoryObj<typeof AddInstitutePanelView>;

export const Default: Story = {
  args: {
    project: projectMock1,
    users: usersMock,
  },
};
