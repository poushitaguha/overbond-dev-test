## Challenge #1

Calculate the yield spread (return) between a corporate bond and its government bond benchmark. 

A government bond is a good benchmark if it is as close as possible to the corporate bond in terms of years to maturity (term).

### Sample input

| bond   | type       | term        | yield |
|--------|------------|-------------|-------|
| C1     | corporate  | 10.3 years  | 5.30% |
| G1     | government | 9.4 years   | 3.70% |
| G2     | government | 12 years    | 4.80% |

### Sample output

```
bond,benchmark,spread_to_benchmark
C1,G1,1.60%
```

### Final Output

```
[ { bond: 'C1', benchmark: 'G1', spread_to_benchmark: '1.60' },
  { bond: 'C2', benchmark: 'G2', spread_to_benchmark: '1.50' },
  { bond: 'C3', benchmark: 'G3', spread_to_benchmark: '2.00' },
  { bond: 'C4', benchmark: 'G3', spread_to_benchmark: '2.90' },
  { bond: 'C5', benchmark: 'G4', spread_to_benchmark: '0.90' },
  { bond: 'C6', benchmark: 'G5', spread_to_benchmark: '1.80' },
  { bond: 'C7', benchmark: 'G6', spread_to_benchmark: '2.50' } ]

```

## Challenge #2

The next challenge is calculate the spread to the government bond curve.

Since the corporate bond term is not exactly the same as its benchmark term, we need to use linear interpolation to dermine the spread to the curve.

### Sample input

| bond   | type       | term        | yield |
|--------|------------|-------------|-------|
| C1     | corporate  | 10.3 years  | 5.30% |
| C2     | corporate  | 15.2 years  | 8.30% |
| G1     | government | 9.4 years   | 3.70% |
| G2     | government | 12 years    | 4.80% |
| G3     | government | 16.3 years  | 5.50% |

### Sample output

```
bond,spread_to_curve
C1,1.22%
C2,2.98%
```

Image below (attached) will help you visualize how to calculate spread to curve. The formula is:

```
C1.spread_to_curve = A - B
C2.spread_to_curve = X - Y
```

Where `A = C1.yield = 5.30%` and `X = C2.yield = 8.30%`. Values of B and Y require linear interpolation to determine. We leave this as an exercise to the challenger.

You can assume that the list of bonds will always contain at least one government bond with a term less all the corporate bonds. As well, it will contain at least one government bond with a term greater than all the corporate bonds. So that you will always be able to calculate `spread_to_curve` for each corporate bond.

### Final Output

```
Corporate Bond C1
Corporate Bond term 10.3
Corporate Bond yield 5.3
nextHigherYear 12
nextLowerYear 9.4
nextHigherYield 4.8
nextLowerYield 3.7
Corporate Bond C2
Corporate Bond term 15.2
Corporate Bond yield 8.3
nextHigherYear 16.3
nextLowerYear 12
nextHigherYield 5.5
nextLowerYield 4.8
[ { bond: 'C1', spread_to_curve: '1.22' },
  { bond: 'C2', spread_to_curve: '2.98' } ]
  
```
