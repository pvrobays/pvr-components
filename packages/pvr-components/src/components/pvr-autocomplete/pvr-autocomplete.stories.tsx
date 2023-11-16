import {Meta} from "@storybook/web-components";
// import { useArgs } from '@storybook/manager-api';

const meta: Meta = {
  title: "Components/Autocomplete",
  tags: ["autodocs"],
  render: ({...args}) => {
    const { placeholder, options, width, async, pvrKeyPress } = args;
    const element = document.createElement('pvr-autocomplete');
    element.placeholder = placeholder;
    element.options = options;
    element.width = width;
    element.async = async;
    console.log('async render', async);
    if (pvrKeyPress)
      element.addEventListener('pvrKeyPress', pvrKeyPress);
    return element;
  }
}
export default meta;

export const Basic = {
  args: {
    placeholder: "Autocomplete",
    options: [{ value: "test 1" }, { value: "test 2" }, { value: "dries" }],
    width: "600"
  }
};

export const Async = {
  args: {
    options: [],
    placeholder: "Async Search",
    async: true,
  },
  render: function Render(args) {
    // const [{ options }, updateArgs] = useArgs();

    const element = document.createElement('pvr-autocomplete');
    const asyncKeyPress = (event) => {
      console.log('async keypress', event, Async.args);
      setTimeout(() => { // Simulating server request
        element.options = [{value: "server result"}];
      }, 500);
    }

    element.placeholder = args.placeholder;
    element.options = args.options;
    element.async = args.async;
    element.addEventListener('pvrKeyPress', asyncKeyPress);
    return element;
  }
};
