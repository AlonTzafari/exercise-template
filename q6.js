function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out;
/**/
    if(Number(input)){
    const dashNumber = input.split("");
    for (let i = 0; i < dashNumber.length - 1; i++) {
        if(Number(dashNumber[i]) % 2 === 0 && Number(dashNumber[i+1]) % 2 === 0) {
            dashNumber.splice(i+1, 0, "-");
        }
    }
    out = dashNumber.join("");
    } else {
        out = "not a number";
    }
/**/
    output.innerText = out;
}
console.log(Number("3444f"));