class GameListComponent extends HTMLElement{

    constructor(){ /* dovrà gestire i vari elementi html che voglio inserire */
    super();
    this.attachShadow({mode: 'open'})
}

connectedCallback(){
    fetch('./games-data.json')
    .then(resp => resp.json())
    .then(res => this.render(res))
}

render(games){
    // this.shadowRoot.innerHTML = 'game list funziona!!!';
    
    this.shadowRoot.innerHTML = '';
    const mainContainer = document.createElement('div');
    this.shadowRoot.appendChild(mainContainer);

    for (let i = 0; i < games.length; i++) {
        const game = games[i];
    
        const li = document.createElement('game-card');
        cardCompontent.setAttribute('game-title', game.title);
        cardCompontent.render()
        
        mainContainer.appendChild(cardCompontent);

        li.appendChild(document.createTextNode(game.title));
        ul.appendChild(li);
    }
}

}

customElements.define('games-list', GameListComponent);