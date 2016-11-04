import '../shim';
import '@webcomponents/custom-elements/custom-elements.min';

import { CustomElement, OnConnected, OnDisconnected } from './custom-elements';

describe('Custom Elements', () => {
  @CustomElement({
    tagName: 'foo-bar'
  })
  class TestElement extends HTMLElement implements OnConnected, OnDisconnected {
    connectedCallback() {
      this.innerHTML = 'Connected!';
    }

    disconnectedCallback() {
      this.innerHTML = 'Disconnected!';
    }
  }

  let element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('foo-bar');
    (<TestElement>element).connectedCallback();
  });

  it('should create a new element', () => {
    expect(element.textContent).toBe('Connected!');
  });
});
