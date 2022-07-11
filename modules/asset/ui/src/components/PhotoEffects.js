export class PhotoEffects extends HTMLElement {
  static get observedAttributes() {
    return [ 'name', 'role', 'hover-text' ];
  }

  constructor() {
    super();
    this.name = this.getAttribute('name');
    this.role = this.getAttribute('role');
    this.hoverText = this.getAttribute('hover-text');
  }

  connectedCallback() {
    this.innerHTML = `
      <div>
        <div class="photo-gradient"></div>
        <div class="photo-hover" style="${this.hoverText ? '' : 'display:none'}">${this.hoverText}</div>
        <div class="photo-info">
          <div>${this.name}</div>
          <div>${this.role}</div>
        </div>
      </div>
    `;
  }
}
