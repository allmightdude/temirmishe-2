export class Expander {
  constructor(element) {
    this.element = element;
  }

  enter() {
    const width = getComputedStyle(this.element).width;

    this.element.style.width = width;
    this.element.style.position = "absolute";
    this.element.style.visibility = "hidden";
    this.element.style.height = "auto";

    const height = getComputedStyle(this.element).height;

    this.element.style.width = null;
    this.element.style.position = null;
    this.element.style.visibility = null;
    this.element.style.height = 0;

    getComputedStyle(this.element).height;

    requestAnimationFrame(() => {
      this.element.style.height = height;
    });
  }

  afterEnter() {
    element.style.height = "auto";
  }

  leave() {
    const height = getComputedStyle(this.element).height;

    this.element.style.height = height;

    getComputedStyle(this.element).height;

    requestAnimationFrame(() => {
      this.element.style.height = 0;
    });
  }
}

