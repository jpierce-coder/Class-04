

const click1 = document.getElementById('buttonClick');
const click2 = document.getElementById('buttonClick');

click1.addEventListener('click', function changeBackground(event) {
    let randColor = Math.floor(Math.random()*16777215).toString(16);
    let randBackground = Math.floor(Math.random()*16777215).toString(16);
    document.querySelector('body').style.backgroundColor = "#" + randColor;
    document.querySelector('h1').style.color = '#' + randBackground;
})
    