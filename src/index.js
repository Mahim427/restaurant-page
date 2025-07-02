import "./styles.css";
import {loader} from "./utils";

import createHome from "./home";
import createMenu from "./menu";
import createAbout from "./about";

document.querySelector("#home-btn").addEventListener("click", () => {
    loader(createHome)
});

document.querySelector("#menu-btn").addEventListener("click", () => {
    loader(createMenu)
});

document.querySelector("#about-btn").addEventListener("click", () => {
    loader(createAbout)
});

loader(createHome);