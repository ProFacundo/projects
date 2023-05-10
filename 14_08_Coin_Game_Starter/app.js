function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player')
const coin = document.querySelector('#coin')
const h1=document.querySelector('h1')
let score=0
window.addEventListener('keyup',function(e){
	if(e.key === 'ArrowDown'){
		moveVertical(avatar,50)
	}
	else if(e.key === 'ArrowUp'){
		moveVertical(avatar,-50)
	}
	else if(e.key === 'ArrowRight'){
		moveHorizontal(avatar,50)
		avatar.style.transform='scale(1,1)'
}
	else if(e.key === 'ArrowLeft'){
		moveHorizontal(avatar,-50)
		avatar.style.transform='scale(-1,1)'
	}	
	if(isTouching(avatar,coin)){
		moveCoin()
		score+=1
		h1.innerText= `SCORE:${score}`
	} 

})

const moveVertical = (element,amount)=>{
	const currentTop=extractPos(element.style.top)
	element.style.top=`${currentTop +amount}px`
}
const moveHorizontal = (element,amount)=>{
	const currentLeft=extractPos(element.style.left)
		element.style.left=`${currentLeft + amount}px`	
}
const extractPos = (pos)=> {
	if(!pos) return 100
	return parseInt(pos.slice(0,-2))
} 
if(isTouching(avatar,coin)){
	
}

const moveCoin = ()=>{
	const x=Math.floor(Math.random()*window.innerHeight)
	const y=Math.floor(Math.random()*window.innerWidth)
	coin.style.top=`${x}px`
	coin.style.left=`${y}px`
}

moveCoin()