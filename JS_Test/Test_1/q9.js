function fun(inputStr){
    let arr = inputStr.split(" "); 
    let f = arr[0][0]; //f : first
    let s = arr[1][0]; //s : second

    let temp = s;
    s = f;
    f = temp;
    
    let ansStr = f + arr[0].slice(1) + " " + s + arr[1].slice(1);
    return ansStr;
}
let inputStr = "kite flying";

let outputStr = fun(inputStr);
console.log(outputStr);