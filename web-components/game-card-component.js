class GameCardComponent extends HTMLElement{

    constructor(){ /* dovrà gestire i vari elementi html che voglio inserire */
    super();
    this.attachShadow({mode: 'open'})
}

    connectedCallback(){
        this.render();
    }

    render(){

        if (this.game){
        
            // this.shadowRoot.innerHTML = '';

            // const div = document.createElement('div');
            // this.shadowRoot.appendChild(div);

            // const h3 = document.createElement('h3');
            // h3.appendChild(document.createTextNode(title));
            // div.appendChild(h3);

            this.shadowRoot.innerHTML = `
            <style>
            .card{
                display: flex;
                flex-direction: column;
                background-color: white;
                border-radius: 16px;
                padding: 16px;
                margin-bottom: 4px;
            }
            .card-title{
                font-size: x-large;
                font-weight: bold;
            }
            .card-author{
                font-size: large;
            }
            .card-details{
                display: flex;
            }
            .card-detail{
                flex:1;
            }
            </style>
            `

            this.shadowRoot.innerHTML += `            
                <div class="card">
                <span class="card-title">${this.game.title}</span>
                <span class="card-author">${this.game.author}</span>
                <div>
                    <div class="card-details">
                        <span class="card-detail">${this.game.type}</span>
                        <span class="card-detail">${this.game.yop}</span>
                        <span class="card-detail">${this.game.isMultiplayer ? 'multiplayer' : 'single player'}</span>
                    </div>
                </div>
`

            const deleteBtn = document.createElement('button');
            deleteBtn.appendChild(document.createTextNode('cancellami'));
            this.shadowRoot.querySelector('.card').appendChild(deleteBtn);
            deleteBtn.addEventListener('click', () => this.emitEvent())
        }
    }

    emitEvent(){
        const customEvent = new CustomEvent('card-clicked', {detail: this.game.title});
        this.dispatchEvent(customEvent);

    }

}

customElements.define('game-card', GameCardComponent);