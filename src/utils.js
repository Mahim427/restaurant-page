export function createTag(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}