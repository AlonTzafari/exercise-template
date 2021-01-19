function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out;
/**/ 
    try {
        out = Array.isArray(JSON.parse(input));
    } catch(e) {
        out = false;
    }
/**/
    output.innerText = out;
}