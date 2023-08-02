class SuperHeaderComponent extends HTMLElement{

    constructor(){ /* dovrà gestire i vari elementi html che voglio inserire */
        super();
        this.attachShadow({mode: 'open'})
    }

    connectedCallback(){
        this.render()
    }

    render(){
        console.log('render', this.getAttribute('title-color'));
        this.shadowRoot.innerHTML = '';
        const style = document.createElement('style');
        style.innerHTML = `h1{color: ${this.getAttribute('title-color')}}`;
        this.shadowRoot.appendChild(style);

        const h1 = document.createElement('h1');
        h1.appendChild(document.createTextNode(this.getAttribute('super-title')));
        this.shadowRoot.appendChild(h1);     

        const page2Link = document.createElement('a');
        page2Link.href = './page2.html';
        page2Link.appendChild(document.createTextNode('vai alla pagina 2'));
        this.shadowRoot.appendChild(page2Link);
    }

    attributeChangedCallback(name, oldValue, newValue){

        if (oldValue !== newValue) {
            this.render();
        }
    }

    static get observedAttribute(){
        return ['title-color', 'super-title'];
    }
}

customElements.define('super-header', SuperHeaderComponent);