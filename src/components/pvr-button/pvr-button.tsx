import {Component, h, Host, Prop} from '@stencil/core';

/**
 * @slot - Slot for the content of the button.
 * @slot icon-only - Should be used on an icon in a button that has no text.
 * @slot start - Content is placed to the left of the button text.
 * @slot end - Content is placed to the right of the button text.
 *
 * @part native - The native HTML button or anchor element that wraps all child elements.
 */
@Component({
  tag: 'pvr-button',
  styleUrl: 'pvr-button.css',
  shadow: true,
})
export class PvrButton {

  /**
   * The role of the button
   */
  @Prop()
  buttonRole: "button" | "submit" | "reset" = "button";

  @Prop()
  buttonType: "primary" | "secondary" | "tertiary" = "primary";

  @Prop()
  disabled: boolean = false;

  render() {
    const {disabled, buttonType, buttonRole} = this
    return (
      <Host
        aria-disabled={disabled ? "true" : null}
        class={{
          'button-disabled': disabled
        }}>
        <button class={buttonType ?? "primary"}
                role={buttonRole ?? "button"}
                disabled={disabled}
                part="native"
        >
          <span class="button-inner">
            <slot name="icon-only"></slot>
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
          </span>
        </button>
      </Host>
    );
  }

}
