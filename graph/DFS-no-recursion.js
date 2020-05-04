function containsInNestedObjectDF(obj, val) {

  const stack = [];
  stack.push(obj);
  
  while (stack.length > 0) {
    //console.log("stack",stack);
    
    const currentObj = stack.shift();
    // console.log("curr: ",currentObj);
    
    
    if (currentObj === val) {
      return true;
    }

    const keys = currentObj instanceof Object ? Object.keys(currentObj) : [];

    for (const key of keys) {
        console.log("key: ",key);
        
      const objVal = currentObj[key];
      console.log("objval: ",objVal);

      stack.unshift(objVal);
     console.log("stack",stack);
      
    }
  }
  
  return false;
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing1: {
          moreStuff1: {
            someVal: 10,
            something: 'foo1'
          },
          moreStuff2: {
            someVal: 20,
            something: 'foo2'
          }
        },
        thing2: {
          moreStuff3: {
            someVal: 30,
            something: 'foo3'
          },
          moreStuff4: {
            someVal: 40,
            something: 'foo4'
          }
        }
      }
    }
  }
}

var testObj = {
    '1': {
        '2': {
            '4': 4,
            '5': 5
        },
        '3': 3
    }
}

let hasIt = containsInNestedObjectDF(nestedObject, 90); // true
//let doesntHaveIt = containsInNestedObjectDF(nestedObject, "foo"); // false

console.log(hasIt);