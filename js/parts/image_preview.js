import { _ } from "../utils.js";

export const initImagePreview = () => {
  const uploadFileInput = _('[name="uploadField"]');

  const previewBlock = _('[id="imagePreview"]');

  uploadFileInput.addEventListener("change", () => {
    const mediaQue = window.matchMedia("(max-width: 1024px");
    if (mediaQue.matches) return;
    uploadFiles(uploadFileInput.files[0], displayPreview);
  });

  for (let eventType of ["drop", "dragover"]) {
    document.addEventListener(eventType, (e) => {
      e.preventDefault();
    });
  }
  previewBlock.addEventListener("dragenter", () => {
    previewBlock.classList.add("_active");
  });

  previewBlock.addEventListener("dragleave", () => {
    previewBlock.classList.remove("_active");
  });

  previewBlock.addEventListener("drop", (e) => {
    previewBlock.classList.remove("_active");
    const file = e.dataTransfer.files[0];
    if (!file) return;
    uploadFileInput.files = e.dataTransfer.files;
    uploadFiles(uploadFileInput.files[0], displayPreview);
  });
};

function uploadFiles(file, cb) {
  const fileReader = new FileReader();
  fileReader.addEventListener("load", (e) => {
    cb(e.target.result);
  });
  fileReader.addEventListener("error", () => {
    console.log("error");
  });
  fileReader.readAsDataURL(file);
}

function displayPreview(uri) {
  const container = _('[id="imagePreview"]');
  const image = new Image();
  image.classList.add("file-preview-img");
  image.addEventListener("load", () => {
    container.innerHTML = "";
    container.append(image);
  });
  image.src = uri;
}
