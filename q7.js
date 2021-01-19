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
        out = insertionSort(arr);
    }else {
        out = "not an array";
    }
/**/
    output.innerText = out;
}


function insertionSort(array) {
    const sortedArray = array;
    let i = 1;
    while(i < sortedArray.length) {
        let j = i - 1;
        const item = sortedArray[i];
        while (item < sortedArray[j] && j >= 0) {
            sortedArray[j+1] = sortedArray[j];
            j--;
        }
        sortedArray[j+1] = item;
        i++; 
    }
    return sortedArray;
}