export class WhoWeServe extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
    .who-we-serve-wrapper {
      margin-top: 32px;
    }

    .service-logo-wrapper {
      display: flex;
      justify-content: space-between;
    }
    
    .image-grayscale {
      filter: grayscale(1);
    }
    
    .image-grayscale:hover {
      filter: none;
    }
    </style>
    <div class="who-we-serve-wrapper">
      <section-header header="Who We Serve"
                      subheader="Trusted guides with proven success"></section-header>
      <div class="service-logo-wrapper">
        <img class="image-grayscale" src="images/logo-sf.svg" alt="">
        <img class="image-grayscale" src="images/logo-af.svg" alt="">
        <img class="image-grayscale" src="images/logo-va.svg" alt="">
        <img class="image-grayscale" src="images/logo-specops.svg" alt="">
        <img class="image-grayscale" src="images/logo-sec31.svg" alt="">
        <img class="image-grayscale" src="images/logo-abms.svg" alt="">
        <img class="image-grayscale" src="images/logo-km.svg" alt="">
      </div>
    </div>
    `;
  }
}
