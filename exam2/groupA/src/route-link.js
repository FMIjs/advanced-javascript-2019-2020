import { Router } from './router';
export class RouteLink extends HTMLElement {
  static selector = 'fjs-route-link';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = '<slot></slot>';
  }

  registerClickHandler = (fn) => {
    if (!fn) {
      console.warn('Click handler not implemented!');
      return;
    }
    this.clickHandler = fn;
    this.shadowRoot.addEventListener('click', this.clickHandler);

  }

  connectedCallback() {
    const router = this.parentNode.parentNode.querySelector(Router.selector);
    if (!router) {
      console.warn('No router found!');
      return;
    }
    customElements.whenDefined(Router.selector).then(() => {
      router.register(this);
    });
  }

  disconnectedCallback() {
    if (this.clickHandler) {
      this.shadowRoot.removeEventListener('click', this.clickHandler);
    }
  }

  static toString() {
    return this.selector;
  }
}

customElements.define(RouteLink.selector, RouteLink);