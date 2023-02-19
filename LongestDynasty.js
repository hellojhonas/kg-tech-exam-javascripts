function convertYear(romanNum) {
  const romanNumRegex = /^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  if (!romanNumRegex.test(romanNum)) {
    return "Invalid";
  }
  let values = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = 0;
  for (let i = 0; i < romanNum.length; i++) {
    if (values[romanNum[i]] < values[romanNum[i + 1]]) {
      result -= values[romanNum[i]];
    } else {
      result += values[romanNum[i]];
    }
  }
  return result;
}

  
function longestDynasty(dynastyReign) {
  if (dynastyReign.length === 0) {
    return "No Data";
  }
  let longestDynasty = "";
  let maxReignLength = -Infinity;

  // Starting year is year 1000 (M in roman numerals)
  let prevEndYear = convertYear("M");

  for (let i = 0; i < dynastyReign.length; i++) {
    let dynastyName = Object.keys(dynastyReign[i])[0];
    let endYear = convertYear(dynastyReign[i][dynastyName]);
    if (!isNaN(endYear) && endYear > prevEndYear && endYear <= 1999) {
      let reignLength = endYear - prevEndYear;
      if (reignLength > maxReignLength) {
        maxReignLength = reignLength;
        longestDynasty = dynastyName;
      }
      prevEndYear = endYear;
    }
  }
  return longestDynasty;
}


// test the function with the given data
const dynastyReign = [
  { "San Dynasty" : "MXLI" },
  { "Viloria Dynasty" : "MCCCIIII" },
  { "Tan Dynasty" : "MCCCXCVIII" },
  { "Bon Dynasty" : "MCDXKV" },
  { "Maiko Dynasty" : "MDCLXIV" },
  { "Paul Dynasty" : "MCMXLIX" },
  { "Andre Dynasty" : "MMMXICX" }
];

console.log(longestDynasty(dynastyReign)); // should log "Tan Dynasty"

// This is just some test code that I fixed and I have overlooked on the requirements.
// //Modified Test Code-- Test Code on Screnshot was invalid and buggy
// var dynastyReign = [
//     { "San Dynasty" : "MXLI" },         // 41 = 1041(from the Roman Numeral)-1000(starting year)
//     { "Viloria Dynasty" : "MCCCIV" },   // 263 = 1304(from the Roman Numeral)-1041(previous dynasty)
//     { "Tan Dynasty" : "MCCCXCVIII" },   // 94 = 1398(from the Roman Numeral)-1304(previous dynasty)
//     { "Bon Dynasty" : "MCDXLV" },       // 47 = 1445(from the Roman Numeral)-1398(previous dynasty)
//     { "Maiko Dynasty" : "MDCLXIV" },    // 219 = 1664(from the Roman Numeral)-1445(previous dynasty)
//     { "Paul Dynasty" : "MCMXLIX" },     // 285 = 1949(from the Roman Numeral)-1664(previous dynasty)
//     { "Andre Dynasty" : "MMXIX" }       // 150 = 2019(from the Roman Numeral)-1949(previous dynasty)
// ];
  
// var longestDynastyName = longestDynasty(dynastyReign);
// console.log(longestDynastyName); //outputs Paul Dynasty which lasted for 285 years