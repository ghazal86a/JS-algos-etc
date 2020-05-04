function containsInNestedObjectBF(obj, val) {
	
	const queue = [obj];
  while (queue.length > 0) {
    console.log("Q: ",queue);
    
    const currentObj = queue.shift();
    console.log("curr: ",currentObj);

    if (currentObj === val) {
      return true;
    }

    const keys = currentObj instanceof Object ? Object.keys(currentObj) : [];

    for (const key of keys) {
      const objVal = currentObj[key];
      queue.push(objVal);
    }
  }
  
  return false;
}

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            something: 'foo2',
            someVal: 40
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

let hasIt = containsInNestedObjectBF(testObj, 9); // true
//let doesntHaveIt = containsInNestedObjectBF(nestedObject, "foo"); // false

console.log(hasIt);