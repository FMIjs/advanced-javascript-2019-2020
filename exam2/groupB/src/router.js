import * as pathToRegex from 'path-to-regexp';
export class Router extends HTMLElement {
  static selector = 'fjs-router';
  pathMap = {};
  stateChangeHandler = (event) => {
    event.preventDefault();
    this.render();
  }

  register(link) {
    link.registerClickHandler(() => {
      const path = link.getAttribute('to');
      window.history.pushState(null, null, path);
      this.render();
    });
  }

  render() {
    const path = window.location.pathname;
    if (path === this._currentPath) { return; }
    const location = Object.values(this.pathMap).find(location => location.pathRegex.exec(path));
    if (!location) { return; }
    if (this._currentComponent) { this.parentNode.removeChild(this._currentComponent); }
    this._currentPath = path;
    if (!location.ctor) {
      this.getComponent(location.fileName, location.export || 'default')
        .then(this.constructAndAppendComponent);
      return;
    }
    this.constructAndAppendComponent(location.ctor);
  }

  getComponent(name, exp = 'default') {
    return import(`./${name}`)
      .then(({ [exp]: ctor }) => ctor)
      .catch(error => {
        console.error(error);
      });
  }

  constructAndAppendComponent = (ctor) => {
    this._currentComponent = new ctor();
    this.parentNode.appendChild(this._currentComponent);
  }

  connectedCallback() {
    window.addEventListener('popstate', this.stateChangeHandler);
    window.addEventListener('hashchange', this.stateChangeHandler);
    for (const [path, data] of Object.entries(this.config)) {
      this.pathMap[path] = {
        ctor: data.lazy ? null : customElements.get(data.selector),
        pathRegex: pathToRegex(path),
        path,
        selector: data.selector,
        fileName: data.fileName,
        export: data.export,
      }
    }
    this.render();
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this.stateChangeHandler);
    window.removeEventListener('hashchange', this.stateChangeHandler);
  }

  static toString() {
    return this.selector;
  }
}

customElements.define(Router.selector, Router);