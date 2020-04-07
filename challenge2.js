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
    let nextHigherYears = 99999, nextLowerYears = 0;
    let nextHigherYield = 0, nextLowerYield = 0;

    governmentArray.forEach(gov => {
        if (gov.term > corp.term && gov.term < nextHigherYears) {
            nextHigherYears = gov.term
            nextHigherYield = gov.yield
        }
        else if (corp.term > gov.term && nextLowerYears < gov.term) {
            nextLowerYears = gov.term
            nextLowerYield = gov.yield
        }

    });

    console.log("Corporate Bond " + corp.bond)
    console.log("Corporate Bond term " + corp.term)
    console.log("Corporate Bond yield " + corp.yield)
    console.log("nextHigherYears" + nextHigherYears)
    console.log("nextLowerYears" + nextLowerYears)
    console.log("nextHigherYield" + nextHigherYield)
    console.log("nextLowerYield" + nextLowerYield)

    let slope = (nextHigherYield - nextLowerYield) / (nextHigherYears - nextLowerYears)
    let y = slope * (corp.term - nextLowerYears) + nextLowerYield

    spread_to_curve = corp.yield - y

    outputObj["bond"] = corp.bond;
    outputObj["spread_to_curve"] = spread_to_curve;
    return outputObj;

});

console.log(bondCurveArray);
