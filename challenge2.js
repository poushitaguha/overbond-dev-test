// Output
// bond,spread_to_curve
// C1,1.22%
// C2,2.98%

// Create a Corporate Array of objects
let corporateArray = [
    {
        bond: "C1",
        term: 10.3,
        yield: 5.3
    },
    {
        bond: "C2",
        term: 15.2,
        yield: 8.3
    }
]

// Create a Government array of objects
let governmentArray = [
    {
        bond: "G1",
        term: 9.4,
        yield: 3.7
    },
    {
        bond: "G2",
        term: 12,
        yield: 4.8
    },
    {
        bond: "G3",
        term: 16.3,
        yield: 5.5
    }
]

let bondCurveArray = corporateArray.map(corp => {

    let outputObj = {};
    let nextHigherYear = 99999, nextLowerYear = 0;
    let nextHigherYield = 0, nextLowerYield = 0;

    governmentArray.forEach(gov => {
        // Check if government term is greater than corporate term and government term is lesser than next higher year
        if (gov.term > corp.term && gov.term < nextHigherYear) {
            nextHigherYear = gov.term
            nextHigherYield = gov.yield
        }
        // Check if corporate term is greater than government term and next lower year is lesser than government term
        else if (corp.term > gov.term && nextLowerYear < gov.term) {
            nextLowerYear = gov.term
            nextLowerYield = gov.yield
        }
    });

    console.log("Corporate Bond " + corp.bond)
    console.log("Corporate Bond term " + corp.term)
    console.log("Corporate Bond yield " + corp.yield)
    console.log("nextHigherYear " + nextHigherYear)
    console.log("nextLowerYear " + nextLowerYear)
    console.log("nextHigherYield " + nextHigherYield)
    console.log("nextLowerYield " + nextLowerYield)

    // Formula of slope of a line is "m = (y2 - y1) / (x2 - x1)"
    // (x1, y1) = coordinates of first point in the line
    // (x2, y2) = coordinates of second point in the line
    let slope = (nextHigherYield - nextLowerYield) / (nextHigherYear - nextLowerYear)

    // Euqation of a straight line is "y = mx + c"
    let y = slope * (corp.term - nextLowerYear) + nextLowerYield

    spread_to_curve = corp.yield - y
    // Rounding off to 2 decimal places
    spread_to_curve = spread_to_curve.toFixed(2);

    outputObj["bond"] = corp.bond;
    outputObj["spread_to_curve"] = spread_to_curve;
    return outputObj;

});

console.log(bondCurveArray);

// Output as seen
// Corporate Bond C1
// Corporate Bond term 10.3
// Corporate Bond yield 5.3
// nextHigherYear 12
// nextLowerYear 9.4
// nextHigherYield 4.8
// nextLowerYield 3.7
// Corporate Bond C2
// Corporate Bond term 15.2
// Corporate Bond yield 8.3
// nextHigherYear 16.3
// nextLowerYear 12
// nextHigherYield 5.5
// nextLowerYield 4.8
// [ { bond: 'C1', spread_to_curve: '1.22' },
//   { bond: 'C2', spread_to_curve: '2.98' } ]
