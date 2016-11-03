import { CustomElement, OnConnected } from './custom-elements';

@CustomElement({
  tagName: 'demo-element'
})
export class LsMap extends HTMLElement implements OnConnected {
  connectedCallback() {
    this.innerHTML = 'Hello World';
  }
}
