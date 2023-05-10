// const buttons = document.querySelectorAll('button')
// for(let button of buttons){
//     button.addEventListener('click' ,()=>{
//         alert("you clicked me")
//     })
//     button.addEventListener('mouseover', ()=>{
//         button.innerHTML='<b>X</b>'
//     })
//     button.addEventListener('mouseout', ()=>{
//         button.innerHTML='x'
//     })
// }
const changecolor=function(e){
    h1=document.querySelector('h1')
    h1.style.color=this.style.backgroundColor
}

const colors= ['red','blue','pink','purple','black','indigo','yellow']
const container = document.querySelector('#box')
for(let color of colors){
    const box= document.createElement('div')
    box.style.backgroundColor=color
    box.classList.add('box')
    container.appendChild(box)
    box.addEventListener('click',changecolor)
}
const boxes = document.querySelectorAll('div')
for(let box of boxes){
    box.addEventListener("mouseover" ,()=>{
        box.style.opacity='80%'
    })
    box.addEventListener('mouseout',()=>{
        box.style.opacity='100%'
    })
}

document.body.addEventListener('keypress',function(e){
    console.log(e)
})