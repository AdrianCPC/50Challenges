//Fetch class from HTML
const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

//Events listener click cups
smallCups.forEach((cup, idx) => {
    // console.log(idx)
    cup.addEventListener('click', () => highlightCups(idx))
})

//click index small cups
function highlightCups(idx) {
    // console.log(idx)
     //fill and remove the cups using if else
    if(smallCups[idx].classList.contains('full') && !smallCups [idx].nextElementSibling.classList.contains('full')) {
        idx--
    }
    
    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }

    })

    updateBigCup()
}

//Big cup 
function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length
    // console.log(fullCups)
    const totalCups = smallCups.length
    //Fill the cup
    if(fullCups === 0) {
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`

        //Show percentege
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    //condicional for remained
    if(fullCups === totalCups) {
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        listers.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
 }