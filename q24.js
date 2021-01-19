function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out;
/**/ 
    out = removeNonValues(input);
    if(out === false) out = "invalid input";
/**/
    output.innerText = out;
}
function removeNonValues (str) {
    let noSpacesInput = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") noSpacesInput += str[i];
    }
    const strNoBrac = noSpacesInput.substring(1, noSpacesInput.length-1);
    const strArray = strNoBrac.split(",");
    removedArray = [];
    for (let i = 0; i < strArray.length; i++) {
        if(!(strArray[i] === "NaN" || strArray[i] === "''" || strArray[i] === "undefined")) {
            try{
                if (!!JSON.parse(strArray[i])) removedArray.push(JSON.parse(strArray[i]));
            } catch(e) {
                return false;
            }
        }
    }
    return removedArray;
}
const myArray = [NaN, 0, 15, false, -22, '',undefined, 47, null];
let str ="[NaN, 0, 15, false, -22, '',undefined, 47, null]";
// str = str.substring(1, str.length-1);

// const strArray = str.split(",");
// console.log(str[5].isEmpty());
console.log(removeNonValues(str));
console.log(!myArray[3]);
console.log("''" === "''");