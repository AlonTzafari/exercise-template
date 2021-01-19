function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out;
/**/ 
    const args = extractArgs(input);
    console.log (args);    
    if(args.vaild && Array.isArray(args.arr1) && Array.isArray(args.arr2)) {
        out = arrayUnion(args.arr1, args.arr2);
    } else {
        out = "Invalid Input. Expected:\narray, array";
    }
/**/
    output.innerText = out;
}

function arrayUnion (array1, array2) {
    const joinedArray = array1.concat(array2);
    const duplicates = findDuplicate(joinedArray);
    const newArray = duplicates;
    joinedArray.forEach(element => {
        let isDuplicate = false;
        duplicates.forEach(duplicate => {
            if(element === duplicate) {
                isDuplicate = true;
            } 
        });
        if(!isDuplicate) newArray.push(element);    
    });
    return newArray;
}

function findDuplicate (array) {
    const seen = [];
    const duplicates = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (let j = 0; j < seen.length; j++) {
            if(element === seen[j]) {
                let isInDup = false;
                for (let k = 0; k < duplicates.length; k++){
                    if(element === duplicates[k]) {
                        isInDup = true;
                        break;
                    }
                }
                if(!isInDup) duplicates.push(element);
                break;
            }
        }
        seen.push(element);
    }
    return duplicates;
}

function extractArgs (string) {
    parsedInput = parseInput(string);
    const obj = {};
    if(!parsedInput.valid) return parsedInput;
    try {
        obj.arr1 = JSON.parse(parsedInput.arr1);
        obj.arr2 = JSON.parse(parsedInput.arr2);
        obj.vaild = true;
    } catch(err) {
        obj.valid = false;
    }
    return obj;
}
//divide string to array and array
function parseInput (string) {
    const noSpacesInput = [];
    const obj = {};
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") noSpacesInput.push(string[i]);
    }
    for (let i = 0; i < noSpacesInput.length; i++) {
         if (noSpacesInput[i] === "]" && noSpacesInput[i + 1] === "," && i + 2 < noSpacesInput.length) {
            obj.arr1 = noSpacesInput.slice(0, i+1).join("");
            obj.arr2 = noSpacesInput.slice(i+2).join("");
            obj.valid = true;
            return obj;
        }
    }       
    obj.valid = false;
    return obj; 
}