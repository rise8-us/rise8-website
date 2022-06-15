export class SectionHeader extends HTMLElement {
  static get observedAttributes() {
    return [ 'header', 'subheader', 'dark-mode', 'error' ];
  }

  constructor() {
    super();
    this.header = this.getAttribute('header');
    this.subheader = this.getAttribute('subheader');
    this.darkMode = this.getAttribute('dark-mode');
    this.error = this.getAttribute('error');
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="section-header-wrapper 
                ${this.darkMode != null ? 'dark' : ''} 
                ${this.error != null ? 'error' : ''}">
      <div class="section-subheader">${this.subheader}</div>
      <div class="section-header ${this.darkMode != null ? 'dark' : ''}">
        ${this.header}
      </div>
    </div>
    `;
  }
}
