import {Component, h, Prop} from '@stencil/core';
import {IconType} from "./icon-type";

@Component({
  tag: 'pvr-icon',
  styleUrl: 'pvr-icon.css',
  shadow: true,
})
export class PvrIcon {

  /**
   * The role of the button
   */
  @Prop()
  type: IconType;

  render() {
    const { type } = this;

    return (
      <span class="icon">
        {type}
      </span>
    );
  }

}
