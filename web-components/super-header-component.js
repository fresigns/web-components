class SuperHeaderComponent extends HTMLElement{

    constructor(){ /* dovrà gestire i vari elementi html che voglio inserire */
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){

        const style = document.createElement('style');
        // style.innerHTML = 'h1{color:lime}';
        style.innerHTML = `h1{color: ${this.getAttribute('title-color')}}`;
        this.shadowRoot.appendChild(style);

        const h1 = document.createElement('h1');
        // h1.appendChild(document.createTextNode('Game Platform'));
        h1.appendChild(document.createTextNode(this.getAttribute('super-title')));
        this.shadowRoot.appendChild(h1);     
    
        const page2Link = document.createElement('a');
        page2Link.href = './page2.html';
        page2Link.appendChild(document.createTextNode('vai alla pagina 2'));
        this.shadowRoot.appendChild(page2Link);
        // this.shadowRoot.innerHTML = '<h1>Game Platform</h1>';

    }
}

customElements.define('super-header', SuperHeaderComponent);