export class WhoWeServe extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="secondary">
      <section-header header="Who We Serve"
                      subheader="Trusted guides with proven success"></section-header>
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
