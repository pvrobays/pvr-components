import {Meta} from "@storybook/web-components";

const meta: Meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  // component: "pvr-button",
  render: ({label, ...args}) => {
    const element = document.createElement('pvr-button');
    element.onclick = args.onClick;
    element.buttonType = args.buttonType;
    element.buttonRole = args.buttonRole;
    element.disabled = args.disabled;

    element.textContent = label;
    return element;
  },
  /*render: ({label, ...args}) => { return `<pvr-button
      button-type="${args.buttonType ?? "primary"}"
      button-role="${args.buttonRole ?? "button"}"
      disabled="${args.disabled ?? false}"
      onclick="${args.onClick ?? null}">
          ${label}
  </pvr-button>`},*/
  argTypes: {
    buttonType: {
      control: {type: "select"},
      options: ["primary", "secondary", "tertiary"],
    },
    buttonRole: {
      control: {type: "radio"},
      options: ["button", "reset"],
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
