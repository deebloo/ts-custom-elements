export interface CustomElementConfig {
    tagName: string;
    options?: {
        extends: string;
    };
}
export declare const CustomElement: (config: CustomElementConfig) => (element: any) => void;
export interface OnConnected {
    connectedCallback(): void;
}
export interface OnDisconnected {
    disconnectedCallback(): any;
}
export interface OnAttributeChanged {
    attributeChangedCallback(attrName?: string, oldVal?: string, newVal?: string): any;
}
export interface OnAdopted {
    adoptedCallback(): any;
}
