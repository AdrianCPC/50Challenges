//Document fetch
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

//Navigation scroll
function fixNav() {
    // console.log(window.scrollY, nav.oofsetHeight)
    if(window.scrollY> nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
      nav.classList.remove('active')
    }
}