import { html, render } from 'lit-html';
import './route-link';
import './router';
import { store } from './store';

const template = () => html`
  <input placeholder="Email" type="email" />
  <input placeholder="Password" type="password" />

  <button>Login</button>
  <br>
  <a href="http://localhost:8080/register">register</a>
`;

export class Login extends HTMLElement {
  static selector = 'fjs-login';

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  login() {
    const data = {};
    fetch('http://localhost:8082/login', { method: 'POST', body: JSON.stringify(data) })
      .then(response => {
        if (response.status !== 200) {
          // ...
          return;
        }
        response.json().then((data) => {
          store.me.entity = data;
          store.me.isReady = true;

          window.location.href = 'http://localhost:8080';
        });
      })
      .catch(err => {
        // ...
        alert(err);
        console.error(err);
      });
  }


  render() {
    render(template(this), this.shadowRoot);
  }
}

customElements.define(Login.selector, Login);
