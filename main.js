const searchParams = new URLSearchParams(window.location.search);
console.log(searchParams);

const header = document.getElementById('header');

let color = 'green'
if (searchParams.get('id')) {
    if (searchParams.get('id') === 'pluto'){
        color = 'orange'
    }
    if (searchParams.get('id') === 'pippo'){
        color = 'blue'
    }
}

header.setAttribute('title-color', color)


function changeTitleColor(){
    const header = document.getElementById('header');
    header.setAttribute('title-color', 'pink');
    header.render();
}