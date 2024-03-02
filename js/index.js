import { modalInit } from "./parts/modal_init.js";
import { initImagePreview } from "./parts/image_preview.js";
import { initBurger } from "./parts/burger-menu.js";
import { _ } from "./utils.js";

initBurger();
modalInit();
initImagePreview();

/* if is necessary to disable scroll activate code below and the link "Home" in menu*/
// const mainBlock = document.getElementById("main");
// mainBlock.addEventListener("wheel", (e) => {
//   e.preventDefault();
// });

//form validation, is used JustValidate plugin
const validator = new window.JustValidate(_('[name="uploadForm"]'), {
  errorLabelCssClass: ["fieldWrap__invalidFieldMessage"],
  errorFieldCssClass: ["fieldWrap__invalidField"],
  errorLabelStyle: {
    color: "#c30f7e",
  },
});

validator
  .addField('[name="name"]', [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
  ])
  .addField('[name="pictureTitle"]', [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
  ])
  .addField('[name="uploadField"]', [
    {
      rule: "minFilesCount",
      value: 1,
      errorMessage: "File is not selected",
    },
    {
      rule: "maxFilesCount",
      value: 1,
      errorMessage: "Max 1 file can be uploaded",
    },
    {
      rule: "files",
      value: {
        files: {
          maxSize: 2097152,
        },
      },
      errorMessage: "Max file size 2MB",
    },
  ])
  .onSuccess((event) => {
    const form = event.currentTarget;

    /* 
    .... sumbmit logic, fetch
  */

    form.reset();
    _('[id="imagePreview"]').innerHTML = "";
  });
