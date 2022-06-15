export class Button extends HTMLElement {
  static get observedAttributes() {
    return [ 'text', 'link', 'light-mode', 'half', 'mini' ];
  }

  constructor() {
    super();
    this.text = this.getAttribute('text');
    this.link = this.getAttribute('link');
    this.lightMode = this.getAttribute('light-mode');
    this.half = this.getAttribute('half');
    this.mini = this.getAttribute('mini');
  }

  connectedCallback() {
    const mode = this.lightMode !== null ? 'light' : 'dark';
    const imageExt = this.lightMode === null ? '-light' : '';
    const halfSize = this.half !== null ? 'half' : '';
    const mini = this.mini !== null ? 'mini' : '';

    this.innerHTML = `
      <a href="${this.link}" class="button ${mode} ${halfSize} ${mini}">
        <div class="${mode}">${this.text}</div>
        <img src="/images/icon-chevron-right${imageExt}.svg" alt="Chevron right">
      </a>
    `;
  }
}
