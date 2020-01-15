import { html, render } from 'lit-html';
import './route-link';
import './router';
import { store } from './store';

const styles = `
  ul { padding: 0; }
`;
const template = (ctx) => html`
  <style>${styles}</style>
  <div>File Data</div>
  <ul>
  ${
  !!ctx.fileData.length
    ? ctx.fileData.map(data => html`<li>${data}</li>`)
    : 'No changes'
  }
  </ul>
  `

export class FileData extends HTMLElement {
  static selector = 'fjs-file-data';

  fileData = [];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();

    if (!store.fileData.isReady) { this.openFileDataSocket(); }
    this.fileData = store.fileData.entities;
    this.render();
  }

  openFileDataSocket() {
    // ...
  }


  render() {
    render(template(this), this.shadowRoot);
  }
}

customElements.define(FileData.selector, FileData);
