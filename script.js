// const body = document.body;
const colorize = document.getElementById("colorize");
const color1 = document.getElementById("pallete1");
const color2 = document.getElementById("pallete2");
const color3 = document.getElementById("pallete3");

//generate random colors
function generateRandom() {
    let randomize1 = Math.floor(Math.random() * 16777215).toString(16);
    let randomize2 = Math.floor(Math.random() * 16777215).toString(16);
    let randomize3 = Math.floor(Math.random() * 16777215).toString(16);

    color1.innerHTML = `#${randomize1}`;
    color2.innerHTML = `#${randomize1}`;
    color3.innerHTML = `#${randomize1}`;

    colorize.style.background = `linear-gradient(to right, #${randomize1} 0%, #${randomize1} 33%, #${randomize2} 33%, #${randomize2} 67%, #${randomize3} 67%,#${randomize3} 100%)`;
    
}

//allow user to copy color hex
const color = document.querySelectorAll(".color");
color.forEach((element) => {
    element.addEventListener("click", copyHexColor);
});
//WHERE IT GETS MESSY 
// I've found that execCommand is not used as much anyomore and this use of event doesn't seem right
function selectHex() {
    let colorElement = event.target;
  //in VS code event has a line through it 
    let range;

    if(document.selection) {
        range = document.colorize.creteTextRange();
        range.moveToElement(colorElement);
        range.selectNode(colorElement);

        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}

function copyHexColor() {
    const el = document.createElement('textarea');
    el.value = event.target.innerText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    el.style.opacity = '0';
    document.colorize.appendChild(el);
    el.select();
    document.execCommand('copy');
    alert(`Color Hex ${event.target.innerText} copied to clipboard`);
    console.log(el);
    document.colorize.removeChild(el);
  // as does execCommand 
}