export default {
  title: "Components/Button",
  tags: ["autodocs"],
  render: ({ label, ...args}) =>
    `<pvr-button button-type="${args.buttonType}" button-role="${args.buttonRole}">${label}</pvr-button>`,
  argTypes: {
    buttonType: {
      control: { type: "select" },
      options: ["primary", "secondary", "tertiary"],
    },
    buttonRole: {
      control: { type: "radio" },
      options: ["button", "reset"],
    }
  }
};

export const Primary = {
  //TODO PJ: add type to args?
  args: {
    buttonType: "primary",
    buttonRole: "button",
    label: "Primary button",
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
