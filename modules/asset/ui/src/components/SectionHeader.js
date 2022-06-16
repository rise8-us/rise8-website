export class SectionHeader extends HTMLElement {
  static get observedAttributes() {
    return [ 'header', 'subheader', 'dark-mode', 'error', 'secondary' ];
  }

  constructor() {
    super();
    this.header = this.getAttribute('header');
    this.subheader = this.getAttribute('subheader');
    this.darkMode = this.getAttribute('dark-mode') !== null;
    this.error = this.getAttribute('error') !== null;
    this.secondary = this.getAttribute('secondary') !== null;
  }

  connectedCallback() {
    const styles = `
    <style>
      .section-header-wrapper {
        border-left: 12px solid #131414;
        padding-left: 52px;
        margin-bottom: 36px;
      }
      
      .dark-border {
        border-left: 12px solid #FFFFFF;
      }
      
      .error-border {
        border-left: none;
        padding: 0;
      }
      
      .section-subheader {
        font-family: 'Supply', serif;
        text-transform: uppercase;
        font-size: 12px;
        color: #FC0000;
      }
      
      .secondary-sub {
        color: #FFFFFF;
      }
      
      .section-header {
        font-family: 'Jagerlay', serif;
        font-size: 40px;
        font-weight: 400;
        margin: 8px 0;
      }
      
      .secondary-main {
        color: #FC0000;
      }
    </style>
    `;
    if (this.secondary) {
      this.innerHTML = styles + `
        <div class="section-header-wrapper dark-border ${this.error ? 'error-border' : ''}">
          <div class="section-header secondary-main">
            ${this.header}
          </div>
          <div class="section-subheader secondary-sub">${this.subheader}</div>
        </div>
      `;
    } else {
      this.innerHTML = styles + `
        <div class="section-header-wrapper 
                    ${this.darkMode ? 'dark-border' : ''} 
                    ${this.error ? 'error-border' : ''}">
          <div class="section-subheader">${this.subheader}</div>
          <div class="section-header ${this.darkMode ? 'dark' : ''}">
            ${this.header}
          </div>
        </div>
      `;
    }
  }
}
