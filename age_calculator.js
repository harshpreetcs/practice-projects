let now = new Date();
console.log(`Current year : ${now.getFullYear()}`);

let currYear = now.getFullYear();
let dob = document.querySelector('input');
console.log(`Date of Birth : ${dob.value}`);

let h2 = document.querySelector('h2');
console.dir(h2);

function calu(){
    let age = currYear - dob.value;
    console.log(`Your age is : ${age}`);
    h2.innerText = `Your age is : ${age}`;
}

let btn = document.querySelector('button');
btn.onclick = calu;
