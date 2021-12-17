const body = document.body;
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

    body.style.background = `linear-gradient(to right, #${randomize1} 0%, #${randomize1} 33%, #${randomize2} 33%, #${randomize2} 67%, #${randomize3} 67%,#${randomize3} 100%)`;
    
}

//allow user to copy color hex
const color = document.querySelectorAll(".color");
color.forEach((element) => {
    element.addEventListener("click", copHexColor);
});

