// Number 1

numbers = [1,22,36,18,7,91,9,87];

function sum(array){
    let filteredArray = array.filter(a=>a>20);
    let total = 0;
    for(let i = 0; i < filteredArray.length;i++){
        total+=filteredArray[i];
    }
    return total;
}

function sum2(array){
    return array.filter(a=>a>20).reduce((a,b)=>a+b);

}

console.log(sum(numbers));
console.log(sum2(numbers));




// Number 2
let getNewArray = function(name){
    if(name.toLowerCase().includes("a")&& name.length>5){
        console.log("DDD");
        return [...name];
    }
    return null;
}

console.log(getNewArray("KABWAMA"));



// Number 3
let concat = (a,b,c) => [...a,...b,...c];
console.log(concat('hi', [1,2,3], ['Hello','world']));




