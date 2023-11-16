import {Meta} from "@storybook/web-components";
import {iconTypesArray} from "./icon-type";

const meta: Meta = {
  title: "Components/Icon",
  tags: ["autodocs"],

  render: ({label, ...args}) => {
    const element = document.createElement('pvr-icon');
    element.type = args.type;
    return element;
  },

  argTypes: {
    type: {
      control: {type: "select"},
      options: iconTypesArray,
    },
  }
};
export default meta;

export const Icon = {
  args: {
    type: "check",
  }
};
