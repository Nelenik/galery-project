import { ModalConstructor } from "./modal/modalconstructor.js";

// options = {
//   tagName: 'elem-name',
//   classes: ['class1', 'class2'],
//   attributes: {type: 'text', 'data-set': 'value'},
//   text: 'some text',
//   inner: 'inner.html',
//   value: 'value for inputs'
// }
function createHtml(options) {
  const tag = document.createElement(options.tagName);
  if (options.classes) tag.classList.add(...options.classes);
  if (options.attributes) {
    for (let key in options.attributes) {
      tag.setAttribute(key, options.attributes[key]);
    }
  }
  if (options.text) tag.textContent = options.text;
  if (options.inner) tag.innerHTML = options.inner;
  if (options.value) tag.value = options.value;
  return tag;
}

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

function getRandomEl(elements) {
  const index = Math.trunc(Math.random() * elements.length);
  return elements[index];
}

const btns = document.querySelectorAll(".photo-frame");

// animations params
const animations = [
  { animation: "one", duration: 600 },
  { animation: "two", duration: 1500 },
  { animation: "three", duration: 2000 },
];

btns.forEach((el) => {
  const animParams = getRandomEl(animations);
  const modal = new ModalConstructor(el, {
    autoOpen: false,
    modalInner: createInner(el),
    animTime: animParams.duration,
    modalCloseBtnClass: "modal-close-btn",
    elemToFocus: ".modal-close-btn",
    modalAnimationClass: `animation-${animParams.animation}`,
  });

  const mediaQuery = window.matchMedia("(max-width: 992px)");

  function setHandlers(mQSize) {
    mQSize ? mobileHandlers(modal, el) : desktopHandlers(modal, el);
  }
  setHandlers(mediaQuery.matches);
  mediaQuery.addEventListener("change", (e) => {
    setHandlers(e.matches);
  });
});

// handlers on hover and keydown for desktop
function desktopHandlers(modalEl, btnEl) {
  let delayTimer;
  const handleMouseEnter = () => {
    delayTimer = setTimeout(() => modalEl.open(), 1000);
  };
  const handleMouseLeave = () => {
    clearTimeout(delayTimer);
  };
  const handleKeydown = (e) => {
    if (e.key !== "Enter") return;
    modalEl.open();
  };
  btnEl.addEventListener("mouseenter", handleMouseEnter);
  btnEl.addEventListener("mouseleave", handleMouseLeave);
  btnEl.addEventListener("keydown", handleKeydown);
}
// handler for screens up to 992px
function mobileHandlers(modalEl, btnEl) {
  const handleClick = () => {
    modalEl.open();
  };
  btnEl.addEventListener("click", handleClick);
}
