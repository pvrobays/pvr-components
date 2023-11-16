import {Meta} from "@storybook/web-components";
import {iconTypesArray} from "../pvr-icon/icon-type";

const meta: Meta = {
  title: "Components/Input",
  tags: ["autodocs"],
  render: ({...args}) => {
    const element = document.createElement('pvr-input');
    element.placeholder = args.placeholder;
    element.icon = args.icon;
    return element;
  },
  argTypes: {
    icon: {
      control: {type: "select"},
      options: iconTypesArray,
    },
  }
}
export default meta;

export const Basic = {
  args: {
    placeholder: "placeholder"
  }
};