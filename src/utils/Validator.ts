import { IValidator } from 'interfaces/IValidator';
import { DaDElement } from 'types';

export default class Validator implements IValidator {
  validate = (el: DaDElement): void => {
    if (typeof el !== 'object') throw new Error('Params must be type Object');
    if (el?.type !== 'drag' && el?.type !== 'drop') throw new Error('doesn\'t have a required param: type');
    if (!el?.dragElement) throw new Error('doesn\'t have a required param: dragElement');
    if (typeof el?.dragElement !== 'string' && !(el?.dragElement instanceof HTMLElement)) {
      throw new Error('dragElement must be a HTML element or css selector string');
    }
  };
}
