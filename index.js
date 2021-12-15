let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

function randomPosition () {

let Who     =   Math.floor(Math.random() * who.length)  + 0;
let What    =   Math.floor(Math.random() * what.length) + 0;
let When    =   Math.floor(Math.random() * when.length) + 0;


let excuse  =   who [Who]+ ' ' +what[What]+ ' ' +when[When];

            return excuse;
    
}

console.log(randomPosition());

