function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out;
/**/ 
    array.push(input);
    out = formatArray(array);
/**/
    output.innerText = out;
}

const array = [];

function formatArray (arr) {
    let string = "";
    for (let i = 0; i < arr.length; i++) {
        string += "Element " + i + " = " + arr[i] + "\n";
    }
    return string;
}