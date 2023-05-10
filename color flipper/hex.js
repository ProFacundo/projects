const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

const btn=document.getElementById('btn');
const color= document.querySelector('.color');
const random=()=>{
   return Math.floor(Math.random()*hex.length)
}

btn.addEventListener('click',function(){
    let hexcolor="#"
    for(let x=0;x<6;x++){
        let rand=random()
        hexcolor+=hex[rand]
    document.body.style.backgroundColor=hexcolor
}
    color.textContent=hexcolor
})