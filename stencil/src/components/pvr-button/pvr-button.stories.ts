import {Meta} from "@storybook/web-components";
import {iconTypesArray} from "../pvr-icon/icon-type";

const meta: Meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  // component: "pvr-button",
  render: ({label, ...args}) => {
    const element = document.createElement('pvr-button');
    element.onclick = args.onClick;
    element.buttonType = args.buttonType;
    element.buttonIcon = args.buttonIcon;
    element.disabled = args.disabled;
    element.border = args.border;

    element.textContent = label;
    return element;
  },

  argTypes: {
    buttonType: {
      control: {type: "select"},
      options: ["primary", "secondary", "silent"],
    },
    buttonIcon: {
      control: {type: "select"},
      options: iconTypesArray,
    },
    disabled: {
      control: "boolean",
    },
    onClick: {action: "clicked"},
  }
};
export default meta;

export const Primary = {
  //TODO PJ: add type to args?
  args: {
    buttonType: "primary",
    label: "Button",
    disabled: false,
  }
};
export const Secondary = {
  args: {
    buttonType: "secondary",
    label: "Button",
  }
};
export const Silent = {
  args: {
    buttonType: "silent",
    label: "Button",
  }
};
export const Disabled = {
  args: {
    buttonType: "primary",
    label: "Button",
    disabled: true,
  }
};

export const Validate = {
  args: {
    buttonType: "primary",
    buttonRole: "button",
    label: "Button with icon",
    buttonIcon: "validate"
  }
}
