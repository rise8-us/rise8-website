export class HamburgerMenu extends HTMLElement {
  static get observedAttributes() {
    return [ 'mode' ];
  }

  constructor() {
    super();
    this.mode = this.getAttribute('mode');
    this.addEventListener('click', (e) => {
      if (e.srcElement.id === 'hamburger-menu') {
        this.onMenuClick();
      }
      if (e.srcElement.id === 'close') {
        this.onClose();
      }
    });
  }

  onMenuClick() {
    document.getElementById('mobile-nav-menu').classList.add('active');
  }

  onClose() {
    document.getElementById('mobile-nav-menu').classList.remove('active');
  }

  connectedCallback() {
    this.innerHTML = `
      <img src="/images/icon-hamburger-menu.svg" alt="" id="hamburger-menu" class="hamburger-menu">
      <div id="mobile-nav-menu" class="mobile-nav-menu">
        <img src="/images/icon-close.svg" alt="" id="close" class="close">
        <ul class="mobile-nav-list">
          <li><a href="/" class="link"><img src="/images/logo-rise8.svg" alt="Rise8 logo"></a></li>
          <li><a href="/services" class="link"><div class="link-text" style="font-size: 32px">Services</div></a></li>
          <li><a href="/about" class="link"><div class="link-text" style="font-size: 32px">About Us</div></a></li>
          <li><a href="/blog" class="link"><div class="link-text" style="font-size: 32px">Blog</div></a></li>
          <li><a href="/careers" class="link"><div class="link-text" style="font-size: 32px">Careers</div></a></li>
          <li><a href="/contact" class="link"><div class="link-text" style="font-size: 32px">Contact</div></a></li>
        </ul>
      </div>
    `;
  }
}
