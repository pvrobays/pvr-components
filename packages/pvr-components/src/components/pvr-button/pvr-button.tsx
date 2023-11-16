import {Component, h, Prop} from '@stencil/core';
import {IconType} from "../pvr-icon/icon-type";

@Component({
  tag: 'pvr-button',
  styleUrl: 'pvr-button.css',
  shadow: true,
})
export class PvrButton {

  @Prop()
  type: "primary" | "secondary" | "silent" | "red" = "primary";

  @Prop()
  icon: IconType | null = null;

  @Prop()
  disabled: boolean = false;

  @Prop()
  border: boolean = false;

  @Prop()
  size: "small" | "normal" | "large" = "normal";

  render() {
    const {disabled, type, icon, border, size} = this;

    let iconElement = null;
    if (icon != null) {
      iconElement = <pvr-icon type={icon} />;
    }

    return (
      <button class={ "pvr-button" +
          (" " + (type ?? "primary")) +
          (border ? " border" : "") +
          (" " + size) +
          (iconElement ? " has-icon" : "")
        }
              disabled={disabled} >
        { iconElement }
        <slot></slot>
      </button>
    );
  }

}
