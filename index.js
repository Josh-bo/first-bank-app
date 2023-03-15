var disp = usersInput.value;
var input = balance.value;

function button(){
    alert('I dey work')
}

function done(){
    // alert("Okay")
    // console.log(usersInput.value) 

    let total = Number(input) + Number(disp)
    console.log(total)
}

function withd(){
    alert("oiuyt")
    let total = Number(30) - Number(balance)
    console.log(total)
}

function dark(){
    output.innerHTML = ` <b id="bold" onclick="light()" class="dark">Light Mode</b>`
    bold.style.color = "white"
    body.style.backgroundColor = "black"
}

function light(){
    output.innerHTML = ` <b id="bold" onclick="dark()">Dark Mode</b>`
    body.style.backgroundColor = "white"
    bold.style.color = "black"
}

const backout = () => {
    alert(`fede`)
    window.location = `index.html`
}