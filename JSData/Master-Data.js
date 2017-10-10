'use strict';
//(M & F).1.1 First test of user input using ageRange[i] (4 indicies)

var ageRange = ["17-20yrs", "21-27yrs", "28-39yrs", "40+yrs"];

//(M & F).1.2 First test of user input using heightRange[j] (23 indicies)

var heightRange = ["58", "59", "60", "61", "62", "63", "64", "65", 66, 67, "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80"];

//(F).1.3 First test of user input using ageRange[i]heightRange[j] = femaleWeightByAgeAndHeight[k] (4 indicies)


var femaleWeightByAgeAndHeight =

[

  ["119", "121", "122", "124"],

  ["124", "125", "126", "128"],

  ["128", "129", "131", "133"],

   ["132", "134", "135", "137"],

   ["136", "138", "140", "142"],

   ["141", "143", "144", "146"],

   ["145", "147", "149", "151"],

   ["150", "152", "154", "156"],

   ["155", "156", "158", "161"],

   ["159", "161", "163", "166"],

   ["164", "166", "168", "171"],

   ["169", "171", "173", "176"],

   ["174", "176", "178", "181"],

   ["179", "181", "183", "186"],

   ["184", "186", "188", "191"],

   ["189", "191", "194", "197"],

   ["194", "197", "199", "202"],

   ["200", "202", "204", "208"],

   ["205", "207", "210", "213"],

   ["210", "213", "215", "219"],

   ["216", "218", "221", "225"],

   ["221", "224", "227", "230"],

   ["227", "230", "233", "236"]

 ];

//(M).1.3 First test of user input using ageRange[i]heightRange[j] = maleWeightByAgeAndHeight[k] (23 arrays of 4 indicies each)

var maleWeightByAgeAndHeight =

[

  ["0", "0", "0", "0"],

  ["0", "0", "0", "0"],

  ["132", "136", "139", "141"],

  ["136", "140", "144", "146"],

  ["141", "144", "148", "150"],

  ["145", "149", "153", "155"],

  ["150", "154", "158", "160"],

  ["155", "159", "163", "165"],

  [160, 163, 168, 170],

  [165, 169, 174, 176],

  ["170", "174", "179", "181"],

  ["175", "179", "184", "188"],

  ["180", "185", "189", "192"],

  ["185", "189", "194", "197"],

  ["190", "195", "200", "203"],

  ["195", "200", "205", "208"],

  ["201", "206", "211", "214"],

  ["206", "212", "217", "220"],

  ["212", "217", "223", "226"],

  ["218", "223", "229", "232"],

  ["223", "229", "235", "238"],

  ["229", "235", "241", "244"],

  ["234", "240", "247", "250"]

];

//(M).2.1 Second test of user input using maleHeightRange[i] (40 indicies)

var maleHeightRange = ["60", "60.5", "61", "61.5", "62", "62.5", "63", "63.5", "64", "64.5", "65", "65.5", "66", "66.5", "67", "67.5", "68", "68.5", "69", "69.5", "70", "70.5", "71", "71.5", "72", "72.5", "73", "73.5", "74", "74.5", "75", "75.5", "76", "76.5", "77", "77.5", "78", "78.5", "79", "79.5"];


//(M).2.2 Second test of user input using maleCircumferenceRange[j] (44 indicies)

var maleCircumferenceRange = ["13.5", "14", "14.5", "15", "15.5", "16", "16.5", "17", "17.5", "18", "18.5", "19", "19.5", "20", "20.5", "21", "21.5", "22", "22.5", "23", "23.5", "24", "24.5", "25", "25.5", "26", "26.5", "27", "27.5", "28", "28.5", "29", "29.5", "30", "30.5", "31", "31.5", "32", "32.5", "33", "33.5", "34", "34.5", "35"];

//(M).2.3 Second test of user input using maleHeightRange[i]maleCircumferenceRange[j] = maleBodyFat[k]  (44 arrays of 40 indicies each)

var maleBodyFat =

