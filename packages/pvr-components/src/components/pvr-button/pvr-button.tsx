import {Component, h, Prop} from '@stencil/core';
import {IconType} from "../pvr-icon/icon-type";

@Component({
  tag: 'pvr-button',
  styleUrl: 'pvr-button.scss',
  shadow: true,
})
export class PvrButton {

  @Prop()
  type: "primary" | "secondary" | "silent" | "warning" | "red" = "primary";

  @Prop()
  icon: IconType | null = null;

  @Prop()
  customIcon: string = null;

  @Prop()
  disabled: boolean = false;

  @Prop()
  border: boolean = false;

  @Prop()
  size: "small" | "normal" | "large" = "normal";

  render() {
    const {disabled, type, icon, customIcon, border, size} = this;

    let iconElement = null;
    let hasIcon = false;

    if (customIcon != null && customIcon.trim() != "") {
      hasIcon = true;
    }
    else if (icon != null) {
      hasIcon = true;
      iconElement = <pvr-icon type={icon} />;
    }

    return (
      <button class={ "pvr-button" +
          (" " + (type ?? "primary")) +
          (border ? " border" : "") +
          (" " + size) +
          (hasIcon ? " has-icon" : "")
        }
              disabled={disabled} >
        { iconElement }
        { customIcon && <img class="icon" src={ customIcon } />}
        <slot></slot>
      </button>
    );
  }

}
