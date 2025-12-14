const input = document.querySelector(".input");
const btn = document.querySelector("#btn");
const ul = document.querySelector("ul");

btn.addEventListener("click",()=>{
    const val = input.value;
    if(val == "") return;
    const li = document.createElement("li");
    li.innerText = val
    ul.appendChild(li);
    input.value = ""
});
