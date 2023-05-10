const fetchData = async (searchTerm)=>{
    const response = await axios.get('http://www.omdbapi.com/',{
        params:{
            apikey: 'a9e9da5f',
            s: searchTerm
        }
    })
    if(response.data.Error) return []
    return response.data.Search
}

const root=document.querySelector('.autocomplete')
root.innerHTML=`
<label><b> Search for movie</label>
<input class="input"/>
<div class="dropdown">
<div class="dropdown menu">
<div class="dropdown-content results"></div>
</div>
</div>
`
const input= document.querySelector('input')
const dropDown= document.querySelector('.dropdown')
const resultsWrapper = document.querySelector('.results')

const onInput = async (e)=>{
    const movies = await fetchData(e.target.value)

    resultsWrapper.innerHTML=""
    dropDown.classList.add('is-active')
    for(let movie of movies){
        const option=document.createElement('a')
        const imgSRC = movie.Poster==='N/A'? '': movie.Poster 

        option.classList.add('dropdown-item')
        option.innerHTML=`
        <img src="${imgSRC}"/>
        ${movie.Title}`

        resultsWrapper.appendChild(option)
    }
}

input.addEventListener('input',debounce(onInput,500))

document.addEventListener('click',e=>{
    if(!root.contains(e.target)){
        dropDown.classList.remove('is-active')}
    })