function containsInNestedObjectDF(obj, val) {
  if (obj === val) {
      return true;
  }
  
  const keys = obj instanceof Object ? Object.keys(obj) : [];
  
  for (const key of keys) {
    
    const objval = obj[key];
    
    const isMatch = containsInNestedObjectDF(objval, val);
    
    if (isMatch) {
    	return true;
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

let hasIt = containsInNestedObjectDF(nestedObject, 40); // true
let doesntHaveIt = containsInNestedObjectDF(nestedObject, "foo"); // false

console.log(hasIt, doesntHaveIt);