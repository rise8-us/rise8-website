export class Button extends HTMLElement {
  static get observedAttributes() {
    return [ 'text', 'link', 'mode', 'half', 'mini', 'no-chevron', 'text-style' ];
  }

  constructor() {
    super();
    this.text = this.getAttribute('text');
    this.link = this.getAttribute('link');
    this.mode = this.getAttribute('mode'); // light, dark, gradient
    this.half = this.getAttribute('half');
    this.mini = this.getAttribute('mini');
    this.hideChevron = this.getAttribute('no-chevron') !== null;
    this.textStyles = this.getAttribute('text-style');
  }

  connectedCallback() {
    const imageExt = this.mode === 'dark' ? '-light' : '';
    const halfSize = this.half !== null ? 'half' : '';
    const mini = this.mini !== null ? 'mini' : '';

    this.innerHTML = `
      <a href="${this.link}" class="button ${this.mode} ${halfSize} ${mini}">
        <div class="button-text" style="${this.textStyles}">${this.text}</div>
        <img src="/images/icon-chevron-right${imageExt}.svg" alt="Chevron right" ${this.hideChevron ? 'hidden' : ''}>
      </a>
    `;
  }
}
