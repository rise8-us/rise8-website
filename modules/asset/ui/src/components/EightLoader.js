export class EightLoader extends HTMLElement {
  constructor() {
    super();
    this.imagePathPrefix =
      (document.title === 'Prodacity' || /[\/[b][l][o][g]\/[ -~]+/.test(document.documentURI))
        ? '../'
        : '';
    setTimeout(function () {
      document.getElementById('website-content').classList.remove('display-after-loading-screen');
      document.getElementById('loader-wrapper').classList.add('loaded');
    }, 1000);
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="loader-wrapper" class="loader-wrapper">
        <div style="width: 50%">
          <div class="loader left"><img src="${this.imagePathPrefix}images/logo-8-half-left.svg" alt=""></div>
        </div>
        <div style="width: 50%">
          <div class="loader right"><img src="${this.imagePathPrefix}images/logo-8-half-right.svg" alt=""></div>
        </div>
      </div>
    `;
  }
}
