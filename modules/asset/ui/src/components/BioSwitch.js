export class BioSwitch extends HTMLElement {
  static get observedAttributes() {
    return [ 'image-url', 'department', 'index', 'active' ];
  }

  constructor() {
    super();
    this.imageUrl = this.getAttribute('image-url');
    this.department = this.getAttribute('department');
    this.index = this.getAttribute('index');
    this.active = this.getAttribute('active');
    this.addEventListener('click', (e) => {
      this.onBioClick(e);
    });
  }

  onBioClick(e) {
    const bioPhotos = document.getElementsByClassName("riser-photo");
    for (let i = 0; i < bioPhotos.length; i++) {
      bioPhotos[i].classList.remove('active');
    }
    const bios = document.getElementsByClassName("riser-bio-wrapper");
    for (let i = 0; i < bios.length; i++) {
      bios[i].classList.remove('active');
    }
    e.target.classList.add('active');
    document.getElementById(`${e.target.id.replace('photo', 'bio')}`).classList.add('active');
  }

  connectedCallback() {
    this.innerHTML = `
     <img src=${this.imageUrl} alt="" 
          id="${this.department}-photo-${this.index}" 
          class="riser-photo ${this.active}">
    `;
  }
}
