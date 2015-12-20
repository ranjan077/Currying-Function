function add(a,b,c) {
  return a + b +c ;
}

var curryFnMaker = function(fn) {
  if(typeof fn!=='function'){
        throw Error('No function provided');
  }
  return function curry() {
   
    var args = Array.prototype.slice.call(arguments); // varibale arguments: points to arrguments passed to curry function
    
    if(args.length < fn.length)
    { 
      return function() {
        return curry.apply(null, args.concat(Array.prototype.slice.call(arguments))); // varibale arguments: points to arrguments passed to this anonymus function
      };
    }
    return fn.apply(null, args);
  }
}

var add = curryFnMaker(add); // Convert add funtion to curried add function;

/*add(1)(2)(3); // should return 6
add(1,2)(3); // should return 6
add(1)(2,3); // should return 6
add(1,2,3); // should return 6*/