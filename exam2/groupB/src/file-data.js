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
    // const socket = io();
    // fetch('http://localhost:8082/api')
    //   .then(response => {
    //     if (response.status !== 200) { console.error(response.status); return; }
    //     response.json().then((data) => {
    //       store.list.entities = data;
    //       store.list.isReady = true;

    //       this.fileData = data;
    //       this.render();
    //     });
    //   })
    //   .catch(console.error);
  }


  render() {
    render(template(this), this.shadowRoot);
  }
}

customElements.define(FileData.selector, FileData);
