function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out;
/**/
    const args = extractArgs(input);
    console.log (args);    
    if(args.argsCount === 0){
        out = "Invalid Input"; 
    } else {
        out = first(args.arr, args.n);
    }
/**/
    output.innerText = out;
}

function first(arr, n = 1) {
    if(n === null || typeof(n) !== "number") return arr[0];
    return arr.slice(0, n);
}
 
function extractArgs (string) {
    parsedInput = parseInput(string);
    const obj = {};
    if(parsedInput.argsCount === 0) return parsedInput;
    try {
        obj.arr = JSON.parse(parsedInput.arr);
        obj.n = JSON.parse(parsedInput.n);
    } catch(err) {
        obj.argsCount = 0;
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
        if (noSpacesInput[i] === "]" && (i + 1) === noSpacesInput.length) {
            obj.arr = noSpacesInput.join("");
            obj.n = null;
            obj.argsCount = 1;
            return obj;
        } else if (noSpacesInput[i] === "]" && noSpacesInput[i + 1] === "," && i + 2 < noSpacesInput.length) {
            obj.arr = noSpacesInput.slice(0, i+1).join("");
            obj.n = noSpacesInput.slice(i+2).join("");
            obj.argsCount = 2;
            return obj;
        }
    }       
    obj.argsCount = 0;
    return obj; 
}
