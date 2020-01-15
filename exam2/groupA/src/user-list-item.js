
const styles = `
li {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  margin: 5px 0;

  background: #ebebeb;
  border-raius: 10px;
  border: 1px solid gray;

  max-width: 300px;
}
button { margin-left: 10px; }
`;

const templateFactory = (ctx) => {
  const template = document.createElement('template');
  template.innerHTML = `
    <style>${styles}</style>
    <li>
      <div></div>
      <button>Delete</button>
    </li>
  `;
  return template;
};

export class UserListItem extends HTMLElement {
  static selector = 'fjs-user-list-item';

  user;

  deleteButton; // The delete button;
  userContainer; // The div where we put the actual user data;

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templateFactory(this).content.cloneNode(true))

    this.deleteButton = this.shadowRoot.querySelector('button');
    this.userContainer = this.shadowRoot.querySelector('div');
  }

  connectedCallback() {
    console.log('User entity connected.');
    if (!this.hasAttribute('user')) {
      this.setAttribute('user', JSON.stringify({ firstName: 'Ivan', lastName: 'Petrov' }));
    };

    this.user = JSON.parse(this.getAttribute('user'));

    this.userContainer.innerText = `${this.user.first_name} ${this.user.last_name}`;
    this.deleteButton.addEventListener('click', this.deleteHandler);
  }

  disconnectedCallback() {
    console.log('User list item disconnected.');
    this.deleteButton.removeEventListener('click', this.deleteHandler);
  }

  static get observedAttributes() { return ['user']; }
  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`User list item attribute ${name} changed from ${oldValue} to ${newValue}`);
    if (name === 'user') {
      this.user = newValue;
      this.userContainer.innerText = `${this.user.firstName} ${this.user.lastName}`;
    }
  }


  deleteHandler = () => {
    console.log('delete button was pressed');
  }
}

customElements.define(UserListItem.selector, UserListItem);
