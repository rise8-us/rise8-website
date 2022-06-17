export class Hero extends HTMLElement {
  static get observedAttributes() {
    return [ 'title', 'memo', 'description' ];
  }

  constructor() {
    super();
    this.title = this.getAttribute('title');
    this.memo = this.getAttribute('memo');
    this.description = this.getAttribute('description');
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="hero">
        <img src="/images/background-red-slash-mobile.svg" alt="" class="hero-slash-mobile">
        <div class="left">
          <div class="memo">${this.memo}</div>
          <div class="title">${this.title}</div>
          <div class="description">${this.description}</div>
        </div>
        <div class="right">
          <div style="width: 50%"></div>
        </div>
      </div>
    `;
  }
}
