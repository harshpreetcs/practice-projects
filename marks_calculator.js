//selecting all input and button elements
let math = document.querySelector("#math");
let science = document.querySelector("#science");
let punjabi = document.querySelector("#punjabi");
let hindi = document.querySelector("#hindi");
let social = document.querySelector("#social");
let computer = document.querySelector("#computer");
let btn = document.querySelector("#calculate")
let h2 = document.querySelector("h2");

//
let totalMarks = 0;
function calculate(){
    totalMarks = parseInt(math.value) + parseInt(science.value) + parseInt(punjabi.value) + parseInt(hindi.value) + parseInt(social.value) + parseInt(computer.value);
    console.log(totalMarks);
    h2.innerText = `your total marks is : ${totalMarks}`;
}

btn.onclick = calculate;
