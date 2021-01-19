function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out;
/**/ 
    let arr; 
    try {
        arr = JSON.parse(input);
    } catch(e) {
        out = "not an array";
    }
    if ( Array.isArray(arr) ) {
        out = formatArray(arr);
    }else {
        out = "not an array";
    }
/**/
    output.innerText = out;
}

function formatArray (array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string += "row " + i + "\n";
        for (let j = 0; j < array[i].length; j++) {
            string += array[i][j] + "\n";
        }    
    }
    return string;
}
