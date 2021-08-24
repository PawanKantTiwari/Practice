function ans(x){
    return (function(y){
        return x * y;
    })
}

console.log(ans(2)(5));