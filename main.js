let container = document.getElementsByClassName("container");
let submit = document.querySelector(".submit");
let inputText = document.querySelector("input").innerHTML;
const reset = document.getElementById("reset");

let toDoList = document.querySelector(".list-Objects");


submit.addEventListener('clicked'.map(inputText => {
    return `<li>${inputText}</li>`;
})
toDoList.innerHTML += inputText.innerHTMl.join("");

