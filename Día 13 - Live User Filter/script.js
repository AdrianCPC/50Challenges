const result = document.getElementById('result')
const filter = document.getElementById('filter')
const listItems = []

getData()
//Filter with input for search people
filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const {results} = await res.json()
    //console.log(data)

    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        //Printing users on html
        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}"
        <div class="user-info">
             <h4>${user.name.first} ${user.name.last}</h4>
             <p>${user.location.city}, ${user.location.country}</p>
        </div>
 
        `

        result.appendChild(li)
    })
}
//Function for fiter people
function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}