function printNumbers(from, to){
    let counter = from;
    let timer = setInterval(() => {
        console.log(counter);
        if(counter===to){
            clearTimeout(timer);
        }
        counter++;
    }, 1000);
}


printNumbers(4,9);