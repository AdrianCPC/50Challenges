const textEl = document.getElementById('text')
const text = 'We Love Programming!';
let idx = 1
//let speed =  / speedEl.value

setInterval(writeText, 100)

function writeText(){
    textEl.innerText = text.slice(0,idx);

    idx++

    if(idx > text.length) {
        idx = 1
    }

    setTimeout()
}


//speedEl.addEventListener('', (e) => speed =  / )