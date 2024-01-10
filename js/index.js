import { ModalConstructor } from "./modal/modalconstructor.js";
import { createHtml, getRandomEl, Zoom } from "./utils.js";

function getModalPictureElem(photoFrame) {
  const pictureEl = photoFrame.querySelector("picture");
  const [mobileSource, webpDesktopSource] =
    pictureEl.querySelectorAll("source");
  const { src, alt } = pictureEl.querySelector(".photo");

  const innerPicture = createHtml({
    tagName: "picture",
    classes: ["inner__picture"],
  });
  const innerImg = createHtml({
    tagName: "img",
    classes: ["inner__img"],
    attributes: { src: src, alt: alt },
  });

  innerPicture.append(
    mobileSource.cloneNode(),
    webpDesktopSource.cloneNode(),
    innerImg
  );
  return innerPicture;
}

function createInner(photoFrame) {
  const title = photoFrame.querySelector(".photo-title").textContent;
  const descr = photoFrame.querySelector(".photo-descr").textContent;
  const inner = createHtml({
    tagName: "div",
    classes: ["modal-inner", "inner"],
  });
  const innerContent = createHtml({
    tagName: "div",
    classes: ["inner__content"],
  });
  const innerTitle = createHtml({
    tagName: "h2",
    classes: ["inner__title"],
    text: title,
  });
  const innerDescr = createHtml({
    tagName: "p",
    classes: ["inner__descr"],
    text: descr,
  });
  const innerCloseBtn = createHtml({
    tagName: "button",
    classes: ["modal-close-btn", "btn-reset"],
    attributes: { type: "button" },
    inner: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666641 15.3043L15.3333 3.17761e-05L16 0.695679L1.33331 15.9999L0.666641 15.3043Z" fill="black"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666725 -2.96187e-06L15.3334 15.3042L14.6667 15.9999L5.76143e-05 0.695644L0.666725 -2.96187e-06Z" fill="black"/>
    </svg>
    `,
  });
  const innerPicture = getModalPictureElem(photoFrame);
  innerContent.append(innerTitle, innerDescr);
  inner.append(innerPicture, innerContent, innerCloseBtn);
  return inner;
}

const photoFrames = document.querySelectorAll(".photo-frame");

// animations params
const animations = [
  { animation: "one", duration: 600 },
  { animation: "two", duration: 1500 },
  { animation: "three", duration: 2000 },
];

photoFrames.forEach((frame) => {
  frame.classList.add("zoom");
  const animParams = getRandomEl(animations);
  const modal = new ModalConstructor(frame, {
    autoOpen: true,
    modalInner: createInner(frame),
    animTime: animParams.duration,
    modalCloseBtnClass: "modal-close-btn",
    elemToFocus: ".modal-close-btn",
    modalAnimationClass: `animation-${animParams.animation}`,
  });

  const resizeObserver = new ResizeObserver(observePhotoSize);
  resizeObserver.observe(frame);
  zoomHandlers(frame);
});

// handlers on hover and keydown for desktop
function zoomHandlers(frame) {
  let delayTimer;
  const handleMouseEnter = (e) => {
    if (e.pointerType === "mouse") {
      delayTimer = setTimeout(() => {
        Zoom.in(frame);
      }, 800);
    }
  };
  const handleMouseLeave = (e) => {
    if (e.pointerType === "mouse") {
      clearTimeout(delayTimer);
      Zoom.out(frame);
    }
  };

  const handleClick = () => {
    Zoom.out(frame);
  };

  frame.addEventListener("pointerenter", handleMouseEnter);
  frame.addEventListener("pointerleave", handleMouseLeave);
  frame.addEventListener("click", handleClick);
}
//photo frame resize observer callback
function observePhotoSize(entries) {
  const frame = entries[0];
  Zoom.isElementOutOfViewport(frame.target);
}
