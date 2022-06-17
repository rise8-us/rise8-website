import { Hero } from './Hero';

export class SectionHeader extends HTMLElement {
  static get observedAttributes() {
    return [ 'header', 'subheader', 'dark-mode', 'light-on-mobile', 'error', 'secondary' ];
  }

  constructor() {
    super();
    this.header = this.getAttribute('header');
    this.subheader = this.getAttribute('subheader');
    this.darkMode =
      this.getAttribute('dark-mode') !== null &&
      this.getAttribute('light-on-mobile') === null;
    this.error = this.getAttribute('error') !== null;
    this.secondary = this.getAttribute('secondary') !== null;
  }

  connectedCallback() {
    if (this.secondary) {
      this.innerHTML = `
        <div class="section-header-wrapper dark-border ${this.error ? 'error-border' : ''}">
          <div class="section-header secondary-main">
            ${this.header}
          </div>
          <div class="section-subheader secondary-sub" 
               style="${Hero.isEmpty(this.subheader) ? 'display: none' : ''}">${this.subheader}</div>
        </div>
      `;
    } else {
      this.innerHTML = `
        <div class="section-header-wrapper 
                    ${this.darkMode ? 'dark-border' : ''} 
                    ${this.error ? 'error-border' : ''}">
          <div class="section-subheader" 
               style="${Hero.isEmpty(this.subheader) ? 'display: none' : ''}">
            ${this.subheader}
          </div>
          <div class="section-header ${this.darkMode ? 'dark' : ''}">
            ${this.header}
          </div>
        </div>
      `;
    }
  }
}
