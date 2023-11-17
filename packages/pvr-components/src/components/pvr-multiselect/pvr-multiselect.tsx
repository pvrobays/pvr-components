import { Component, Event, EventEmitter, FunctionalComponent, Prop, h } from "@stencil/core";
import { PvrMultiSelectEntry, PvrMultiSelectGroup, PvrMultiSelectGroup as PvrMultiSelectGroupType, PvrMultiSelectOption as PvrMultiSelectOptionType, isGroup } from "./PvrMultiSelect";

export interface PvrMultiSelectProps {
  options: PvrMultiSelectEntry[]
}

@Component({
  tag: 'pvr-multiselect',
  styleUrl: 'pvr-multiselect.module.css',
  scoped: true
})
export class PvrMultiSelect {

  @Prop({mutable: true}) options: PvrMultiSelectEntry[];
  @Event() optionsChanged: EventEmitter<PvrMultiSelectEntry[]>;

   private onGroupChange(group: PvrMultiSelectGroupType, selected: boolean): void {
    const affectedGroup = this.options.find(o => o.name === group.name);
    if (!affectedGroup || !isGroup(affectedGroup))
      throw Error("Something went terribly wrong");

      this.updateGroup(affectedGroup, selected);

      this.setNewOptions(this.options);
  }

  private updateGroup(group: PvrMultiSelectGroupType, selected?: boolean): void {
    group.options.forEach(o => o.selected = selected ?? o.selected);

    const atLeastOneDisabled = group.options.map(o => o.selected ?? false).filter(s => !s).length > 0;
    const newGroupSelectStatus = selected ?? !atLeastOneDisabled;
    group.selected = newGroupSelectStatus;
  }

  private onOptionChange(option: PvrMultiSelectOptionType, selected: boolean): void {
    const affectedOption = this.options.flatMap(o => isGroup(o) ? o.options : o).find(o => o.name === option.name);
    affectedOption.selected = selected;

    const affectedGroup = this.options.find(o => isGroup(o) && o.options.some(o => o.name === option.name));
    if (affectedGroup)
      this.updateGroup(affectedGroup as PvrMultiSelectGroup);

    this.setNewOptions(this.options);
  }

  private setNewOptions = (options: PvrMultiSelectEntry[]) => {
    this.options = [...this.options];
    this.optionsChanged.emit(options);
  }

  private createComponent(entry: PvrMultiSelectEntry): JSX.Element  {
    const {ID, name, selected} = entry;
    const optionChange = this.onOptionChange.bind(this);
    const groupChange = this.onGroupChange.bind(this);

    if (isGroup(entry)) {
      const { options } = entry;
      return <PvrMultiSelectGroup ID={ID} name={name} selected={selected} options={options} onOptionChange={optionChange} onGroupChange={groupChange}/>
    }
    return <PvrMultiSelectOption ID={ID} name={name} selected={selected} onOptionChange={optionChange}/>
  }

  componentWillRender() {
    // Will fix any misconfigs being passed for groups
    const allGroups = this.options.filter(o => isGroup(o));
    allGroups.forEach(g => this.updateGroup(g as PvrMultiSelectGroupType));
    this.options = [...this.options];
  }

  render() {
    return (
      <div class="pvr-multiselect">
        <input />{/* <pvr-search ></pvr-search> */}
        {...this.options.map(o => this.createComponent(o))}
      </div>
    )
  }
}

export interface PvrMultiSelectGroupProps extends PvrMultiSelectGroupType {
  onOptionChange: (option: PvrMultiSelectOptionType, selected: boolean) => void,
  onGroupChange: (group: PvrMultiSelectGroupType, selected: boolean) => void
}

const PvrMultiSelectGroup: FunctionalComponent<PvrMultiSelectGroupProps> = (props) => {
  const {ID, name, options, onOptionChange, onGroupChange, selected } = props;

  const selectGroupHandler = (selected: boolean) => {
    onGroupChange(props, selected);
  }

  const groupOptions = options.map(({ID, name, selected}) => (
    <PvrMultiSelectOption ID={ID} name={name} onOptionChange={onOptionChange} selected={selected}/>
  ))

  const groupIsSelected = selected ?? false;

  return (
    <div data-groupID={ID} class="pvr-multiselect__group">
      <PvrMultiSelectOption
        data-groupID={ID}
        ID={56}
        name={name}
        onOptionChange={(_, selected) => selectGroupHandler(selected)}
        selected={groupIsSelected ?? undefined}
      />
      {...groupOptions}
    </div>
  )
}

export interface PvrMultiSelectIOptionProps extends PvrMultiSelectOptionType {
  onOptionChange: (option: PvrMultiSelectIOptionProps, selected: boolean) => void
}

const PvrMultiSelectOption: FunctionalComponent<PvrMultiSelectIOptionProps> = (props) => {

  const { ID, name, selected, onOptionChange } = props;

  const isSelected = selected ?? false;

  return (
    <div class="pvr-multiselect__option">
      <label htmlFor={`${ID}`} data-optionID={ID}>{name}</label>
      <input id={`${ID}`} type="checkbox" onChange={() => onOptionChange(props, !isSelected)} checked={isSelected ?? undefined}/>
    </div>
  )
}
