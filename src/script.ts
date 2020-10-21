import { IValidator } from 'interfaces/IValidator';
import { propsDaDFactory } from './utils/factory';
import './sass/style.scss';
import { DaDElement, PropsDaDElement } from './types/index';
import Validator from './utils/Validator';

class DaD {
  dragElements: DaDElement[] = [];

  validator: IValidator | null = null;

  useValidator(V: IValidator) {
    this.validator = V;
  }

  addDrugEl(props: PropsDaDElement) {
    this.validator?.validate(props as DaDElement);
    const element = propsDaDFactory(props);
    this.dragElements.push(element);
    const startPoint = { x: 0, y: 0 };
    element.touchEl?.addEventListener('mousedown', (e) => {
      element.nowDrag = true;
      startPoint.x = e.clientX;
      startPoint.y = e.clientY;
    });
    document.addEventListener('mousemove', (e) => {
      if (element.nowDrag) {
        element.dragElement.style.transform = `translateX(${e.clientX - startPoint.x}px)`;
        element.dragElement.style.transform += `translateY(${e.clientY - startPoint.y}px)`;
      }
    });
    document.addEventListener('mouseup', () => {
      element.nowDrag = false;
    });
  }
}

const daddy = new DaD();
daddy.useValidator(new Validator());
daddy.addDrugEl({
  dragElement: '.card',
  type: 'drag',
});
