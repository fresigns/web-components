class SuperFooterComponent extends HTMLElement{

    constructor(){ /* dovrà gestire i vari elementi html che voglio inserire */
    super();
    this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./super-footer-style.css">
        <p>© Game Platform 2023</p>
        `
        }

}

customElements.define('super-footer', SuperFooterComponent);