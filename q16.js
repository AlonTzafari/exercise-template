function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out;
/**/ 
    const years = input.split("-");
    if(years.length !== 2) {
        out = "Invalid Input. Expected:\n number-number";
    } else {
        out = findLeapYears( Number(years[0]),Number(years[1]) );
    }
/**/
    output.innerText = out;
}

function findLeapYears (from, to) {
    const leapYears = []; 
    for (let year = Math.min(from, to); year <= Math.max(from, to); year++) {
        if (year % 4 === 0) {
            if ( year % 100 !== 0 ||
                (year % 100 === 0 && year % 400 === 0) ) leapYears.push(year);
        }
    }
    return leapYears;
}