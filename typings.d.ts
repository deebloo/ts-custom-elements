interface CustomElements {
  forcePolyfill?: boolean;
  define?(string, Object, config?: { extends: string });
}

declare let customElements: CustomElements;
