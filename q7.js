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
        out = sortArray(arr);
    }else {
        out = "not an array";
    }
/**/
    output.innerText = out;
}

function sortArray (array) {
    const sortedArray = [];
    while(array.length > 0){
        let minItem = array[0];
        let minIndex = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < minItem) {
                minItem = array[i];
                minIndex = i;
            }
        }
        sortedArray.push(array.splice(minIndex, 1)[0]);
    }
    return sortedArray;
}

console.log(sortArray([4,5,9,2,6,1]));