# ts-custom-elements
Typescript interfaces and decorators for custom elements v1

example:
```ts
import { CustomElement, OnConnected, OnDisconnected } from 'ts-custom-elements';

@CustomElement({
  tagName: 'foo-bar'
})
class TestElement extends HTMLElement implements OnConnected, OnDisconnected {
  connectedCallback() {
    this.innerHTML = 'I have been rendered!';

    this.addEventListener('click', this.onClick.bind(this));
  }

  disconnectedCallback() {
    this.removeEventListener('click', this.onClick);
  }

  onClick() {
    this.innerHTML = 'I was clicked!';
  }
}
```
