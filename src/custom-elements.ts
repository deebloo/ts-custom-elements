export interface CustomElementConfig {
  tagName: string;
  options?: {
    extends: string;
  };
}

/**
 * @CustomElement({
 *   tagName: 'my-element'
 * })
 * class MyElement extends HTMLElement { }
 */
export const CustomElement = (config: CustomElementConfig) => {
  return (element) => {
    customElements.define(config.tagName, element, config.options);
  }
}

export interface OnConnected {
  connectedCallback(): void;
}

export interface OnDisconnected {
  disconnectedCallback();
}

export interface OnAttributeChanged {
  attributeChangedCallback(attrName?: string, oldVal?: string, newVal?: string);
}

export interface OnAdopted {
  adoptedCallback();
}
