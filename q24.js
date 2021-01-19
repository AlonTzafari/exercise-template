function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out;
/**/ 
    let arr;
    try {
        arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
        arrString = `[NaN, 0, 15, false, -22, '',undefined, 47, null]`;
        if(Array.isArray(arr)){
            out = "original array: " + arrString + "\n" + "new array: " + removeNonValues(arr);
        } else {
            out = "not an array";
        }
         
    } catch(e) {
        out = "not an array";
    }
/**/
    output.innerText = out;
}
console.log(removeNonValues([NaN, 0, 15, false, -22, '',undefined, 47, null]));
function removeNonValues (array) {
    for (let i = 0; i < array.length; i++) {
        if(!array[i] || array[i] === '') array.splice(i,1);
        if(typeof(array[i]) === 'undefined') array.splice(i,1);
    }
    return array;
}