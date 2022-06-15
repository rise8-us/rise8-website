export class WhoWeServe extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="secondary">
      <div class="section-header-wrapper">
        <div class="section-subheader">Trusted guides with proven success</div>
        <div class="section-header">Who We Serve</div>
      </div>
      <div class="logo-wrapper">
        <img src="images/logo-sf.svg" alt="">
        <img src="images/logo-af.svg" alt="">
        <img src="images/logo-va.svg" alt="">
        <img src="images/logo-specops.svg" alt="">
        <img src="images/logo-sec31.svg" alt="">
        <img src="images/logo-abms.svg" alt="">
        <img src="images/logo-km.svg" alt="">
      </div>
    </div>
    `;
  }
}
