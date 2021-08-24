function avgFun(rainFallArray){
    let sum = 0;
    for(let i = 0; i < rainFallArray.length; ++i){
        sum = sum + rainFallArray[i];
    }
    return sum / rainFallArray.length;
}

function rainDance(inputArrayOfObject){      
    let ansObject;
    let ansArray = [];
    for(let i in inputArrayOfObject){
        let nameOfCity = inputArrayOfObject[i]["name"];
        let avg = avgFun(inputArrayOfObject[i]["rainfall"]);
        ansObject = {
            "name" : nameOfCity,
            "avgRainFall" : avg,
        }
        ansArray.push(ansObject);
    }
    return ansArray;
}


let input = [
    { name: "Delhi", rainfall: [2.3, 4, 3.1, 5.5, 1.1, 1.2, 7] },
    { name: "Noida", rainfall: [6.3, 0, 0.1, 3.5, 1, 2.6, 0.7] },
    { name: "Dehradun", rainfall: [12, 5.6, 3.1, 0.55, 11, 16.2, 19] },
    { name: "Nanital", rainfall: [8, 1.4, 0.61, 15.5, 6.6, 2, 9.82] },
]



let outputArrayOfObject = rainDance(input);
console.log(outputArrayOfObject);