import {createTag} from "./utils";

class CreateAboutTag {
    constructor(title, description) {
        this.p = document.createElement("p");
        this.titleTag = createTag("strong", title + ": ");
        this.p.append(this.titleTag, description);
    }

    getTag() {
        return this.p;
    }
}

function createAbout() {
    const p1 = new CreateAboutTag("Address", "123 Fine Dine St, Gourmet City, 12345");
    const p2 = new CreateAboutTag("Phone", "(123) 456-7890");
    const p3 = new CreateAboutTag("Open", "Wednesday- Monday from 10 am -12 pm");
    const p4 = new CreateAboutTag("Email", "info@finedinerestaurant.com");

    const div = document.createElement("div");
    div.append(
        p1.getTag(),
        p2.getTag(),
        p3.getTag(),
        p4.getTag(),
    );

    return div;
}

export default createAbout;