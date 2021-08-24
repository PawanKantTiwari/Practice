function flattenObject(inputObject, str){
    for(let key in inputObject){
      if(typeof(inputObject[key]) != "object" && typeof(inputObject[key]) != null){
        let val = inputObject[key];
        let ans = str + key;
        ansObj[ans] = val;
        return;
      }else{
        str = str + key + ".";
        flattenObject(inputObject[key], str);
      }
    }
    return ansObj;
}

let inputObject = {
    newObj: {
      obj2: {
        obj5: {
          one: 1,
        },
      },
    },
    obj3: {
      obj4: { two: 2 },
    },
  };

let ansObj = {};
ansObj = flattenObject(inputObject,"");
console.log(ansObj);

