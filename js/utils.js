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
    const w = photoWrap.clientWidth;
    const h = photoWrap.clientHeight;
    const elRect = el.getBoundingClientRect();
    const elIsOutWindow =
      elRect.left < 0 ||
      elRect.top < 0 ||
      elRect.right > w ||
      elRect.bottom > h;

    const elStyles = window.getComputedStyle(el);
    let top = elStyles.getPropertyValue("--_t");
    let left = elStyles.getPropertyValue("--_l");

    if (elRect.left < 0) {
      left = 0 + "px";
    }
    if (elRect.right > w) {
      left = w - elRect.width + "px";
    }
    if (elRect.top < 0) {
      top = 0 + "px";
    }
    if (elRect.bottom > h) {
      top = h - (elRect.height + 50) + "px";
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
