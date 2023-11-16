import {Component, h, Prop} from '@stencil/core';
import {IconType} from "../pvr-icon/icon-type";

@Component({
  tag: 'pvr-button',
  styleUrl: 'pvr-button.css',
  shadow: true,
})
export class PvrButton {

  @Prop()
  buttonType: "primary" | "secondary" | "silent" = "primary";

  @Prop()
  buttonIcon: IconType | null = null;

  @Prop()
  disabled: boolean = false;

  @Prop()
  border: boolean = false;

  render() {
    const {disabled, buttonType, buttonIcon, border} = this;

    let buttonIconElement = null;
    if (buttonIcon != null) {
      buttonIconElement = <pvr-icon type={buttonIcon} />;
    }

    return (
      <button class={ "pvr-button" + (" " + (buttonType ?? "primary")) + (border ? " border" : "") }
              disabled={disabled} >
        { buttonIconElement }
        <slot></slot>
      </button>
    );
  }

}
