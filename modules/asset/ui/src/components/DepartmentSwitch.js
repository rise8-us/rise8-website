export class DepartmentSwitch extends HTMLElement {
  static get observedAttributes() {
    return [ 'active', 'department' ];
  }

  constructor() {
    super();
    this.active = this.getAttribute('active');
    this.department = this.getAttribute('department');
    this.addEventListener('click', (e) => {
      this.onDepartmentClick(e);
    });
  }

  onDepartmentClick(e) {
    const departments = document.getElementsByClassName("department");
    for (let i = 0; i < departments.length; i++) {
      departments[i].classList.remove('active');
    }
    const departmentBiosContainers = document.getElementsByClassName("department-bios-container")
    for (let i = 0; i < departmentBiosContainers.length; i++) {
      departmentBiosContainers[i].classList.remove('active');
    }
    const bioPhotos = document.getElementsByClassName("riser-photo");
    for (let i = 0; i < bioPhotos.length; i++) {
      bioPhotos[i].classList.remove('active');
    }
    const bios = document.getElementsByClassName("riser-bio-wrapper");
    for (let i = 0; i < bios.length; i++) {
      bios[i].classList.remove('active');
    }
    e.target.classList.add('active');
    document.getElementById(`${e.target.id}-bios-container`).classList.add('active');
    document.getElementById(`${e.target.id}-photo-0`).classList.add('active');
    document.getElementById(`${e.target.id}-bio-0`).classList.add('active');
  }

  connectedCallback() {
    this.innerHTML = `
    <div id=${this.department} 
         class="list-option department ${this.active}">${this.department}</div>
    `;
  }
}
