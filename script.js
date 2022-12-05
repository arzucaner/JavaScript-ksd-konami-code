const pressed = [];
const scretCode = 'wesbos';

window.addEventListener('keyup',(e) => {
console.log(e.key);
pressed.push(e.key);
pressed.splice(0,pressed.length-'secretCode.length');
if(pressed.join('').includes('secretCode')) {
console.log('DING DING!');
cornify_add();
}
console.log(pressed);
})
