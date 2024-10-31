type Person = {
    firstName : string
    lastName : string
}

function getFullName(params:Person) : string {

    return `${params.firstName} ${params.lastName}`
    
}

const personData : Person = {firstName : 'Ronald', lastName : 'Leonard'}
console.log(getFullName(personData));



function wrapInArray<T> (nilai : T) :T[]{
    return [nilai]
}

const numArray = wrapInArray(4)
const strArray = wrapInArray('hello world')

console.log(numArray);
console.log(strArray);




export{}