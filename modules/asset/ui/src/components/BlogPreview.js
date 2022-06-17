export class BlogPreview extends HTMLElement {
  static get observedAttributes() {
    return [ 'blog1', 'blog2', 'blog3' ];
  }

  constructor() {
    super();
    this.blogs = [ JSON.parse(this.getAttribute('blog1')),
      JSON.parse(this.getAttribute('blog2')),
      JSON.parse(this.getAttribute('blog3')) ];
  }

  connectedCallback() {
    let html = `
    <section-header header="Blog"
                    subheader="A finger on the pulse. The finger to the status quo."></section-header>
    <div class="section-body-wrapper">
      <div class="blog-background-wrapper">
        <img class="blog-background" src="/images/background-motherboard.svg" alt="">
        <div class="blog-container">`;

    for (let i = 0; i < this.blogs.length; i++) {
      html += `
        <div class="post" style="background-image: url(${this.blogs[i].image})">
          <div class="top">
            <div class="title">
              ${this.blogs[i].title}
            </div>
            <div class="subtitle">
              ${this.blogs[i].subtitle}
            </div>
          </div>
          <div class="bottom">
            <div class="minutes">
              <img src="/images/clock.svg" alt="clock">
              <div>${this.blogs[i].minutes} min</div>
            </div>
            <custom-button text="Go To" link="${this.blogs[i].url}" mode="dark" mini text-style="font-family: 'Supply', serif;"></custom-button>
          </div>
        </div>
      `;
    }

    html += `
          </div>
          <div class="standard-button">
            <custom-button text="More Posts" link="/blog" mode="light" half></custom-button>
          </div>
        </div>
      </div>
    `;

    this.innerHTML = html;
  }
}
