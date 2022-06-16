import { WhoWeServe } from './components/WhoWeServe';
import { BlogPreview } from './components/BlogPreview';
import { Hero } from './components/Hero';
import { Button } from './components/Button';
import { SectionHeader } from './components/SectionHeader';
import { DepartmentSwitch } from './components/DepartmentSwitch';
import { BioSwitch } from './components/BioSwitch';
import { BeliefSwitch } from './components/BeliefSwitch';

export default () => {
  customElements.define('hero-header', Hero);
  customElements.define('section-header', SectionHeader);
  customElements.define('custom-button', Button);
  customElements.define('who-we-serve', WhoWeServe);
  customElements.define('blog-preview', BlogPreview);
  customElements.define('department-switch', DepartmentSwitch);
  customElements.define('bio-switch', BioSwitch);
  customElements.define('belief-switch', BeliefSwitch);
};
