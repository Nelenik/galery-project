// function creates html tag
// options = {
//   tagName: 'elem-name',
//   classes: ['class1', 'class2'],
//   attributes: {type: 'text', 'data-set': 'value'},
//   text: 'some text',
//   inner: 'inner.html',
//   value: 'value for inputs'
// }
export function createHtml(options) {
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

export function getRandomEl(array) {
  const index = Math.trunc(Math.random() * array.length);
  return array[index];
}

//utility class, manage photo zoom on hover
export class Zoom {
  static isElementOutOfViewport(el) {
    const photoWrap = document.querySelector(".photo-wrap");
    const w = document.documentElement.clientWidth;
    const h = document.documentElement.clientHeight;
    const rect = el.getBoundingClientRect();
    const elIsOutWindow =
      rect.left < 0 || rect.top < 0 || rect.right > w || rect.bottom > h;

    const elStyles = window.getComputedStyle(el);
    let top = elStyles.getPropertyValue("--_t");
    let left = elStyles.getPropertyValue("--_l");

    if (rect.left < 0) {
      left = 0 + "px";
    }
    if (rect.right > w) {
      left = w - rect.width + "px";
    }
    if (rect.top < 0) {
      top = 0 + "px";
    }
    if (rect.bottom > h) {
      top = h - rect.height + "px";
    }
    if (el.classList.contains("in") && elIsOutWindow) {
      el.style.setProperty("--_l", left);
      el.style.setProperty("--_t", top);
    }
  }

  static in(el) {
    el.classList.add("in");
  }

  static out(el) {
    if (el.classList.contains("in")) {
      el.classList.remove("in");
      el.removeAttribute("style");
      el.classList.add("out");
      setTimeout(() => el.classList.remove("out"), 800);
    }
  }
}

//is cursor on target photo
export function isCursorInElementsBounds(el, e) {
  const boundingRect = el.getBoundingClientRect();
  console.log(boundingRect);
  const boundOffset = 10;
  const x = e.clientX;
  const y = e.clientY;
  const elemUnderCursor = document.elementFromPoint(x, y);
  return (
    elemUnderCursor === el &&
    e.clientX >= boundingRect.left + boundOffset &&
    e.clientX <= boundingRect.right - boundOffset &&
    e.clientY >= boundingRect.top + boundOffset &&
    e.clientY <= boundingRect.bottom - boundOffset
  );
}
