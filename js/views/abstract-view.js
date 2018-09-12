import {getFragmentFromString} from '../utils';

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`Can't instantiate AbstractView, only concrete one`);
    }
  }

  // Геттер template, который возвращает строку, содержащую разметку.
  // Метод должен быть абстрактным, то есть этот метод должен быть обязательно
  // переопределён в объектах-наследниках
  get template() {
    throw new Error(`Template is required`);
  }

  // Геттер element, который возвращает DOM-элемент, соответствующий представлению.
  // Метод должен создавать DOM-элемент с помощью метода render,
  // добавлять ему обработчики, с помощью метода bind и возвращать созданный элемент.
  // (Метод должен использовать ленивые вычисления — элемент должен создаваться
  // при первом обращении к геттер с помощью метода render, должны добавляться
  // обработчики (метод bind). При последующих обращениях должен использоваться
  // элемент, созданный при первом вызове геттера.)
  get element() {
    console.log(`this._element`);
    if (this._element) {
      return this._element;
    }
    this._element = this.render();
    this.bind(this._element);
    return this._element;
  }

  // render — метод, который будет создавать DOM-элемент
  // на основе шаблона, который возвращается геттером template
  render() {
    return getFragmentFromString(this.template);
  }

  // bind — метод, который будет добавлять обработчики событий.
  // Метод по умолчанию ничего не делает. Если нужно обработать какое-то событие,
  // то этот метод должен быть переопределён в наследнике с необходимой логикой
  bind() {}
}
