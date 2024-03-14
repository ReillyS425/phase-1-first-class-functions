function myCallback() {
    console.log("This is a function used for a callback");
  }

function receivesAFunction(callback) {
   callback();
}
receivesAFunction(myCallback);

//////////////////////////////////////////////////////////////

function namedFunction() {
    console.log("hello");
}

function returnsANamedFunction() {
    return namedFunction;
}

returnsANamedFunction();

////////////////////////////////////////

function returnsAnAnonymousFunction() {
    return function() {
        console.log("I'm Anonymous!")
    }
    
}

returnsAnAnonymousFunction()();