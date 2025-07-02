function createTag(tag, text) {
    const element = document.createElement(tag);
    element.textContent = text;
    return element;
}

function loader(loadPage) {
    const content = document.querySelector("#content");
    content.textContent = "";
    content.appendChild(loadPage());
}

export { createTag, loader };