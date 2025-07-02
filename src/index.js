import "./styles/styles.css";
import {loader} from "./utils/utils";

import createHome from "./components/home";
import createMenu from "./components/menu";
import createAbout from "./components/about";

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