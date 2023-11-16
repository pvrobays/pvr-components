import {Meta} from "@storybook/web-components";
import {iconTypesArray} from "../pvr-icon/icon-type";

const meta: Meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  // component: "pvr-button",
  render: ({label, ...args}) => {
    const element = document.createElement('pvr-button');
    element.onclick = args.onClick;
    element.type = args.type;
    element.icon = args.icon;
    element.disabled = args.disabled;
    element.border = args.border;
    element.size = args.size;

    element.textContent = label;
    return element;
  },

  argTypes: {
    type: {
      control: {type: "select"},
      options: ["primary", "secondary", "silent", "red"],
      defaultValue: "primary"
    },
    size: {
      control: {type: "select"},
      options: ["small", "normal", "large"],
      defaultValue: "normal"
    },
    icon: {
      control: {type: "select"},
      options: iconTypesArray,
      defaultValue: null
    },
    disabled: {
      control: "boolean",
      defaultValue: false
    },
    border: {
      control: "boolean",
      defaultValue: false,
    },
    onClick: {action: "clicked"},
  }
};
export default meta;

export const Primary = {
  args: {
    type: "primary",
    label: "Button",
    disabled: false,
  }
};
export const Secondary = {
  args: {
    type: "secondary",
    label: "Button",
  }
};
export const Silent = {
  args: {
    type: "silent",
    label: "Button",
  }
};
export const Disabled = {
  args: {
    type: "primary",
    label: "Button",
    disabled: true,
  }
};

export const Check = {
  args: {
    type: "primary",
    label: "Button with icon",
    icon: "check"
  }
}
