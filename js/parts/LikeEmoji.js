export default class LikeEmoji {
  emojiIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84 73" fill="none">
  <path d="M40.1989 11.6533L42.0002 13.5247L43.8014 11.6533C52.5361 2.57816 61.8381 1.67231 68.8251 4.86607C75.9697 8.13188 81.1668 15.8758 81.1668 25.0716C81.1668 34.4224 77.3321 41.6212 71.8913 47.7477C67.4215 52.7809 62.0043 56.9568 56.7745 60.9883C55.5382 61.9413 54.3124 62.8862 53.112 63.8325C50.9259 65.5558 48.9371 67.1001 47.0088 68.2268C45.0797 69.354 43.4489 69.917 42.0002 69.917C40.5515 69.917 38.9206 69.354 36.9915 68.2268C35.0632 67.1001 33.0745 65.5558 30.8884 63.8325C29.688 62.8862 28.4622 61.9412 27.2259 60.9882C21.9961 56.9568 16.5789 52.7809 12.109 47.7477C6.66827 41.6212 2.8335 34.4224 2.8335 25.0716C2.8335 15.8758 8.03059 8.13187 15.1752 4.86607C22.1621 1.67231 31.4641 2.57816 40.1989 11.6533Z" stroke-width="5"/>
  </svg>
  `;

  onChangeCallback = () => {};

  constructor(params) {
    const {
      container,
      isChecked = false,
      enableAnimation = true,
      additCssClass = "",
      animTime = 1000,
    } = params;
    this.likeContainer = container;
    this.additCssClass = additCssClass;
    this.enableAnimation = enableAnimation;
    this.isChecked = isChecked;
    this.animTime = animTime;
    this.createLikeComponent();
    this.likeContainer.append(this.componentWrapper);

    this.likeCheckbox.addEventListener("change", this.handleChange);
  }

  createLikeComponent() {
    const isAddCssClass = this.additCssClass.length > 0;
    this.componentWrapper = this.tag({
      tagName: "label",
      classes: [isAddCssClass && this.additCssClass, "heart"],
    });

    this.likeCheckbox = this.tag({
      tagName: "input",
      attributes: { type: "checkbox" },
      classes: ["heart__def"],
    });
    this.likeCheckbox.checked = this.isChecked;

    this.customCheckbox = this.tag({
      tagName: "span",
      classes: ["heart__custom"],
      inner: this.emojiIcon,
    });

    this.flyingHearts = Array.from({ length: 5 }, (_, k) =>
      this.tag({
        tagName: "span",
        classes: ["heart__flying"],
        inner: this.emojiIcon,
      })
    );
    this.componentWrapper.append(
      this.likeCheckbox,
      this.customCheckbox,
      ...this.flyingHearts
    );
  }

  onChange(callback) {
    this.onChangeCallback = callback;
  }

  handleChange = (event) => {
    this.onChangeCallback(event, this);
    if (this.enableAnimation) {
      event.currentTarget.checked
        ? this.setInOutAnimation("fly-in")
        : this.setInOutAnimation("fly-out");
    }
  };

  setInOutAnimation(animaCssClass) {
    this.flyingHearts.forEach((heart) => {
      heart.classList.add(animaCssClass);
      setTimeout(() => {
        heart.classList.remove(animaCssClass);
      }, this.animTime);
    });
  }

  tag(options) {
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
}
