function sumTo(n) {
    // let total = 0;
    // for (let i = 1; i <= n; i++){
    //     total += i;
    // }
    return (n * (n + 1)) / 2;
}

function printResult(funct, n){
    console.time("a");
    funct(n);
    console.timeEnd("a");
    // console.log(`${(t2 - t1) / 1000}`);
    // console.log(a);
}

printResult(sumTo, 1000000000);