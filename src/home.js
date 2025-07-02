import { createTag } from "./utils";
import restImg from "./Restaurant.jpg";

function createHome() {
    const h1 = createTag("h1", "Welcome to Fine Dine Restaurant");
    const h2 = createTag("h2", "Experience the best gourmet dining in the heart of the city.");
    const p = createTag("p", "At Fine Dine, we craft our dishes with passion and love. Our chefs use the finest, locally sourced ingredients to prepare each dish to perfection. Join us for an unforgettable dining experience.");

    const image = document.createElement("img");
    image.src = restImg;

    const div = document.createElement("div");
    div.append(h1, h2, p, image);

    return div;
}

const content = document.querySelector("#content");
content.textContent = "";
content.appendChild(createHome());

export default createHome;