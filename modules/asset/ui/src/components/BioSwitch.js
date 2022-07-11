export class BioSwitch extends HTMLElement {
  static get observedAttributes() {
    return [ 'image-url', 'department', 'index', 'active', 'name', 'role' ];
  }

  constructor() {
    super();
    this.imageUrl = this.getAttribute('image-url');
    this.department = this.getAttribute('department');
    this.index = this.getAttribute('index');
    this.active = this.getAttribute('active');
    this.name = this.getAttribute('name');
    this.role = this.getAttribute('role');
    this.addEventListener('click', (e) => {
      this.onBioClick(e);
    });
  }

  onBioClick(e) {
    const bioPhotos = document.getElementsByClassName('riser-photo');
    for (let i = 0; i < bioPhotos.length; i++) {
      bioPhotos[i].classList.remove('active');
    }
    const bios = document.getElementsByClassName('riser-bio-wrapper');
    for (let i = 0; i < bios.length; i++) {
      bios[i].classList.remove('active');
    }

    let toMakeActive = e.target;
    if (!e.target.classList.contains('riser-photo')) {
      const photoContainer = e.path.find(
        el => el.classList.contains('riser-photo-wrapper'));
      toMakeActive = photoContainer.getElementsByClassName('riser-photo')[0];
    }
    toMakeActive.classList.add('active');
    document.getElementById(
      `${toMakeActive.id.replace('photo', 'bio')}`).classList.add('active');
  }

  connectedCallback() {
    this.innerHTML = `
     <img src=${this.imageUrl} alt="" 
          id="${this.department}-photo-${this.index}" 
          class="riser-photo ${this.department}-riser ${this.active}">
     <photo-effects name="${this.name}" role="${this.role}"
                    hover-text="Read Bio"></photo-effects>
    `;
  }
}
