export var CustomElement = function (config) {
    return function (element) {
        customElements.define(config.tagName, element, config.options);
    };
};
//# sourceMappingURL=/Users/dannyblue/Documents/projects/ts-custom-elements/custom-elements.js.map