export const iconTypesArray = ["confirm", "cancel"] as const;
export type IconType = typeof iconTypesArray[number];
