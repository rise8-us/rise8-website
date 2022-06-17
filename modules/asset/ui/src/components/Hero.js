export class Hero extends HTMLElement {
  static get observedAttributes() {
    return [ 'title', 'memo', 'description', 'image', 'large' ];
  }

  constructor() {
    super();
    this.title = this.getAttribute('title');
    this.memo = this.getAttribute('memo');
    this.description = this.getAttribute('description');
    this.image = this.getAttribute('image');
    this.large = this.getAttribute('large') !== null;
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="hero ${this.large ? 'large' : ''}">
        <img src="/images/background-red-slash-mobile.svg" alt="" class="hero-slash-mobile">
        <div class="left">
          <div class="memo">${this.memo}</div>
          <div class="title">${this.title}</div>
          <div class="${this.description !== '' ? 'description' : 'no-description'}">${this.description}</div>
        </div>
        <div class="right">
          <img src="${this.image}" alt="" class="image">
        </div>
      </div>
    `;
  }
}
