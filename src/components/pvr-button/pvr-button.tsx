import {Component, h, Prop} from '@stencil/core';

/**
 * @slot Slot for the content of the button
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
  @Prop() buttonRole: "button" | "submit" | "reset" = "button";

  @Prop() buttonType: "primary" | "secondary" | "tertiary" = "primary";

  render() {
    return (
      <button class={this.buttonType} role={this.buttonRole}>
        <span><slot></slot></span>
      </button>
    );
  }

}
