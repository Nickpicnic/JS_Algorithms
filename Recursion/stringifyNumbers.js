function stringifyNumbers (obj) {
    let newObj = Object.assign({}, obj);
    
    function help(inputObj) {
        for (var key in inputObj) {
            if (typeof inputObj[key] === 'object') {
                help(inputObj[key]);
            } else if (typeof inputObj[key]) {
                inputObj[key] = "" + inputObj[key];
            }
        }
    }
    help(newObj);
    return newObj

}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/