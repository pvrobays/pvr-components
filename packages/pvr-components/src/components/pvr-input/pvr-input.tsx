import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";
// import { ChangeEvent } from "react";

@Component({
  tag: 'pvr-input',
  // styleUrl: 'pvr-input.css',
  shadow: true
})

export class PvrInput {
  @Prop()
  placeholder?: string;

  @Prop()
  icon?: "confirm" | "cancel";

  @Event()
  pvrKeyPress: EventEmitter;

  emitValueChange(event?: Event) {
    // @ts-ignore
    this.pvrKeyPress && this.pvrKeyPress.emit({ value: event.target.value, event })
  }

  render() {
    const { placeholder, icon } = this;
    return (
      <div>
        { icon ? <pvr-icon type={icon} /> : '' }
        <input placeholder={placeholder ?? ""} onKeyUp={e => this.emitValueChange(e)} />
      </div>
    );
  }
}