class FormLocalizer extends HTMLElement {
  constructor() {
    super();
    this.elements = {
        input: this.querySelector('input[name="language_code"], input[name="country_code"]'),
        button: this.querySelector('button'),
        panel: this.querySelector('ul'),
        close: this.querySelector('.disclosure__item--back'),
        links: this.querySelectorAll('.disclosure__item-link'),
        form: this.querySelector('form')
    };
  }

  connectedCallback(){
    this.addEventListener('keyup', this.onContainerKeyUp.bind(this));
    this.elements.button.addEventListener('click', this.openSelector.bind(this));
    this.elements.button.addEventListener('focusout', this.closeSelector.bind(this));
    this.elements.links.forEach((item) => item.addEventListener('click', (event) => this.onItemClick(event)));
    this.elements.links.forEach((item) => item.addEventListener('mousedown', (event) => this.onItemClick(event)));

    if (!this.elements.close) return;

    this.elements.close.addEventListener('click', () => this.hidePanel());
  }

  hidePanel() {
      this.elements.button.setAttribute('aria-expanded', 'false');
      this.elements.panel.setAttribute('hidden', true);
  }

  onContainerKeyUp(event) {
      if (event.code.toUpperCase() !== 'ESCAPE') return;

      this.hidePanel();
      this.elements.button.focus();
  }

  onItemClick(event) {
    event.preventDefault();
    console.log(event.target);
    this.elements.input.value = event.currentTarget.dataset.value;
    this.elements.form.submit();
  }

  openSelector() {
    this.elements.button.focus();
    this.elements.panel.toggleAttribute('hidden');
    this.elements.button.setAttribute('aria-expanded', (this.elements.button.getAttribute('aria-expanded') === 'false').toString());
  }

  closeSelector(event) {
      const shouldClose = event.relatedTarget && event.relatedTarget.nodeName === 'BUTTON';
      if (event.relatedTarget === null || shouldClose) {
          this.hidePanel();
      }
  }
}

export default FormLocalizer;