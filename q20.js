function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out;
/**/
    let arr;
    try {
        arr = JSON.parse(input);
        if ( Array.isArray(arr) ) {
            out = findDuplicate(arr);
        } else {
            out = "not an array";    
        }
    } catch(e) {
        out = "not an array";
    }
/**/
    output.innerText = out;
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