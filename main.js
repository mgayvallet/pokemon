const section = document.querySelector(".all")
const section2 = document.querySelector("#description")
const draco = document.querySelector(".draco")
const back = document.querySelector("#back")

draco.addEventListener('click', ()=>{
    section.style.display = "none"
    section2.style.display = "block"
})


back.addEventListener('click', ()=>{
    section2.style.display = "none"
    section.style.display = "block"
})
