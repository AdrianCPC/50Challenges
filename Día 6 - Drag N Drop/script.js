const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

//EVENTOS DE LISTENER
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

//CICLOS DE ARRASTRE
empties.forEach(empty => {
     empty.addEventListener('dragover', dragOver);
     empty.addEventListener('dragenter', dragEnter);
     empty.addEventListener('dragleave', dragLeave);
     empty.addEventListener('drop', dragDrop);
 })
//FUNCIONES DE DRAG O AGARRAR
function dragOver(){
    
}

//FUNCION DRAG
// function dragStart() {
//     //this.className += 'hold';
//     // setTimeout(() => (this.className = 'invisible'), 0);
//     console.log('start');
// }

// function dragEnd() {
//     // this.className = 'fill';
//     console.log('end');
// }

// function dragOver(e) {
//     e.preventDefault();
//     // console.log('1');

// }

// function dragEnter(e) {
//     e.preventDefault();
//     this.className += 'hovered';
//     // console.log('2');

// }

// function dragLeave() {
//     this.className ='empty';
//     // console.log('3');

// }

// function dragDrop() {
//     this.className = 'empty';
//     this.append(fill);
//     // console.log('4');

// }