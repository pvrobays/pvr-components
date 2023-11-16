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
    element.buttonRole = args.buttonRole;
    element.buttonIcon = args.buttonIcon;
    element.disabled = args.disabled;

    element.textContent = label;
    return element;
  },

  argTypes: {
    buttonType: {
      control: {type: "select"},
      options: ["primary", "secondary", "tertiary"],
    },
    buttonRole: {
      control: {type: "radio"},
      options: ["button", "reset"],
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
    buttonRole: "button",
    label: "Primary button",
    disabled: false,
  }
};
export const Secondary = {
  args: {
    buttonType: "secondary",
    buttonRole: "button",
    label: "Secondary button",
  }
};
export const Tertiary = {
  args: {
    buttonType: "tertiary",
    buttonRole: "button",
    label: "Tertiary button",
  }
};
export const Disabled = {
  args: {
    buttonType: "primary",
    buttonRole: "button",
    label: "Disabled button",
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
