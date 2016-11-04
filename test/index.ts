import './shim';
import '@webcomponents/custom-elements/custom-elements.min';

import { CustomElement, OnConnected } from '../src/custom-elements';

describe('Custom Elements', () => {
  @CustomElement({
    tagName: 'foo-bar'
  })
  class TestElement extends HTMLElement implements OnConnected {
    connectedCallback() {
      this.innerHTML = 'Hello World';
    }
  }

  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('foo-bar');
    (<TestElement>element).connectedCallback();
  });

  it('should create a new element', () => {
    expect(element.textContent).toBe('Hello World');
  });
});
