import {Meta, StoryObj} from "@storybook/web-components";
import { PvrMultiSelectProps } from "./pvr-multiselect";

const meta: Meta = {
  title: "Components/MultiSelect",
  tags: ["autodocs"],
  component: 'pvr-multiselect'
}
export default meta;

type Story = StoryObj<PvrMultiSelectProps>;
export const Primary: Story = {
  args: {
    options: [
      {
        groupName: "Europe",
        selected: true,
        options: [
          { optionName: "Belgium" }, { optionName: "Netherlands" }
        ]
      },
      {
        groupName: "Africa",
        options: [
          { optionName: "Morocco" }
        ]
      },
      { optionName: "Vatican City" }
    ]
  }
}
