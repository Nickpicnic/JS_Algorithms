function collectStrings(obj){
    let arr = [];
    function help(inputObj){
        for (let key in inputObj) {
            if (typeof inputObj[key] === 'string') {
                arr.push(inputObj[key]);
            } else if(typeof inputObj[key] === 'object') {
                help(inputObj[key]);
            }
        }
    }
    help(obj);
    return arr
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])