import { _ } from "../utils.js";

export const initBurger = () => {
  const menu = _(".js-menu");
  const burger = _(".js-burger");

  const openMenu = () => {
    menu.classList.add("js-menu--open");
    burger.classList.add("js-burger--open");
  };

  const closeMenu = () => {
    menu.classList.remove("js-menu--open");
    burger.classList.remove("js-burger--open");
  };

  burger.addEventListener("click", () => {
    menu.classList.contains("js-menu--open") ? closeMenu() : openMenu();
  });

  document.addEventListener("DOMContentLoaded", (e) => {
    setTimeout(closeMenu, 3000);
  });
};
