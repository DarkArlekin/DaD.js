type TDaDElement = {
  type: 'drag' | 'drop';
  touchEl?: HTMLElement;
  nowDrag?: boolean;
};

export type DaDElement = TDaDElement & {
  dragElement: HTMLElement;
};
export type PropsDaDElement = TDaDElement & {
  dragElement: HTMLElement | string;
};
