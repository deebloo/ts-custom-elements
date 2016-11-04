export interface CustomElementConfig {
  tagName: string;
  options?: {
    extends: string;
  };
}

export const CustomElement = (config: CustomElementConfig) => {
  return (element) => {
    customElements.define(config.tagName, element, config.options);
  };
};

export interface OnConnected {
  connectedCallback(): void;
}

export interface OnDisconnected {
  disconnectedCallback(): void;
}

export interface OnAttributeChanged {
  attributeChangedCallback(attrName?: string, oldVal?: string, newVal?: string): void;
}

export interface OnAdopted {
  adoptedCallback(): void;
}
