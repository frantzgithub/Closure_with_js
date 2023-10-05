
/*
function greeting(greet){
    
    return function (name){
        console.log(`${greet} ${name}`)
    }
}

let greetingSon = greeting('Hi');
greetingSon('Berlin')
*/

/*
const countNumber = function() {
    let count = 0;
    
    return function (){
        count++
        console.log(`${count} number`);
    }
}

let counter = countNumber();
counter();
counter();
counter();
*/

var createFunct = function (){
    var array = []
    
    for(let i = 0; i < 3; i++){
        array.push(() => console.log(i));
    }
    return array;
}

let fan = createFunct();
fan[0]();
fan[1]();
fan[2]();