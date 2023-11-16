import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
import { IconType } from "../pvr-icon/icon-type";

@Component({
  tag: 'pvr-input',
  styleUrl: 'pvr-input.css',
  shadow: true
})

export class PvrInput {
  @Prop() placeholder?: string;
  @Prop() icon?: IconType;
  @Prop() width: string;

  @Event() pvrKeyPress: EventEmitter;

  emitValueChange(event?: Event) {
    // @ts-ignore
    this.pvrKeyPress && this.pvrKeyPress.emit({ value: event.target.value, event })
  }

  render() {
    const { placeholder, icon } = this;
    return (
      <span class="input">
        { icon ? <pvr-icon type={icon} /> : '' }
        <input style={{width: this.width ? this.width+'px' : 'initial'}} placeholder={placeholder ?? ""} onKeyUp={e => this.emitValueChange(e)} />
      </span>
    );
  }
}
