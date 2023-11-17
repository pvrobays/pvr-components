export type PvrMultiSelectEntry = PvrMultiSelectGroup|PvrMultiSelectOption;

export type PvrMultiSelectGroup = {
  ID?: number,
  name: string,
  selected?: boolean,
  options: PvrMultiSelectOption[],
};

export type PvrMultiSelectOption = {
  ID?: number
  name: string,
  selected?: boolean
};

export const isGroup = (item: PvrMultiSelectGroup|PvrMultiSelectOption): item is PvrMultiSelectGroup => {
  return (item as PvrMultiSelectGroup).options !== undefined;
}
