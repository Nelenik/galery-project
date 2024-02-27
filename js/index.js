import { modalInit } from "./parts/modal_init.js";

modalInit();

const mainBlock = document.getElementById("main");
mainBlock.addEventListener("wheel", (e) => {
  e.preventDefault();
});
