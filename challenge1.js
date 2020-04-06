// Output
// bond,benchmark,spread_to_benchmark
// C1,G1,1.60%

// Create a Corporate Array of objects
let corporateArray = [
    {
        bond: C1,
        term: 1.3,
        yield: 3.3
    },
    {
        bond: C2,
        term: 2,
        yield: 3.8
    },
    {
        bond: C3,
        term: 5.2,
        yield: 5.3
    },
    {
        bond: C4,
        term: 9,
        yield: 6.2
    },
    {
        bond: C5,
        term: 10.1,
        yield: 6.4
    },
    {
        bond: C6,
        term: 16,
        yield: 9.3
    },
    {
        bond: C7,
        term: 22.9,
        yield: 12.3
    }
]

// Create a Government array of objects
let governmentArray = [
    {
        bond: G1,
        term: 0.9,
        yield: 1.7
    },
    {
        bond: G2,
        term: 2.3,
        yield: 2.3
    },
    {
        bond: G3,
        term: 7.8,
        yield: 3.3
    },
    {
        bond: G4,
        term: 12,
        yield: 5.5
    },
    {
        bond: G5,
        term: 15.1,
        yield: 7.5
    },
    {
        bond: G6,
        term: 24.2,
        yield: 9.8
    }
]

let calculateYieldSpread = corporateArray.map(obj => {

})