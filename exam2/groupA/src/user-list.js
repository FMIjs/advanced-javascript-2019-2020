import { html, render } from 'lit-html';
import './route-link';
import './router';
import { store } from './store';

const styles = `
  ul { padding: 0; }
`;
const template = (ctx) => html`
  <style>${styles}</style>
  <div>Users</div>
  <div class="filters">
    <input placeholder="First Name" type="text">
    <input placeholder="Last Name" type="text">
  </div>
  <ul>
  ${
  !!ctx.users.length
    ? ctx.users.map(user => html`<fjs-user-list-item user='${JSON.stringify(user)}'></fjs-user-list-item>`)
    : 'No users'
  }
  </ul>
  <div class="controls">
    <button>Previous</button>
    <button>Next</button>
  </div>
  `

export class UserList extends HTMLElement {
  static selector = 'fjs-user-list';

  users = [];

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();

    if (!store.list.isReady) { this.loadUsers(); }
    this.users = store.list.entities;
    this.render();
  }

  loadUsers() {
    fetch('http://localhost:8082/api')
      .then(response => {
        if (response.status !== 200) { console.error(response.status); return; }
        response.json().then((data) => {
          store.list.entities = data;
          store.list.isReady = true;

          this.users = data;
          this.render();
        });
      })
      .catch(console.error);
  }


  render() {
    render(template(this), this.shadowRoot);
  }
}

customElements.define(UserList.selector, UserList);
