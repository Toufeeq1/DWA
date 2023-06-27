import {LitElement,css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';


export class MyElement extends LitElement {
    static properties = {
      greeting: {},
      planet: {},
    };
    // Styles are scoped to this element: they won't conflict with styles
    // on the main page or in other components. Styling API can be exposed
    // via CSS custom properties.
    static styles = css`
    :root{
        --color-green:#31c48d;
        --color-white: #ffffff;
        --color-dark-grey:#33333d;
        --color-medium-gray:#424250;
        --color-light-grey:#9ca3ae;
    }
    
    *{
        box-sizing: border-box;
    } 
      :host {
        display: inline-block;
        padding: 10px;
        background: lightgray;
      }
      .planet {
        color: var(--planet-color, blue);
      }
    `;
  
    constructor() {
      super();
      // Define reactive properties--updating a reactive property causes
      // the component to update.
      this.greeting = '+';
      this.planet = '-';
    }
  
    // The render() method is called any time reactive properties change.
    // Return HTML in a string template literal tagged with the `html`
    // tag function to describe the component's internal DOM.
    // Expressions can set attribute values, property values, event handlers,
    // and child nodes/text.
    render() {
      return html`
      <input data-key="number" class="counter_value" readonly value="0" />
      <div class="counter_actions">
          <sl-button data-key="subtract" size='large' class="counter_button counter_button_first button">-</sl-button>
          <sl-button data-key="add" size='large' class="counter_button button">+</sl-button>
      </div>
      <sl-button data-key="reset" variant="neutral" class="reset">Reset</sl-button>
  </main>

  <footer class="footer">
      Inspired By <a class="footer_link" href="https://tallycount.app/">Tally Count</a>. Note this is a student
      practice project for learning
      JavaScript.
  </footer>
      `;
    }
  
    // Event handlers can update the state of @properties on the element
    // instance, causing it to re-render
    togglePlanet() {
      this.planet = this.planet === 'World' ? 'Mars' : 'World';
    }
  }
  customElements.define('my-element', MyElement);
  