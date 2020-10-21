import { DaDElement, PropsDaDElement } from 'types';

export function propsDaDFactory(props: PropsDaDElement): DaDElement {
  if (!('nowDrag' in props)) props.nowDrag = false;
  if (typeof props.dragElement === 'string') {
    props.dragElement = document.querySelector(props.dragElement) as HTMLElement;
  }
  if (!('touchEl' in props)) props.touchEl = props.dragElement;
  return props as DaDElement;
}
