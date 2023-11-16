export const iconTypesArray =
  [
    "search",
    "check",
    "close",
    "settings",
    "download",
    "sync",
    "transcribe",
    "stack"
  ] as const;
export type IconType = typeof iconTypesArray[number];
