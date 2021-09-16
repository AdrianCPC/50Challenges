//const contens and items
const contents = document.querySelectorAll('.content')
const listItems = document.querySelectorAll('nav ul li')


//Events listener
listItems.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents()
        hideAllItems()
        
//show the correct content
        item.classList.add('active')
        contents[idx].classList.add('show')

    })
})


//Functions for remove items and contens when click
function hideAllContents() {
    contents.forEach(content => content.classList.remove('show'))
}


function hideAllItems() {
    listItems.forEach(item => item.classList.remove('active'))
 
}
