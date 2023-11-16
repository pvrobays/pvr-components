import { Component, Event, EventEmitter, FunctionalComponent, Prop, h } from "@stencil/core";

export type PvrMultiSelectOptions = (PvrMultiSelectGroup|PvrMultiSelectOption)[];
export interface PvrMultiSelectGroup {
  groupID?: number,
  groupName: string,
  selected?: boolean,
  options: PvrMultiSelectOption[],
};
export interface PvrMultiSelectOption {
  optionID?: number
  optionName: string,
  selected?: boolean
};

const isGroup = (item: PvrMultiSelectGroup|PvrMultiSelectOption): item is PvrMultiSelectGroup => {
  return (item as PvrMultiSelectGroup).groupName !== undefined;
}

export interface PvrMultiSelectProps {
  options: PvrMultiSelectOptions
}

@Component({
  tag: 'pvr-multiselect',
  styleUrl: 'pvr-multiselect.module.css',
  scoped: true
})
export class PvrMultiSelect {

  @Prop({mutable: true}) options: PvrMultiSelectOptions;
  @Event() optionsChanged: EventEmitter<PvrMultiSelectOptions>;

   onGroupChange(group: PvrMultiSelectGroup, selected: boolean): void {
    const changedGroup = this.options.find(o => o === group) as PvrMultiSelectGroup;
    changedGroup.selected = selected;
    changedGroup.options = {
      ...changedGroup.options.map(o => ({...o, selected: selected}))
    };

    const newOptions = [
      ...(this.options.filter(o => o !== changedGroup)), changedGroup
    ];
    this.options = newOptions;
  }

  private onOptionChange(_option: PvrMultiSelectOption, _selected: boolean): void {

  }

  render() {
    const groups = this.options.filter(o => isGroup(o)).map(g => g as PvrMultiSelectGroup);
    const groupComponents = groups
      .map(({groupID, groupName, selected, options}) => (
        <PvrMultiSelectGroup
          groupID={groupID}
          groupName={groupName}
          selected={selected}
          options={options}
          onGroupChange={this.onGroupChange}
          onOptionChange={this.onOptionChange}
        />));
    const nonGroupOptions = this.options.filter(o => !isGroup(o)).map(g => g as PvrMultiSelectOption);
    const options = nonGroupOptions
        .map(({optionID, optionName, selected}) => (
          <PvrMultiSelectOption
            optionID={optionID}
            optionName={optionName}
            selected={selected}
            onOptionChange={this.onOptionChange}
          />
        ))

    return (
      <div class="pvr-multiselect">
        <input />{/* <pvr-search ></pvr-search> */}
        {...groupComponents}
        {...options}
      </div>
    )
  }
}

export interface PvrMultiSelectGroupProps extends PvrMultiSelectGroup {
  onOptionChange: (option: PvrMultiSelectOption, selected: boolean) => void,
  onGroupChange: (group: PvrMultiSelectGroup, selected: boolean) => void
}

const PvrMultiSelectGroup: FunctionalComponent<PvrMultiSelectGroupProps> = (props) => {

  const {groupID, groupName, options, onOptionChange, onGroupChange, selected } = props;

  const selectGroupHandler = (selected: boolean) => {
    onGroupChange(props, selected);
  }

  const groupOptions = options.map(({optionID, optionName, selected}) => (
    <PvrMultiSelectOption
      optionID={optionID}
      optionName={optionName}
      onOptionChange={onOptionChange}
      selected={selected}
    />
  ))

  const groupIsSelected = selected ?? false;

  return (
    <div data-groupID={groupID} class="pvr-multiselect__group">
      <PvrMultiSelectOption
        data-groupID={groupID}
        optionID={56}
        optionName={groupName}
        onOptionChange={(_, selected) => selectGroupHandler(selected)}
        selected={groupIsSelected ?? undefined}
      />
      {...groupOptions}
    </div>
  )
}

export interface PvrMultiSelectIOptionProps extends PvrMultiSelectOption {
  onOptionChange: (option: PvrMultiSelectIOptionProps, selected: boolean) => void
}

const PvrMultiSelectOption: FunctionalComponent<PvrMultiSelectIOptionProps> = (props) => {

  const { optionID, optionName, selected, onOptionChange } = props;

  const isSelected = selected ?? false;

  return (
    <div class="pvr-multiselect__option">
      <label htmlFor={`${optionID}`} data-optionID={optionID}>{optionName}</label>
      <input id={`${optionID}`} type="checkbox" onChange={() => onOptionChange(props, !isSelected)} checked={isSelected ?? undefined}/>
    </div>
  )
}
