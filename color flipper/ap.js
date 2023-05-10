const colors =['green','red','rgba(133,122,200)','#f15025']

const btn=document.getElementById('btn');
const color= document.querySelector('.color');
const random=()=>{
    return Math.floor(Math.random()*colors.length)
}

btn.addEventListener('click',function(){
    const rand=random()
    document.body.style.backgroundColor=colors[rand]
    color.textContent=colors[rand]
})