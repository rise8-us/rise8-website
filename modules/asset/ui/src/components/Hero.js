export class Hero extends HTMLElement {
  static get observedAttributes() {
    return [ 'title', 'title-image', 'memo', 'description', 'image', 'large', 'pad-top' ];
  }

  constructor() {
    super();
    this.title = this.getAttribute('title');
    this.titleImage = this.getAttribute('title-image');
    this.memo = this.getAttribute('memo');
    this.description = this.getAttribute('description');
    this.image = this.getAttribute('image');
    this.caption = this.getAttribute('caption');
    this.large = this.getAttribute('large') !== null;
    this.padTop = this.getAttribute('pad-top') !== null;
  }

  static isEmpty(field) {
    return (
      field === null ||
        field === 'null' ||
        field === ''
    );
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="hero ${this.large ? 'large' : ''} ${this.description ? 'title-slash' : ''}" style="${this.padTop ? 'padding-top: 40px' : ''}">
        <img src="/images/background-red-slash-mobile.svg" alt="" class="hero-slash-mobile">
        <div class="left">
          <img src="${this.titleImage}" alt="" class="title-image" style="${Hero.isEmpty(this.titleImage) ? 'display: none' : ''}">
          <div class="memo" style="${Hero.isEmpty(this.titleImage) ? '' : 'padding-top: 20px'} ${Hero.isEmpty(this.memo) ? 'display: none' : ''}">${this.memo}</div>
          <div class="title" style="${Hero.isEmpty(this.title) ? 'display: none' : ''}">${this.title}</div>
          <div class="description" style="${Hero.isEmpty(this.description) ? 'display: none' : ''}">${this.description}</div>
          <div class="caption" style="${Hero.isEmpty(this.caption) ? 'display: none' : ''}">${this.caption}</div>
        </div>
        <div class="right">
          <img src="${this.image}" alt="" class="image">
        </div>
      </div>
    `;
  }
}
