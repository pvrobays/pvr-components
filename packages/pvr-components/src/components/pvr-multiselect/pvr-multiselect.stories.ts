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
        name: "Europe",
        selected: true,
        options: [
          { name: "Belgium" }, { name: "Netherlands" }
        ]
      },
      {
        name: "Africa",
        options: [
          { name: "Morocco" }
        ]
      },
      { name: "Vatican City" }
    ]
  }
}
