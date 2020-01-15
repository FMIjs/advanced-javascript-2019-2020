export class Route extends HTMLElement {
  static selector = 'fjs-route';

  static get observedAttributes() {
    return ['component', 'path'];
  }

  attributeChangeCallback(name, oldValue, newValue) {
    const handler = ({
      component: val => {
        this.component = val;
      },
      path: val => {
        this.path = val;
      },
      lazy: val => {
        this.lazy = val;
      }
    })[name]
    if (!handler) { return; }
    handler(newValue);
  }

  static toString() {
    return this.selector;
  }
}

customElements.define(Route.selector, Route);