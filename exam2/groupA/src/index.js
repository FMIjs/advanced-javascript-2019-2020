import { html, render } from 'lit-html';

import './user-list-item';
import './route';
import './router';
import './route-link';

const roterConfig = {
  '/': {
    selector: 'fjs-user-list',
    lazy: false,
    fileName: 'user-list',
    export: 'UserList',
  },
  '/login': {
    selector: 'fjs-login',
    lazy: false,
    fileName: 'login',
    export: 'Login',
  }
};

const styles = `
  * { font-family: sans-serif; }
  .container { margin: 10px 5px; }
`;

const template = html`
  <style>${styles}</style>
  <div class="container">
    <fjs-router .config=${roterConfig}></fjs-router>
  </div>
`;

class App extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    render(template, this.shadowRoot);
  }
}

customElements.define('fjs-app', App);