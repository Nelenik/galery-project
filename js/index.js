import { modalInit } from "./parts/modal_init.js";
import { initImagePreview } from "./parts/image_preview.js";
import { _ } from "./utils.js";
modalInit();
initImagePreview();

// const mainBlock = document.getElementById("main");
// mainBlock.addEventListener("wheel", (e) => {
//   e.preventDefault();
// });

// const form = _('[name="uploadForm"]');

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const formData = new FormData(form);
//   console.log([...formData]);

//   form.reset();
//   _('[id="imagePreview"]').innerHTML = "";
// });

const validator = new window.JustValidate(_('[name="uploadForm"]'));

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
      rule: "maxFilesCount",
      value: 1,
    },
    {
      rule: "files",
      value: {
        files: {
          maxSize: 2097152,
        },
      },
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
