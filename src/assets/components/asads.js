// Define a custom element class that extends HTMLElement
class VInput extends HTMLElement {
  // Use the constructor method to initialize the component's state and properties
  constructor() {
    // Always call super() first in the constructor
    super();

    // Initialize the component's state and properties
    this.localType = this.type;
    this.localMaxLength = this.maxLength || 35;
    this.toggle = false;
    this.isPass = false;
    this.focused = false;

    // Create a shadow DOM for the component
    this.attachShadow({ mode: "open" });
  }

  // Use the connectedCallback method to render the component's template and attach event listeners when it is inserted into the DOM
  connectedCallback() {
    // Render the component's template
    this.shadowRoot.innerHTML = `
    <style>
    /* Add the CSS code for the component's style here */
    </style>
    <div class="v-control">
    <label class="v-control__label" for="${this.safeId}">${this.label}</label>
    <div class="v-control__field" @click.self="focus" @mousedown.self.prevent>
    <div class="v-control__prepend">
    <v-icon>${this.icon}</v-icon>
    </div>
    <div class="v-control__append">
    <slot name="action"></slot>
    <span class="v-control__numeric-down" @click="stepDown">_</span>
    <span class="v-control__numeric-up" @click="stepUp">+</span>
    <span class="v-control__action v-control__action--large" @click="togglePass">
    <v-icon>${this.toggle ? "hide" : "show"}</v-icon>
    </span>
    <span class="v-control__action" @click="clear">
    <v-icon>close</v-icon>
    </span>
    <span class="v-control__suffix" @click="focus">${this.suffix}</span>
    </div>
    <div class="v-control__wrapper" @click.self="focus" @mousedown.self.prevent>
    <input
    id="${this.safeId}"
    name="${this.safeName}"
    type="${this.localType}"
    placeholder="${this.localPlaceholder}"
    disabled="${this.disabled}"
    readonly="${this.readonly}"
    maxLength="${this.localMaxLength}"
    value="${this.localValue}"
    class="v-control__input"
    />
    </div>
    </div>
    <v-error>${this.errors[0]}</v-error>
    </div>
    `;

    // Attach event listeners to the component's elements
    this.shadowRoot
      .querySelector(".v-control__field")
      .addEventListener("click", this.focus.bind(this));
    this.shadowRoot
      .querySelector(".v-control__field")
      .addEventListener("mousedown", (e) => e.preventDefault());
    this.shadowRoot
      .querySelector(".v-control__input")
      .addEventListener("focus", this.onFocus.bind(this));
    this.shadowRoot
      .querySelector(".v-control__input")
      .addEventListener("blur", this.onBlur.bind(this));
    this.shadowRoot
      .querySelector(".v-control__input")
      .addEventListener("input", (e) => this.updateValue(e.target.value));
    this.shadowRoot
      .querySelector(".v-control__action--large")
      .addEventListener("click", this.togglePass.bind(this));
    this.shadowRoot
      .querySelector(".v-control__action")
      .addEventListener("click", this.clear.bind(this));
    this.shadowRoot
      .querySelector(".v-control__numeric-up")
      .addEventListener("click", this.stepUp.bind(this));
    this.shadowRoot
      .querySelector(".v-control__numeric-down")
      .addEventListener("click", this.stepDown.bind(this));
  }

  // Use the attributeChangedCallback method to update the component's state and appearance when its attributes change
  attributeChangedCallback(name, oldValue, newValue) {
    // Update the component's state and appearance based on the changed attribute
    switch (name) {
      case "type":
        this.isPass = newValue === "password";
        break;
      case "format":
        switch (newValue) {
          case "card":
            this.localMaxLength = 19;
            break;
          case "price":
            this.localMaxLength = this.maxLength || 15;
            break;
          case "number":
            this.localType = "number";
            this.localMaxLength = this.maxLength || 15;
            break;
        }
        break;
    }
  }

  // Define the component's methods
  focus(e) {
    e.preventDefault();

    if (this.focused) {
      return;
    }

    this.shadowRoot.querySelector(".v-control__input").focus();
  }

  onFocus(e) {
    this.focused = true;
  }

  onBlur(e) {
    this.focused = false;
    this.dispatchEvent(new CustomEvent("blur"));
  }

  clear() {
    this.updateValue(null);
  }

  togglePass() {
    this.localType = this.toggle ? "password" : "text";
    this.toggle = !this.toggle;
  }

  updateValue(value) {
    this.dispatchEvent(new CustomEvent("input", { detail: value }));
  }

  // Define the component's getters and setters
  get value() {
    return this.getAttribute("value");
  }

  set value(newValue) {
    this.setAttribute("value", newValue);
  }

  get type() {
    return this.getAttribute("type");
  }

  set type(newValue) {
    this.setAttribute("type", newValue);
  }

  get label() {
    return this.getAttribute("label");
  }

  set label(newValue) {
    this.setAttribute("label", newValue);
  }

  get placeholder() {
    return this.getAttribute("placeholder");
  }

  set placeholder(newValue) {
    this.setAttribute("placeholder", newValue);
  }

  get icon() {
    return this.getAttribute("icon");
  }

  set icon(newValue) {
    this.setAttribute("icon", newValue);
  }

  get inputClass() {
    return this.getAttribute("inputClass");
  }

  set inputClass(newValue) {
    this.setAttribute("inputClass", newValue);
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  set disabled(newValue) {
    if (newValue) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  get readonly() {
    return this.hasAttribute("readonly");
  }

  set readonly(newValue) {
    if (newValue) {
      this.setAttribute("readonly", "");
    } else {
      this.removeAttribute("readonly");
    }
  }

  get solo() {
    return this.hasAttribute("solo");
  }

  set solo(newValue) {
    if (newValue) {
      this.setAttribute("solo", "");
    } else {
      this.removeAttribute("solo");
    }
  }

  get clearable() {
    return this.hasAttribute("clearable");
  }

  set clearable(newValue) {
    if (newValue) {
      this.setAttribute("clearable", "");
    } else {
      this.removeAttribute("clearable");
    }
  }

  get ltr() {
    return this.hasAttribute("ltr");
  }

  set ltr(newValue) {
    if (newValue) {
      this.setAttribute("ltr", "");
    } else {
      this.removeAttribute("ltr");
    }
  }

  get maxLength() {
    return this.getAttribute("maxLength");
  }
}
