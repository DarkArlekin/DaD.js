import { DaDElement } from 'types';

export interface IValidator {
  validate(el: DaDElement): void;
}
