interface CustomElements {
  forcePolyfill?: boolean;
  define?(string, Object, config?: { extends: string });
}

declare let customElements: CustomElements;

export interface CustomElementConfig {
  tagName: string;
  options?: {
    extends: string;
  };
}

export const CustomElement = (config: CustomElementConfig) => {
  return (Element) => {
    customElements.define(config.tagName, Element, config.options);
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
