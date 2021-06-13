
function * helloGenerator(){
    yield `Hello`;
    yield * generators();
    return `Function`;
}

function * generators(){
    yield `Generator`;
}

// Hello --> Generator --> Function;

const gener = helloGenerator()
console.log(gener.next());
console.log(gener.next());
console.log(gener.next());
// console.log(gener.next());