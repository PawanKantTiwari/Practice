let obj = {
    1: 0,
    2: 1,
    3: 2,
    4: 3,
    5: 4,
    length: 5,
  };
  function f() {
    for (let i = 1; i < obj.length; i++) {
    //   obj[i] = obj[i] + 1;
    console.log(obj[i]);
    }
    // delete obj["length"];
    for (let x in obj) {
      console.log(`at index ${x} we have value ${obj[x]}`);
    }
  }
  
//   f();

function g(){

}