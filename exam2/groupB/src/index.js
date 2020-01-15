import { html, render } from 'lit-html';

import './file-data';
import './route';
import './router';
import './route-link';

const roterConfig = {
  '/': {
    selector: 'fjs-file-data',
    lazy: false,
    fileName: 'file-data',
    export: 'FileData',
  },
  '/login': {
    selector: 'fjs-login',
    lazy: false,
    fileName: 'login',
    export: 'Login',
  },
  '/register': {
    selector: 'fjs-register',
    lazy: false,
    fileName: 'register',
    export: 'Register'
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