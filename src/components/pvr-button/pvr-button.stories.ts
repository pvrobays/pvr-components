export default {
  title: "Components/Button",
  tags: ["autodocs"],
  render: ({ label, ...args}) =>
    `<pvr-button
        button-type="${args.buttonType ?? "primary"}"
        button-role="${args.buttonRole ?? "button"}"
        disabled="${args.disabled ?? false}"
        onClick="${args.onClick ?? null}">
            ${label}
    </pvr-button>`,
  argTypes: {
    buttonType: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    buttonRole: {
      control: { type: "radio" },
      options: ["button", "reset"],
    },
    disabled: {
      control: "boolean",
    },
    onClick: { action: 'onClick' },
  }
};

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
