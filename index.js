
// eval(localStorage.getItem('hidden'));
// getRoot(25, (x) => (console.log(x==5 ? "Successfully defined getRoot" : "Some Error.")) );


function getRoot(value, callbackfn){
    // DO NOT MODIFY/COPY THIS FUNCTION
    // This simulates an API call where the browser fetches the square root of a number from the server.
    // After the server returns the answer, callbackfn is called with the answer as the argument.
    executable = 3;
    if (executable == null){
        console.log("Do Menu -> Runtime -> Run all");
    }
    else{
        eval(executable); // intentionally hidden logic.
    }
}


// demonstration of pre-defined "getRoot"
getRoot(9, console.log) // this prints "3" in the console.


function getRootListInvalid(valueList, callbackfn){
    // DO NOT MODIFY/COPY THIS FUNCTION
    // Following is invalid because it did not use "getRoot" to calculate roots.
    callbackfn(valueList.map(Math.sqrt))
}

// demonstrates the correct behaviour
getRootListInvalid([1, 4, 9], console.log)


function getRootList(valueList, callbackfn){
    // takes a list of numbers, calculates root using predefined "getRoot", calls the callbackfn with the result list.
    callbackfn(valueList.map(getRoot(valueList)))
}


getRootList([9, 1, 16, 1, 25, 81], console.log) // Should print [3, 1, 4, 1, 5, 9] in the console of this browser.

/*
All code must be written inside this cell, results will appear in your browser's developer console.
In case of any issues, go menu -> Runtime -> Restart and run all
*/