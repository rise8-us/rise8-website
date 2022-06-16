export class BeliefSwitch extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', (e) => {
      if (e.srcElement.classList.contains('belief')) {
        this.onBeliefClick(e);
      }
    });
  }

  onBeliefClick(e) {
    const beliefs = document.getElementsByClassName("belief");
    for (let i = 0; i < beliefs.length; i++) {
      beliefs[i].classList.remove('active');
    }
    const descriptions = document.getElementsByClassName("belief-description");
    for (let i = 0; i < descriptions.length; i++) {
      descriptions[i].classList.remove('active');
    }
    e.target.classList.add('active');
    document.getElementById(`${e.target.id}-description`).classList.add('active');
  }

  connectedCallback() {
    this.innerHTML = `
     <div class="list-wrapper">
        <div class="list-options-wrapper">
          <div id="people" class="list-option belief active">People</div>
          <div id="practice" class="list-option belief">Practice</div>
          <div id="process" class="list-option belief">Process</div>
        </div>
        <div class="list-partner">
          <div id="people-description" class="belief-description active">
            <img class="frame" src="/images/frame-red-gradient.svg" alt="">
            <img class="pixels" src="/images/background-pixels-grey.svg" alt="">
            Digital transformation starts with people, the ones that you already have.
            Most organizations don’t need help bringing in additional talent, they really
            just need help getting out of its way.
            <br><br>
            We’re experts at coming in and helping your organization create learning
            environments where employees with growth mindsets can learn, grow,
            thrive and produce the products and platforms that are going to fuel your
            digital transformation.
          </div>
          <div id="practice-description" class="belief-description">
            <img class="frame" src="/images/frame-red-gradient.svg" alt="">
            <img class="pixels" src="/images/background-pixels-grey.svg" alt="">
            At Rise8, we emphasize three main practices: lean product
            management, user-centered design, and extreme programming.
            When balanced properly, these contribute to an effective and
            healthy DevSecOps culture.
            <br><br>
            We also think about leadership as a meta practice of any discipline,
            and we incorporate it into our engagements from day one.
          </div>
          <div id="process-description" class="belief-description">
            <img class="frame" src="/images/frame-red-gradient.svg" alt="">
            <img class="pixels" src="/images/background-pixels-grey.svg" alt="">
            From pre-kickoff to day two operations, we help you craft
            processes that create value and eliminate waste while taking
            into account your unique domain context.
            <br><br>
            The system of work has to have alignment and flow in order
            to achieve continuous delivery, where changes can be made
            quickly, safely, and in a sustainable way.
            <br><br>
            We’ll help you test your assumptions and measure what matters
            to ensure that you’re making measurable progress towards
            the outcomes you care about.
          </div>
        </div>
     </div>
    `;
  }
}
