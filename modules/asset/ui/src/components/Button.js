export class Button extends HTMLElement {
  static get observedAttributes() {
    return [ 'text', 'link', 'mode', 'half', 'mini', 'no-chevron' ];
  }

  constructor() {
    super();
    this.text = this.getAttribute('text');
    this.link = this.getAttribute('link');
    this.mode = this.getAttribute('mode'); // light, dark, gradient
    this.half = this.getAttribute('half');
    this.mini = this.getAttribute('mini');
    this.chevron = this.getAttribute('no-chevron') === null;
  }

  connectedCallback() {
    const imageExt = this.mode === 'dark' ? '-light' : '';
    const halfSize = this.half !== null ? 'half' : '';
    const mini = this.mini !== null ? 'mini' : '';

    this.innerHTML = `
      <a href="${this.link}" class="button ${this.mode} ${halfSize} ${mini}">
        <div class="${this.mode}-text">${this.text}</div>
        <img src="/images/icon-chevron-right${imageExt}.svg" alt="Chevron right">
      </a>
    `;
  }
}
