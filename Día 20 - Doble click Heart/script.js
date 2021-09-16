const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')


//Start variables
let clickTime = 0
let timesClicked = 0

/*  Test
loveMe.addEventListener('click', (e) => {
    console.log('45')
} ) */


//Events click on loveMe
loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime()
        //console.log(clickTime);
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            //console.log(123);
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

//Making heart on card
const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

//Positions
    const x = e.clientX
    const y = e.clientY
    //console.log(x,y)


    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset
    //console.log(xInside, yInside)

    //Styles Heart
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}