import { Component, Event, EventEmitter, h, Prop, State, Watch } from "@stencil/core";

@Component({
  tag: 'pvr-autocomplete',
  styleUrl: 'pvr-autocomplete.css',
  shadow: true
})

export class PvrAutocomplete {
  @Prop() options: any[];
  @Prop() placeholder: string;
  @Prop() noResults: string;
  @Prop() width: string;
  @Prop() async: boolean;

  @Event() pvrKeyPress: EventEmitter;
  @Event() pvrSelectItem: EventEmitter;

  @State() currentValue: string = '';
  @State() filteredResults: any[] = [];
  @State() open: boolean = false;

  @Watch('options')
  updateOptions(options) {
    this.filteredResults = options;
  }

  onChange = (e) => {
    this.currentValue = e.detail.value;
    this.pvrKeyPress.emit(e.detail);
    this.open = true;
    if (!this.async) {
      this.filteredResults = this.options.filter(x => x.value.includes(e.detail.value));
    }
  };

  onClick = (item) => {
    this.pvrSelectItem.emit({value: item});
    this.open = false;
  }

  render() {
    return (
      <span class="autocomplete">
        <pvr-input icon="search" placeholder={this.placeholder} onPvrKeyPress={this.onChange} width={this.width} />
        { this.filteredResults.length && this.open &&
          <div class="dropdown">
            { this.filteredResults.length == 0 ? <div class="no-result">{this.noResults ?? 'No results'}</div> : this.filteredResults.map(x => <div onClick={this.onClick.bind(this, x)}>{x.value}</div>) }
          </div> || ''
        }
      </span>
    );
  }
}