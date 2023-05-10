const button = document.querySelector('button')
button.addEventListener('mouseover',()=>{
    const height = Math.floor(Math.random() * window.innerHeight)
    const width = Math.floor(Math.random() * window.innerWidth )
    button.style.left= `${width}px`
    button.style.top=`${height}px`

})

button.addEventListener('click',function(){
    button.innerText="you got me"
    document.body.style.backgroundColor='green'
})