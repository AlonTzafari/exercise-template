function run() {
    const input = document.getElementById("input").value;
    const input2 = document.getElementById("input2").value;
    const output = document.getElementById("output");
    let out;
/**/ 
    let obj;
    try {
        obj = JSON.parse(input);
        out = propertyValue(obj, input2);
    } catch(e){
        out = "invalid input. Enter array of objects in JSON and property";
    }
    
/**/
    output.innerText = out;
}
let jsonString = JSON.stringify([
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ]);
let obj = JSON.parse(jsonString);
console.log(jsonString);
console.log(propertyValue(obj, "author"));
function propertyValue (array, key) {
    const values = [];
    for (let i = 0; i < array.length; i++) {
        const val = array[i][key]?array[i][key] :null;
        values.push(val); 
    }
    return values;
}