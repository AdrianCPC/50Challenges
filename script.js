//Declaration variables from document
const starts = document.getElementById('starts');
const moon = document.getElementById('moon');
const mountains_behind = document.getElementById('mountains_behind');
const text = document.getElementById('text');
// const btn = document.getElementById('btn'); problems with this script review later
const mountains_front = document.getElementById('mountains_front');
const header = document.querySelector('header');


//Buttons const
const btn = document.querySelector('.btn');
const input = document.querySelector('.input')
const search = document.querySelector('.search');

//Even listener button
btn.addEventListener('click',()=>{
    search.classList.toggle('active');
    input.focus();
})


//Events listener
const value = 0;
window.addEventListener('scroll', function () {
    const value = window.scrollY;
    // console.log(window.scrollY);
    moon.style.top = value * 1.05 + 'px';
    // starts.style.left = value * 0.25 + 'px';    
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.2 + 'px';
    // btn.style.marginTop = value * 1.5 + 'px';
    header.style.Top = value * 0.5 + 'px';
})