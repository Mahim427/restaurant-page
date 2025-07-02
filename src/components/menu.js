import { createTag } from "../utils/utils";

class CreateSection {
    constructor(headerText) {
        this.section = document.createElement("section");
        this.h3 = createTag("h3", headerText);
        this.ul = document.createElement("ul");
        this.section.append(this.h3, this.ul);
    }

    makeLi(text) {
        const li = document.createElement("li");
        li.textContent = text;
        this.ul.appendChild(li);
    }

    getSection() {
        return this.section;
    }
}

function createMenu() {
    const h2 = createTag("h2", "Our Exquisite Menu");

    const section1 = new CreateSection("Appetizers");
    section1.makeLi("Bruschetta - $8");
    section1.makeLi("French Onion Soup - $7");
    section1.makeLi("Crab Cakes - $12");

    const section2 = new CreateSection("Main Courses");
    section2.makeLi("Grilled Salmon - $22");
    section2.makeLi("Steak Fruits - $25");
    section2.makeLi("Risotto Primavera - $18");

    const section3 = new CreateSection("Desserts");
    section3.makeLi("Molten Chocolate Cake - $10");
    section3.makeLi("New York Cheesecake - $9");
    section3.makeLi("Tiramisu - $8");

    const div = document.createElement("div");
    div.append(
        h2,
        section1.getSection(),
        section2.getSection(),
        section3.getSection(),
    );

    return div;
}

export default createMenu;