function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out;
/**/ 
    const args = extractArgs(input);
    console.log (args);    
    if(args.vaild && isSorted(args.arr) && typeof(args.n) === "number") {
        out = binarySearch(args.arr, args.n);
    } else {
        out = "Invalid Input. Expected:\nsortedArray, number";
    }
/**/
    output.innerText = out;
}

function isSorted (array) {
    if ( !Array.isArray(array) ) return false;
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] > array[i + 1]) return false;
    }
    return true;
}

function binarySearch (array, item) {
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    let middleIndex = Math.floor(lastIndex/2);
    while (array[middleIndex] != item && firstIndex < lastIndex) {
        if (array[middleIndex] > item) {
            lastIndex = middleIndex - 1;
        } else if (array[middleIndex] < item) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor( (lastIndex+firstIndex)/2 );
    }
    return array[middleIndex] != item ? "not in array":middleIndex;
}

function extractArgs (string) {
    parsedInput = parseInput(string);
    const obj = {};
    if(!parsedInput.valid) return parsedInput;
    try {
        obj.arr = JSON.parse(parsedInput.arr);
        obj.n = JSON.parse(parsedInput.n);
        obj.vaild = true;
    } catch(err) {
        obj.valid = false;
    }
    return obj;
}
//divide string to array and n
function parseInput (string) {
    const noSpacesInput = [];
    let commaIndex;
    const obj = {};
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") noSpacesInput.push(string[i]);
    }
    for (let i = 0; i < noSpacesInput.length; i++) {
         if (noSpacesInput[i] === "]" && noSpacesInput[i + 1] === "," && i + 2 < noSpacesInput.length) {
            obj.arr = noSpacesInput.slice(0, i+1).join("");
            obj.n = noSpacesInput.slice(i+2).join("");
            obj.valid = true;
            return obj;
        }
    }       
    obj.valid = false;
    return obj; 
}