[

  ["9", "9", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["11", "11", "10", "10", "10", "10", "9", "9", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["12", "12", "12", "11", "11", "11", "11", "10", "10", "10", "10", "9", "9", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["13", "13", "13", "13", "12", "12", "12", "12", "11", "11", "11", "11", "10", "10", "10", "10", "10", "9", "9", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["15", "14", "14", "14", "14", "13", "13", "13", "13", "12", "12", "12", "12", "11", "11", "11", "11", "11", "10", "10", "10", "10", "9", "9", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["16", "16", "15", "15", "15", "15", "14", "14", "14", "14", "13", "13", "13", "13", "12", "12", "12", "12", "12", "11", "11", "11", "11", "10", "10", "10", "10", "10", "9", "9", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["17", "17", "16", "16", "16", "16", "15", "15", "15", "15", "14", "14", "14", "14", "14", "13", "13", "13", "13", "12", "12", "12", "12", "12", "11", "11", "11", "11", "11", "10", "10", "10", "10", "10", "9", "9", "0", "0", "0", "0"],

   ["18", "18", "18", "17", "17", "17", "17", "16", "16", "16", "16", "15", "15", "15", "15", "14", "14", "14", "14", "14", "13", "13", "13", "13", "13", "12", "12", "12", "12", "11", "11", "11", "11", "11", "10", "10", "10", "10", "10", "9"],

   ["19", "19", "19", "18", "18", "18", "18", "17", "17", "17", "17", "16", "16", "16", "16", "16", "15", "15", "15", "15", "14", "14", "14", "14", "14", "13", "13", "13", "13", "13", "12", "12", "12", "12", "12", "11", "11", "11", "11", "11"],

   ["20", "20", "20", "19", "19", "19", "19", "18", "18", "18", "18", "18", "17", "17", "17", "17", "16", "16", "16", "16", "15", "15", "15", "15", "15", "14", "14", "14", "14", "14", "13", "13", "13", "13", "13", "12", "12", "12", "12", "12"],

   ["21", "21", "21", "20", "20", "20", "20", "19", "19", "19", "19", "19", "18", "18", "18", "18", "17", "17", "17", "17", "17", "16", "16", "16", "16", "15", "15", "15", "15", "15", "14", "14", "14", "14", "14", "13", "13", "13", "13", "13"],

   ["22", "22", "22", "21", "21", "21", "21", "20", "20", "20", "20", "20", "19", "19", "19", "19", "18", "18", "18", "18", "18", "17", "17", "17", "17", "16", "16", "16", "16", "16", "15", "15", "15", "15", "15", "14", "14", "14", "14", "14"],

   ["23", "23", "23", "22", "22", "22", "22", "21", "21", "21", "21", "21", "20", "20", "20", "20", "19", "19", "19", "19", "18", "18", "18", "18", "18", "17", "17", "17", "17", "17", "16", "16", "16", "16", "16", "15", "15", "15", "15", "15"],

   ["24", "24", "24", "23", "23", "23", "23", "22", "22", "22", "22", "21", "21", "21", "21", "21", "20", "20", "20", "20", "19", "19", "19", "19", "19", "18", "18", "18", "18", "18", "17", "17", "17", "17", "17", "16", "16", "16", "16", "16"],

   ["25", "25", "25", "24", "24", "24", "24", "23", "23", "23", "23", "22", "22", "22", "22", "21", "21", "21", "21", "21", "20", "20", "20", "20", "19", "19", "19", "19", "19", "18", "18", "18", "18", "18", "17", "17", "17", "17", "17", "16"],

   ["26", "26", "25", "25", "25", "25", "24", "24", "24", "24", "24", "23", "23", "23", "23", "22", "22", "22", "22", "21", "21", "21", "21", "21", "20", "20", "20", "20", "20", "19", "19", "19", "19", "19", "18", "18", "18", "18", "18", "17"],

   ["27", "27", "26", "26", "26", "26", "25", "25", "25", "25", "24", "24", "24", "24", "23", "23", "23", "23", "23", "22", "22", "22", "22", "21", "21", "21", "21", "21", "20", "20", "20", "20", "20", "19", "19", "19", "19", "19", "18", "18"],

   ["28", "27", "27", "27", "27", "26", "26", "26", "26", "25", "25", "25", "25", "25", "24", "24", "24", "24", "23", "23", "23", "23", "23", "22", "22", "22", "22", "22", "21", "21", "21", "21", "20", "20", "20", "20", "20", "20", "19", "19"],

   ["29", "28", "28", "28", "28", "27", "27", "27", "27", "26", "26", "26", "26", "25", "25", "25", "25", "24", "24", "24", "24", "24", "23", "23", "23", "23", "23", "22", "22", "22", "22", "22", "21", "21", "21", "21", "21", "20", "20", "20"],

   ["29", "29", "29", "29", "28", "28", "28", "28", "27", "27", "27", "27", "26", "26", "26", "26", "26", "25", "25", "25", "25", "24", "24", "24", "24", "24", "23", "23", "23", "23", "23", "22", "22", "22", "22", "22", "21", "21", "21", "21"],

   ["30", "30", "30", "29", "29", "29", "29", "28", "28", "28", "28", "27", "27", "27", "27", "27", "26", "26", "26", "26", "25", "25", "25", "25", "25", "24", "24", "24", "24", "24", "23", "23", "23", "23", "23", "22", "22", "22", "22", "22"],

   ["31", "31", "30", "30", "30", "30", "29", "29", "29", "292", "28", "28", "28", "28", "28", "27", "27", "27", "27", "26", "26", "26", "26", "26", "25", "25", "25", "25", "25", "24", "24", "24", "24", "24", "23", "23", "23", "23", "23", "22"],

   ["32", "31", "31", "31", "31", "30", "30", "30", "30", "29", "29", "29", "29", "29", "28", "28", "28", "28", "27", "27", "27", "27", "27", "26", "26", "26", "26", "26", "25", "25", "25", "25", "25", "24", "24", "24", "24", "24", "23", "23"],

   ["32", "32", "32", "32", "31", "31", "31", "31", "30", "30", "30", "30", "30", "29", "29", "29", "29", "28", "28", "28", "28", "28", "27", "27", "27", "27", "26", "26", "26", "26", "26", "25", "25", "25", "25", "25", "24", "24", "24", "24"],

   ["33", "33", "33", "32", "32", "32", "32", "31", "31", "31", "31", "31", "30", "30", "30", "30", "29", "29", "29", "29", "29", "28", "28", "28", "28", "27", "27", "27", "27", "27", "26", "26", "26", "26", "26", "25", "25", "25", "25", "25"],

   ["34", "34", "33", "33", "33", "33", "32", "32", "32", "32", "31", "31", "31", "31", "31", "30", "30", "30", "30", "29", "29", "29", "29", "29", "28", "28", "28", "28", "28", "27", "27", "27", "27", "27", "26", "26", "26", "26", "26", "25"],

   ["35", "34", "34", "34", "34", "33", "33", "33", "33", "32", "32", "32", "32", "32", "31", "31", "31", "31", "30", "30", "30", "30", "30", "29", "29", "29", "29", "28", "28", "28", "28", "28", "27", "27", "27", "27", "27", "26", "26", "26"],

   ["35", "35", "35", "35", "34", "34", "34", "34", "33", "33", "33", "33", "32", "32", "32", "32", "32", "31", "31", "31", "31", "30", "30", "30", "30", "30", "29", "29", "29", "29", "29", "28", "28", "28", "28", "28", "27", "27", "27", "27"],

   ["36", "36", "36", "35", "35", "35", "35", "34", "34", "34", "34", "33", "33", "33", "33", "32", "32", "32", "32", "32", "31", "31", "31", "31", "30", "30", "30", "30", "30", "29", "29", "29", "29", "29", "28", "28", "28", "28", "28", "27"],

   ["37", "36", "36", "36", "36", "35", "35", "35", "35", "34", "34", "34", "34", "34", "33", "33", "33", "33", "32", "32", "32", "32", "32", "31", "31", "31", "31", "31", "30", "30", "30", "30", "29", "29", "29", "29", "29", "29", "28", "28"],

   ["0", "0", "37", "37", "36", "36", "36", "36", "35", "35", "35", "35", "34", "34", "34", "34", "34", "33", "33", "33", "33", "32", "32", "32", "32", "32", "31", "31", "31", "31", "31", "30", "30", "30", "30", "30", "29", "29", "29", "29"],

   ["0", "0", "0", "0", "37", "37", "37", "36", "36", "36", "36", "35", "35", "35", "35", "34", "34", "34", "34", "34", "33", "33", "33", "33", "32", "32", "32", "32", "32", "31", "31", "31", "31", "31", "30", "30", "30", "30", "30", "29"],

   ["0", "0", "0", "0", "0", "0", "0", "37", "37", "37", "36", "36", "36", "36", "35", "35", "35", "35", "34", "34", "34", "34", "34", "33", "33", "33", "33", "32", "32", "32", "32", "32", "31", "31", "31", "31", "31", "30", "30", "30"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "37", "37", "36", "36", "36", "36", "35", "35", "35", "35", "35", "34", "34", "34", "34", "34", "33", "33", "33", "33", "32", "32", "32", "32", "32", "31", "31", "31", "31", "31"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "37", "37", "37", "36", "36", "36", "36", "35", "35", "35", "35", "35", "34", "34", "34", "34", "34", "33", "33", "33", "33", "32", "32", "32", "32", "32", "32", "31"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "37", "37", "36", "36", "36", "36", "36", "35", "35", "35", "35", "35", "34", "34", "34", "34", "33", "33", "33", "33", "33", "33", "32", "32", "32"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "37", "37", "36", "36", "36", "36", "36", "35", "35", "35", "35", "35", "34", "34", "34", "34", "33", "33", "33", "33", "33", "33"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "37", "37", "37", "36", "36", "36", "36", "36", "35", "35", "35", "35", "34", "34", "34", "34", "34", "33", "33", "33"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "37", "37", "36", "36", "36", "36", "36", "35", "35", "35", "35", "35", "34", "34", "34", "34", "34"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "37", "37", "36", "36", "36", "36", "36", "35", "35", "35", "35", "35", "34", "34"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "37", "37", "36", "36", "36", "36", "36", "35", "35", "35", "35"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "37", "37", "37", "36", "36", "36", "36", "36", "35"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "37", "37", "37", "36", "36", "36"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "37", "37", "36"]

 ];

// //(F).2.1 Second test of user input using femaleHeightRange[i] (47 indicies)

var femaleHeightRange = ["58", "58.5", "59", "59.5", "60", "60.5", "61", "61.5", "62", "62.5", "63", "63.5", "64", "64.5", "65", "65.5", "66", "66.5", "67", "67.5", "68", "68.5", "69", "69.5", "70", "70.5", "71", "71.5", "72", "72.5", "73", "73.5", "74", "74.5", "75", "75.5", "76", "76.5", "77", "77.5", "78", "78.5", "79", "79.5", "80", "80.5", "81"];

 //(F).2.2 Second test of user input using femaleCircumferenceRange[j] (69 indicies)

 var femaleCircumferenceRange = ["45", "45.5", "46", "46.5", "47", "47.5", "48", "48.5", "49", "49.5", "50", "50.5", "51", "51.5", "52", "52.5", "53", "53.5", "54", "54.5", "55", "55.5", "56", "56.5", "57", "57.5", "58", "58.5", "59", "59.5", "60", "60.5", "61", "61.5", "62", "62.5", "63", "63.5", "64", "64.5", "65", "65.5", "66", "66.5", "67", "67.5", "68", "68.5", "69", "69.5", "70", "70.5", "71", "71.5", "72", "72.5", "73", "73.5", "74", "74.5", "75", "75.5", "76", "76.5", "77", "77.5", "78", "78.5", "79"];


// //(F).2.3 Second test of user input using femaleHeightRange[i]femaleCircumferenceRange[j] = femaleBodyFat[k]  (69 arrays with 38 indicies each)

var femaleBodyFatTable =

[

   ["19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["20", "20", "19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["21", "20", "20", "20", "19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["21", "21", "21", "20", "20", "20", "19", "19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["22", "22", "22", "21", "21", "20", "20", "20", "19", "19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["23", "23", "22", "22", "22", "21", "21", "21", "20", "20", "19", "19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["24", "23", "23", "23", "22", "22", "22", "21", "21", "21", "20", "20", "20", "19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["24", "24", "24", "23", "23", "23", "22", "22", "22", "21", "21", "21", "20", "20", "20", "19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["25", "25", "24", "24", "24", "23", "23", "23", "22", "22", "22", "21", "21", "21", "20", "20", "20", "19", "19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["26", "26", "25", "25", "24", "24", "24", "23", "23", "23", "22", "22", "22", "21", "21", "21", "20", "20", "20", "19", "19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["27", "26", "26", "26", "25", "25", "24", "24", "24", "23", "23", "23", "22", "22", "22", "21", "21", "21", "21", "20", "20", "20", "19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["27", "27", "27", "26", "26", "26", "25", "25", "25", "24", "24", "23", "23", "23", "23", "22", "22", "22", "21", "21", "21", "20", "20", "20", "19", "19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["28", "28", "27", "27", "27", "26", "26", "26", "25", "25", "25", "24", "24", "24", "23", "23", "23", "22", "22", "22", "21", "21", "21", "20", "20", "20", "19", "19", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "25", "25", "25", "24", "24", "24", "23", "23", "23", "22", "22", "22", "21", "21", "21", "20", "20", "20", "20", "19", "0", "0", "0", "0", "0", "0", "0", "0"],

   ["29", "29", "29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "25", "25", "25", "24", "24", "24", "23", "23", "23", "22", "22", "22", "21", "21", "21", "21", "20", "20", "20", "19", "19", "0", "0", "0", "0", "0"],

   ["30", "30", "29", "29", "29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "25", "25", "25", "24", "24", "24", "23", "23", "23", "22", "22", "22", "22", "21", "21", "21", "20", "20", "20", "19", "19", "0", "0", "0"],

   ["31", "30", "30", "30", "29", "29", "29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "25", "25", "25", "24", "24", "24", "23", "23", "23", "22", "22", "22", "22", "21", "21", "21", "20", "20", "20", "20", "19", "19"],

   ["31", "31", "31", "30", "30", "30", "29", "29", "29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "25", "25", "25", "24", "24", "24", "23", "23", "23", "23", "22", "22", "22", "21", "21", "21", "21", "20", "20", "20"],

   ["32", "32", "31", "31", "31", "30", "30", "30", "29", "29", "29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "25", "25", "25", "24", "24", "24", "24", "23", "23", "23", "22", "22", "22", "21", "21", "21", "21", "20"],

   ["33", "32", "32", "32", "31", "31", "31", "30", "31", "30", "29", "29", "29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "25", "25", "25", "24", "24", "24", "24", "23", "23", "23", "22", "22", "22", "22", "21", "21"],

   ["33", "33", "33", "32", "32", "32", "31", "31", "31", "30", "31", "30", "29", "29", "29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "25", "25", "25", "25", "24", "24", "24", "23", "23", "23", "22", "22", "22", "22"],

   ["34", "34", "33", "33", "33", "32", "32", "32", "31", "31", "31", "30", "30", "30", "29", "29", "29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "25", "25", "25", "25", "24", "24", "24", "23", "23", "23", "23", "22"],

   ["35", "34", "34", "34", "33", "33", "33", "32", "32", "31", "31", "31", "30", "30", "30", "30", "29", "29", "29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "25", "25", "25", "25", "24", "24", "24", "23", "23", "23"],

   ["35", "35", "35", "34", "34", "34", "33", "33", "32", "32", "32", "31", "31", "31", "30", "30", "30", "29", "29", "29", "29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "26", "25", "25", "25", "24", "24", "24", "24"],

   ["36", "36", "35", "35", "34", "34", "34", "33", "33", "33", "32", "32", "32", "31", "31", "31", "30", "30", "30", "29", "29", "29", "29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "26", "25", "25", "25", "24", "24"],

   ["37", "36", "36", "35", "35", "35", "34", "34", "34", "33", "33", "33", "32", "32", "32", "31", "31", "31", "30", "30", "30", "29", "29", "29", "29", "28", "28", "28", "27", "27", "27", "26", "26", "26", "26", "25", "25", "25"],

   ["37", "37", "36", "36", "36", "35", "35", "35", "34", "34", "34", "33", "33", "33", "32", "32", "32", "31", "31", "31", "30", "30", "30", "29", "29", "29", "29", "28", "28", "28", "27", "27", "27", "27", "26", "26", "26", "25"],

   ["38", "37", "37", "37", "36", "36", "36", "35", "35", "35", "34", "34", "34", "33", "33", "33", "32", "32", "32", "31", "31", "31", "30", "30", "30", "29", "29", "29", "29", "28", "28", "28", "27", "27", "27", "27", "26", "26"],

   ["38", "38", "38", "37", "37", "37", "36", "36", "36", "35", "35", "35", "34", "34", "34", "33", "33", "33", "32", "32", "32", "31", "31", "31", "30", "30", "30", "29", "29", "29", "29", "28", "28", "28", "27", "27", "27", "27"],

   ["39", "39", "38", "38", "38", "37", "37", "36", "36", "36", "35", "35", "35", "34", "34", "34", "33", "33", "33", "33", "32", "32", "32", "31", "31", "31", "30", "30", "30", "29", "29", "29", "29", "28", "28", "28", "27", "27"],

   ["40", "39", "39", "38", "38", "38", "37", "37", "37", "36", "36", "36", "35", "35", "35", "34", "34", "34", "33", "33", "33", "32", "32", "32", "32", "31", "31", "31", "30", "30", "30", "30", "29", "29", "29", "28", "28", "28"],

   ["40", "40", "39", "39", "39", "38", "38", "38", "37", "37", "37", "36", "36", "36", "35", "35", "35", "34", "34", "34", "33", "33", "33", "32", "32", "32", "32", "31", "31", "31", "30", "30", "30", "30", "29", "29", "29", "28"],

   ["41", "40", "40", "40", "39", "39", "39", "38", "38", "38", "37", "37", "37", "36", "36", "36", "35", "35", "35", "34", "34", "34", "33", "33", "33", "32", "32", "32", "32", "31", "31", "31", "30", "30", "30", "30", "29", "29"],

   ["41", "41", "41", "40", "40", "40", "39", "39", "38", "38", "38", "37", "37", "37", "36", "36", "36", "36", "35", "35", "35", "34", "34", "34", "33", "33", "33", "32", "32", "32", "32", "31", "31", "31", "30", "30", "30", "30"],

   ["42", "42", "41", "41", "40", "40", "40", "39", "39", "39", "38", "38", "38", "37", "37", "37", "36", "36", "36", "35", "35", "35", "35", "34", "34", "34", "33", "33", "33", "32", "32", "32", "32", "31", "31", "31", "30", "30"],

   ["42", "42", "42", "41", "41", "41", "40", "40", "40", "39", "39", "39", "38", "38", "38", "37", "37", "37", "36", "36", "36", "35", "35", "35", "34", "34", "34", "34", "33", "33", "33", "32", "32", "32", "32", "31", "31", "31"],

   ["43", "43", "42", "42", "42", "41", "41", "41", "40", "40", "40", "39", "39", "39", "38", "38", "38", "37", "37", "37", "36", "36", "36", "35", "35", "35", "34", "34", "34", "34", "33", "33", "33", "32", "32", "32", "32", "31"],

   ["44", "43", "43", "42", "42", "42", "41", "41", "41", "40", "40", "40", "39", "39", "39", "38", "38", "38", "37", "37", "37", "37", "36", "36", "36", "35", "35", "35", "34", "34", "34", "34", "33", "33", "33", "32", "32", "32"],

   ["44", "44", "43", "43", "43", "42", "42", "42", "41", "41", "41", "40", "40", "40", "39", "39", "39", "38", "38", "38", "37", "37", "37", "36", "36", "36", "36", "35", "35", "35", "34", "34", "34", "34", "33", "33", "33", "32"],

   ["45", "44", "44", "44", "43", "43", "43", "42", "42", "42", "41", "41", "41", "40", "40", "40", "39", "39", "39", "38", "38", "38", "37", "37", "37", "36", "36", "36", "36", "35", "35", "35", "34", "34", "34", "33", "33", "33"],

   ["45", "45", "45", "44", "44", "43", "43", "43", "42", "42", "42", "41", "41", "41", "40", "40", "40", "39", "39", "39", "38", "38", "38", "38", "37", "37", "37", "36", "36", "36", "35", "35", "35", "35", "34", "34", "34", "33"],

   ["46", "45", "45", "45", "44", "44", "44", "43", "43", "43", "42", "42", "42", "41", "41", "41", "40", "40", "40", "39", "39", "39", "38", "38", "38", "37", "37", "37", "37", "36", "36", "36", "35", "35", "35", "35", "34", "34"],

   ["46", "46", "46", "45", "45", "45", "44", "44", "43", "43", "43", "42", "42", "42", "41", "41", "41", "41", "40", "40", "40", "39", "39", "39", "38", "38", "38", "37", "37", "37", "37", "36", "36", "36", "35", "35", "35", "35"],

   ["47", "46", "46", "46", "45", "45", "45", "44", "44", "44", "43", "43", "43", "42", "42", "42", "41", "41", "41", "40", "40", "40", "39", "39", "39", "39", "38", "38", "38", "37", "37", "37", "37", "36", "36", "36", "35", "35"],

   ["0", "0", "47", "46", "46", "46", "45", "45", "45", "44", "44", "44", "43", "43", "43", "42", "42", "42", "41", "41", "41", "40", "40", "40", "39", "39", "39", "39", "38", "38", "38", "37", "37", "37", "36", "36", "36", "36"],

   ["0", "0", "0", "47", "46", "46", "46", "45", "45", "45", "44", "44", "44", "43", "43", "43", "42", "42", "42", "41", "41", "41", "41", "40", "40", "40", "39", "39", "39", "38", "38", "38", "38", "37", "37", "37", "36", "36"],

   ["0", "0", "0", "0", "47", "47", "46", "46", "46", "45", "45", "45", "44", "44", "44", "43", "43", "43", "42", "42", "42", "41", "41", "41", "40", "40", "40", "40", "39", "39", "39", "38", "38", "38", "38", "37", "37", "37"],

   ["0", "0", "0", "0", "0", "0", "47", "46", "46", "46", "45", "45", "45", "44", "44", "44", "43", "43", "43", "43", "42", "42", "42", "41", "41", "41", "40", "40", "40", "39", "39", "39", "39", "38", "38", "38", "37", "37"],

   ["0", "0", "0", "0", "0", "0", "0", "47", "47", "46", "46", "46", "45", "45", "45", "44", "44", "44", "43", "43", "43", "42", "42", "42", "41", "41", "41", "41", "40", "40", "40", "39", "39", "39", "39", "38", "38", "38"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "46", "46", "46", "45", "45", "45", "44", "44", "44", "44", "43", "43", "43", "42", "42", "42", "41", "41", "41", "41", "40", "40", "40", "39", "39", "39", "39", "38"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "47", "46", "46", "46", "45", "45", "45", "44", "44", "44", "43", "43", "43", "43", "42", "42", "42", "41", "41", "41", "40", "40", "40", "40", "39", "39", "39"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "46", "46", "46", "46", "45", "45", "45", "44", "44", "44", "43", "43", "43", "42", "42", "42", "42", "41", "41", "41", "40", "40", "40", "40", "39"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "47", "46", "46", "46", "45", "45", "45", "44", "44", "44", "44", "43", "43", "43", "42", "42", "42", "41", "41", "41", "41", "40", "40", "40"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "47", "46", "46", "46", "45", "45", "45", "44", "44", "44", "43", "43", "43", "43", "42", "42", "42", "41", "41", "41", "41", "40"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "47", "46", "46", "46", "45", "45", "45", "45", "44", "44", "44", "43", "43", "43", "42", "42", "42", "42", "41", "41", "41"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "47", "46", "46", "46", "45", "45", "45", "44", "44", "44", "44", "43", "43", "43", "42", "42", "42", "42", "41"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "46", "46", "46", "45", "45", "45", "45", "44", "44", "44", "43", "43", "43", "43", "42", "42", "42"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "47", "46", "46", "46", "45", "45", "45", "44", "44", "44", "44", "43", "43", "43", "42", "42"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "46", "46", "4", "46", "45", "45", "45", "44", "44", "44", "44", "43", "43", "43"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "47", "46", "46", "46", "45", "45", "45", "45", "44", "44", "44", "43", "43"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "46", "46", "46", "46", "45", "45", "45", "44", "44", "44", "44"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "47", "46", "46", "46", "46", "45", "45", "45", "44", "44"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "47", "46", "46", "46", "45", "45", "45", "45"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "46", "46", "46", "46", "45", "45"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "47", "46", "46", "46", "45"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "47", "46", "46"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47", "47", "46"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "47"],

   ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"]

 ];
