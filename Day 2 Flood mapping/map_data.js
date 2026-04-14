const floodData = [
  {
    "name": "Algeria",
    "lat": 33.48077297297297,
    "lng": 3.6349574324324325,
    "cases": 37,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Brazil",
    "lat": -18.18232576271187,
    "lng": -47.442826271186455,
    "cases": 118,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Phillipines",
    "lat": 11.320726153846154,
    "lng": 123.67946153846154,
    "cases": 13,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Indonesia",
    "lat": -3.0143513777777766,
    "lng": 109.11391075555557,
    "cases": 225,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Mozambique",
    "lat": -20.47572564102564,
    "lng": 34.66739743589744,
    "cases": 39,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Comoros islands",
    "lat": -11.6516,
    "lng": 43.36,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "New Zealand",
    "lat": -40.25058571428571,
    "lng": 174.04209523809521,
    "cases": 42,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "USA",
    "lat": 37.3734201871102,
    "lng": -96.04808494802491,
    "cases": 481,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bolivia",
    "lat": -15.899228125,
    "lng": -64.936671875,
    "cases": 32,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "China",
    "lat": 30.07515509641873,
    "lng": 110.71176446280991,
    "cases": 363,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Argentina",
    "lat": -31.352812500000006,
    "lng": -61.51007749999999,
    "cases": 40,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bangladesh",
    "lat": 23.890759999999997,
    "lng": 90.68165368421057,
    "cases": 95,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Philippines",
    "lat": 12.694490108695648,
    "lng": 122.31054891304346,
    "cases": 184,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "India",
    "lat": 22.522154911660778,
    "lng": 82.52964770318029,
    "cases": 283,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "West Germany",
    "lat": 49.74,
    "lng": 8.521303333333334,
    "cases": 3,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Chad",
    "lat": 11.339205,
    "lng": 17.561433333333333,
    "cases": 18,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Sudan",
    "lat": 13.771664871794874,
    "lng": 31.129376923076933,
    "cases": 39,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Nepal",
    "lat": 28.00666382978724,
    "lng": 84.64183617021278,
    "cases": 47,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Austria",
    "lat": 47.81493333333333,
    "lng": 13.881666666666666,
    "cases": 6,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Ethiopia",
    "lat": 8.343380540540542,
    "lng": 39.68895675675676,
    "cases": 37,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Japan",
    "lat": 35.1465125,
    "lng": 135.27538888888893,
    "cases": 72,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Viet Nam",
    "lat": 17.640933333333333,
    "lng": 106.69849999999998,
    "cases": 12,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Sweden",
    "lat": 64.3597,
    "lng": 18.712500000000002,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Dominican Republic",
    "lat": 19.10496296296296,
    "lng": -70.65292222222223,
    "cases": 27,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Nigeria",
    "lat": 9.318644705882347,
    "lng": 7.883190441176471,
    "cases": 68,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Mexico",
    "lat": 21.565203157894732,
    "lng": -99.67419368421051,
    "cases": 95,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Benin",
    "lat": 7.694222857142856,
    "lng": 2.6602985714285716,
    "cases": 7,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Thailand",
    "lat": 13.655787307692304,
    "lng": 100.82748461538462,
    "cases": 78,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Jamaica",
    "lat": 20.228263636363636,
    "lng": -78.21856363636363,
    "cases": 11,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Venezuela",
    "lat": 9.307353928571429,
    "lng": -67.61995714285715,
    "cases": 28,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Trinidad",
    "lat": 10.700725,
    "lng": -61.139399999999995,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Peru",
    "lat": -10.541459814814816,
    "lng": -74.10594444444445,
    "cases": 54,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Iran",
    "lat": 34.26234117647057,
    "lng": 53.11437647058822,
    "cases": 85,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Solomon Islands",
    "lat": -9.25749,
    "lng": 160.074,
    "cases": 5,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Chile",
    "lat": -33.792608,
    "lng": -71.101796,
    "cases": 25,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Columbia",
    "lat": 5.529088275862068,
    "lng": -74.52570344827588,
    "cases": 29,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Canada",
    "lat": 50.04706666666666,
    "lng": -88.64171499999999,
    "cases": 60,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Vietnam",
    "lat": 16.509788703703702,
    "lng": 106.69913888888892,
    "cases": 108,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Uruguay",
    "lat": -32.507043749999994,
    "lng": -56.30596250000001,
    "cases": 16,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Azores Islands",
    "lat": 37.8118,
    "lng": -25.5053,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Tunisia",
    "lat": 35.95473333333334,
    "lng": 9.53903888888889,
    "cases": 9,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Alaska",
    "lat": 60.697100000000006,
    "lng": -142.382,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Haiti",
    "lat": 19.5154962962963,
    "lng": -72.89524444444444,
    "cases": 27,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Madagascar",
    "lat": -18.624475,
    "lng": 47.33294166666667,
    "cases": 24,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Georgia",
    "lat": 42.144549999999995,
    "lng": 43.654556250000006,
    "cases": 16,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Ecuador",
    "lat": -1.8240979,
    "lng": -79.05155,
    "cases": 20,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Tajikistan",
    "lat": 38.279095833333336,
    "lng": 69.76582083333334,
    "cases": 24,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Yugoslavia",
    "lat": 44.5471,
    "lng": 19.17343333333333,
    "cases": 3,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Australia",
    "lat": -26.780531468531468,
    "lng": 142.6073146853147,
    "cases": 143,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Poland",
    "lat": 50.180307692307686,
    "lng": 20.1475,
    "cases": 13,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Italy",
    "lat": 43.22963571428572,
    "lng": 11.665130952380954,
    "cases": 42,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "South Korea",
    "lat": 36.44112285714285,
    "lng": 127.53040000000001,
    "cases": 35,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "South Africa",
    "lat": -29.819559677419353,
    "lng": 26.31290161290323,
    "cases": 62,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Guatamala",
    "lat": 14.961016666666666,
    "lng": -89.9819,
    "cases": 6,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Spain",
    "lat": 39.69349318181818,
    "lng": -2.489347522727273,
    "cases": 44,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Lebanon",
    "lat": 32.81586,
    "lng": 35.514979999999994,
    "cases": 5,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Taiwan",
    "lat": 24.056081250000013,
    "lng": 121.00156249999998,
    "cases": 32,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Costa Rica",
    "lat": 10.034042500000002,
    "lng": -83.76681999999998,
    "cases": 20,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Turkey",
    "lat": 39.520101999999994,
    "lng": 35.102493999999986,
    "cases": 50,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Czechoslovakia",
    "lat": 49.5644,
    "lng": 15.74845,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Kenya",
    "lat": -0.21257903508771928,
    "lng": 37.18476491228071,
    "cases": 57,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Rwanda",
    "lat": -1.7609386249999999,
    "lng": 29.81706875,
    "cases": 16,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Cuba",
    "lat": 21.67837692307692,
    "lng": -78.86873076923077,
    "cases": 13,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Sri Lanka",
    "lat": 7.4407479661016955,
    "lng": 80.73179152542372,
    "cases": 59,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Afghanistan",
    "lat": 34.82026172839506,
    "lng": 67.22833333333334,
    "cases": 81,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Ukraine",
    "lat": 48.28620666666665,
    "lng": 29.06757333333333,
    "cases": 15,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "USSR",
    "lat": 50.769625,
    "lng": 94.07605,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Pakistan",
    "lat": 31.11250394736842,
    "lng": 70.78067368421053,
    "cases": 76,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Nicaragua",
    "lat": 15.487404545454545,
    "lng": -86.97405454545456,
    "cases": 22,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Uganda",
    "lat": 1.20608935483871,
    "lng": 32.39690322580645,
    "cases": 31,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Burkina Faso",
    "lat": 12.581616666666667,
    "lng": -2.299775,
    "cases": 6,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Niger",
    "lat": 14.821277777777782,
    "lng": 5.461316111111111,
    "cases": 18,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "El Savador",
    "lat": 13.6283,
    "lng": -88.8546,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Senegal",
    "lat": 15.204322222222224,
    "lng": -15.422355555555555,
    "cases": 9,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "France",
    "lat": 45.371093478260875,
    "lng": 4.056108130434783,
    "cases": 46,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Ghana",
    "lat": 7.353670833333335,
    "lng": -0.5766642916666667,
    "cases": 24,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Guatemala",
    "lat": 15.191063636363635,
    "lng": -90.50423636363638,
    "cases": 11,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Gabon",
    "lat": -0.86622,
    "lng": 10.5656,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Scotland",
    "lat": 56.444300000000005,
    "lng": -3.6211799999999994,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Portugal",
    "lat": 37.06375,
    "lng": -13.69286875,
    "cases": 8,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Zambia",
    "lat": -14.36138,
    "lng": 27.282306666666663,
    "cases": 15,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Yemen",
    "lat": 15.060203846153847,
    "lng": 46.387934615384616,
    "cases": 26,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Fiji",
    "lat": -17.65251176470588,
    "lng": 178.18823529411762,
    "cases": 17,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Namibia",
    "lat": -21.075792307692307,
    "lng": 19.124730769230766,
    "cases": 13,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bermuda",
    "lat": 32.3152,
    "lng": -64.7489,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Burundi",
    "lat": -3.3281731249999993,
    "lng": 29.885606250000002,
    "cases": 16,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Djibouti",
    "lat": 11.593716666666667,
    "lng": 42.771233333333335,
    "cases": 6,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Malawi",
    "lat": -13.983888461538461,
    "lng": 34.64337692307693,
    "cases": 26,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "New Caledonia",
    "lat": -21.365499999999997,
    "lng": 165.67849999999999,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Oman",
    "lat": 21.76011,
    "lng": 56.09312,
    "cases": 10,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Russia",
    "lat": 52.035033333333345,
    "lng": 84.96589333333334,
    "cases": 105,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Somalia",
    "lat": 3.6528473720930235,
    "lng": 44.82496046511627,
    "cases": 43,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "North Korea",
    "lat": 39.23588421052631,
    "lng": 126.93394736842107,
    "cases": 19,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Tanzania",
    "lat": -6.254795675675678,
    "lng": 36.38392432432432,
    "cases": 37,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Antigua",
    "lat": 17.5697,
    "lng": -62.9478,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Paraguay",
    "lat": -24.53550555555556,
    "lng": -57.37730555555556,
    "cases": 18,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Guam",
    "lat": 13.4458,
    "lng": 144.76233333333334,
    "cases": 3,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "UK",
    "lat": 52.48852255813954,
    "lng": -0.48777379069767424,
    "cases": 43,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Guyana",
    "lat": 6.223885555555555,
    "lng": -58.48493333333332,
    "cases": 9,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Soviet Union",
    "lat": 50.441599999999994,
    "lng": 74.59909090909092,
    "cases": 11,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bangledesh",
    "lat": 22.4252,
    "lng": 92.1228,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Myanamar",
    "lat": 24.0102,
    "lng": 95.287,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Tobago",
    "lat": 11.2383,
    "lng": -60.6677,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Honduras",
    "lat": 14.63745789473684,
    "lng": -86.6160736842105,
    "cases": 19,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "England",
    "lat": 52.2915,
    "lng": -0.84501675,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Britain, Ireland",
    "lat": 53.5893,
    "lng": -7.838,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Britain",
    "lat": 53.060566666666666,
    "lng": -0.45536399999999994,
    "cases": 3,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Jordan",
    "lat": 31.673199999999998,
    "lng": 36.01276,
    "cases": 5,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Israel",
    "lat": 31.808050000000005,
    "lng": 35.09817857142856,
    "cases": 14,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Colombia",
    "lat": 5.530368318181818,
    "lng": -74.93702045454546,
    "cases": 44,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Myanmar",
    "lat": 20.031323076923076,
    "lng": 95.82995384615384,
    "cases": 13,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Laos",
    "lat": 17.9632,
    "lng": 104.43933333333332,
    "cases": 6,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Romania",
    "lat": 46.22072857142856,
    "lng": 25.24414999999999,
    "cases": 42,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Cambodia",
    "lat": 12.585953333333332,
    "lng": 105.3298,
    "cases": 15,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Philippine",
    "lat": 17.2236,
    "lng": 121.394,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Egypt",
    "lat": 27.748709090909095,
    "lng": 32.06912727272727,
    "cases": 11,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "French Polynesia",
    "lat": -17.5254,
    "lng": -149.853,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Malaysia",
    "lat": 4.250277794117648,
    "lng": 104.77390735294118,
    "cases": 68,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Puerto Rico",
    "lat": 18.183325,
    "lng": -66.46455,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Uzbekistan",
    "lat": 41.3074,
    "lng": 62.725975,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Papua New Guinea",
    "lat": -6.430666874999999,
    "lng": 145.44681250000002,
    "cases": 16,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Kyrgyzstan",
    "lat": 42.45197999999999,
    "lng": 71.8237,
    "cases": 5,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Burma",
    "lat": 18.791875,
    "lng": 95.62058333333334,
    "cases": 12,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "El Salvador",
    "lat": 14.6409,
    "lng": -89.9122,
    "cases": 11,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Montenegro",
    "lat": 42.81585,
    "lng": 19.507199999999997,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Albania",
    "lat": 41.85513999999999,
    "lng": 19.502926666666667,
    "cases": 15,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Zimbabwe",
    "lat": -18.8098375,
    "lng": 29.8500875,
    "cases": 8,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Kazakhstan",
    "lat": 46.7727125,
    "lng": 66.8752,
    "cases": 8,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Belarus",
    "lat": 52.351625000000006,
    "lng": 26.92785,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Armenia",
    "lat": 40.7485,
    "lng": 44.0001,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Moldova",
    "lat": 47.0597,
    "lng": 28.3343,
    "cases": 3,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Cameroon",
    "lat": 8.138715,
    "lng": 12.0287975,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Greece",
    "lat": 39.285220689655176,
    "lng": 24.29208965517242,
    "cases": 29,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Botswana",
    "lat": -19.92866666666667,
    "lng": 25.302733333333332,
    "cases": 3,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Germany",
    "lat": 50.12934375,
    "lng": 10.992723125000001,
    "cases": 16,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Norway",
    "lat": 62.13417499999999,
    "lng": 10.268107500000001,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Azerbaijan",
    "lat": 40.835879999999996,
    "lng": 47.49852,
    "cases": 5,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Togo",
    "lat": 7.4445033333333335,
    "lng": 1.2046306666666666,
    "cases": 6,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Morocco",
    "lat": 32.662436842105265,
    "lng": -6.083304210526316,
    "cases": 19,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Caribbean",
    "lat": 14.2621,
    "lng": -60.8749,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Martinique",
    "lat": 15.0033,
    "lng": -61.172799999999995,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Mauritania",
    "lat": 16.889114285714285,
    "lng": -10.00284857142857,
    "cases": 7,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Panama",
    "lat": 8.734925,
    "lng": -80.06751,
    "cases": 10,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Saudi Arabia",
    "lat": 22.181027272727274,
    "lng": 42.56658181818181,
    "cases": 22,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "United Arab Emerates",
    "lat": 25.1783,
    "lng": 56.1541,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Czech Republic",
    "lat": 49.532288888888885,
    "lng": 17.660966666666667,
    "cases": 9,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Liberia",
    "lat": 6.444011666666667,
    "lng": -9.880363333333333,
    "cases": 6,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Mongolia",
    "lat": 47.793714285714294,
    "lng": 103.18887142857143,
    "cases": 7,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bosnia",
    "lat": 44.2592,
    "lng": 18.14965,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Iceland",
    "lat": 64.3628,
    "lng": -16.7921,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Palestine",
    "lat": 32.1142,
    "lng": 35.37746666666667,
    "cases": 3,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Philipines",
    "lat": 15.2748,
    "lng": 120.631,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Moldava",
    "lat": 47.0678,
    "lng": 28.5625,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Syria",
    "lat": 35.43996,
    "lng": 38.139019999999995,
    "cases": 5,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Congo",
    "lat": -1.7540477500000002,
    "lng": 19.727175,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bulgaria",
    "lat": 42.303287499999996,
    "lng": 26.057537500000006,
    "cases": 16,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Democratic Republic of the Congo",
    "lat": -5.06649,
    "lng": 16.0739,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Vanuatu",
    "lat": -16.998175,
    "lng": 167.94,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Central African Republic",
    "lat": 5.07151,
    "lng": 17.85876,
    "cases": 5,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Siberia",
    "lat": 63.9567,
    "lng": 131.959,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bangaldesh",
    "lat": 25.9513,
    "lng": 91.8551,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Slovakia",
    "lat": 48.85565,
    "lng": 19.7666,
    "cases": 6,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Tibet",
    "lat": 29.24,
    "lng": 86.8106,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Belgium",
    "lat": 50.9388,
    "lng": 4.672575,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Croatia",
    "lat": 44.862725000000005,
    "lng": 16.116049999999998,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Switzerland",
    "lat": 47.21782,
    "lng": 7.983442000000001,
    "cases": 5,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Democratic Republic of Congo",
    "lat": -3.872003555555555,
    "lng": 21.0451,
    "cases": 9,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Angola",
    "lat": -10.830449583333335,
    "lng": 14.731708333333332,
    "cases": 24,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Timor",
    "lat": -9.27811,
    "lng": 125.334,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Belize",
    "lat": 17.7937,
    "lng": -88.75655,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "DR Congo",
    "lat": -3.43709875,
    "lng": 23.99035,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "East Timor",
    "lat": -8.703915,
    "lng": 126.303,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Ivory Coast",
    "lat": 5.81611,
    "lng": -3.8819825000000003,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Guinea",
    "lat": 10.2944,
    "lng": -11.332445,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Democratic Republic Congo",
    "lat": -1.866708,
    "lng": 17.97625,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Lithuania",
    "lat": 55.4566,
    "lng": 21.5702,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "USA.",
    "lat": 36.8924,
    "lng": -83.2183,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Canary Islands",
    "lat": 28.4785,
    "lng": -16.2539,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Africa",
    "lat": -0.075707,
    "lng": 33.5441,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Europe",
    "lat": 47.137,
    "lng": 10.6119,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Ireland",
    "lat": 51.98343333333333,
    "lng": -5.05675,
    "cases": 3,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Texas",
    "lat": 29.5326,
    "lng": -98.3593,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Sierra Leone",
    "lat": 7.99197,
    "lng": -12.040280000000001,
    "cases": 5,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Macedonia",
    "lat": 41.889359999999996,
    "lng": 21.575940000000003,
    "cases": 5,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Comoros Islands",
    "lat": -12.3152,
    "lng": 43.741,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "American Samoa",
    "lat": -14.07565,
    "lng": -172.06799999999998,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Sudan and Eritrea",
    "lat": 15.3828,
    "lng": 36.4589,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Estonia",
    "lat": 59.1934,
    "lng": 27.3605,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Mali",
    "lat": 14.79395,
    "lng": -0.46423075,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Canada and USA",
    "lat": 49.5023,
    "lng": -122.853,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Hungary",
    "lat": 48.187775,
    "lng": 19.8861,
    "cases": 4,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Boliva",
    "lat": -14.8766,
    "lng": -64.8904,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Iraq",
    "lat": 33.90711666666666,
    "lng": 45.61451666666667,
    "cases": 6,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Malayasia",
    "lat": 1.86645,
    "lng": 103.354,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bosnia-Herzegovina",
    "lat": 45.07755,
    "lng": 17.9,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Venezulea",
    "lat": 8.91445,
    "lng": -72.3649,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Finland",
    "lat": 67.4743,
    "lng": 26.3662,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Western Sahara",
    "lat": 27.1188,
    "lng": -10.8789,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Congo Republic",
    "lat": -4.1842500000000005,
    "lng": 15.3216,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Lesotho",
    "lat": -29.586,
    "lng": 28.15995,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Serbia",
    "lat": 43.892775,
    "lng": 20.7623625,
    "cases": 8,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Serbia-Montenegro",
    "lat": 45.2621,
    "lng": 20.7493,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Suriname",
    "lat": 3.19053,
    "lng": -56.080200000000005,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Phillippines",
    "lat": 14.6726,
    "lng": 121.091,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Slovenia",
    "lat": 46.2575,
    "lng": 14.0326,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Serbia and Montenegro",
    "lat": 42.7619,
    "lng": 20.7976,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "United Kingdom",
    "lat": 53.0221875,
    "lng": -2.019048125,
    "cases": 16,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bosnia and Herzogovina",
    "lat": 43.5036,
    "lng": 18.1786,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Cote d'Ivoire",
    "lat": 5.56989,
    "lng": -4.20195,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bosnia-Herzegovenia",
    "lat": 44.8711,
    "lng": 17.4846,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Singapore",
    "lat": 1.4308,
    "lng": 103.833,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Latvia",
    "lat": 56.652,
    "lng": 24.7977,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bosnia and Herzegovina",
    "lat": 43.9872,
    "lng": 17.705,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Burkino Faso",
    "lat": 12.9425,
    "lng": -1.38925,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Tasmania",
    "lat": -41.4217,
    "lng": 147.327,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Gaza",
    "lat": 31.4583,
    "lng": 34.4615,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "South Sudan",
    "lat": 7.860916666666666,
    "lng": 30.80317777777778,
    "cases": 9,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "The Gambia",
    "lat": 13.4093,
    "lng": -16.1515,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Seychelles",
    "lat": -4.60943,
    "lng": 55.4243,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Mauritius",
    "lat": -20.670499999999997,
    "lng": 56.5416,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Burma/Myanmar",
    "lat": 18.3122,
    "lng": 98.1556,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Saint Vincent",
    "lat": 13.9188,
    "lng": -60.9886,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Zimbawe",
    "lat": -19.052400000000002,
    "lng": 30.358199999999997,
    "cases": 6,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Papua New Gunea",
    "lat": -6.06802,
    "lng": 143.399,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Kazahkstan",
    "lat": 48.4049,
    "lng": 65.5929,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Camaroun",
    "lat": 3.94741,
    "lng": 9.88421,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Uruguay,",
    "lat": -29.9568,
    "lng": -53.5718,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bahamas",
    "lat": 24.5568,
    "lng": -76.12950000000001,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Qatar",
    "lat": 21.6586,
    "lng": 51.885,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Maldives",
    "lat": -0.144295,
    "lng": 73.1892,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Bhutan",
    "lat": 27.1694,
    "lng": 90.5344,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Northern Ireland",
    "lat": 54.3667,
    "lng": -7.7468,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Unitd Kingdom",
    "lat": 54.1661,
    "lng": -1.88259,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Malta",
    "lat": 35.8663,
    "lng": 14.4729,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Netherlands",
    "lat": 50.6905,
    "lng": 5.86212,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Cyprus",
    "lat": 32.7134,
    "lng": 35.2079,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Libya",
    "lat": 24.5547,
    "lng": 12.6913,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Democratic  Republic of the Congo",
    "lat": 2.83151,
    "lng": 23.2321,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Republic of Congo",
    "lat": 0.06384999999999996,
    "lng": 17.05855,
    "cases": 2,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Madascar",
    "lat": -18.9495,
    "lng": 47.1838,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  },
  {
    "name": "Cote D'Iavoir",
    "lat": 5.57193,
    "lng": -4.08476,
    "cases": 1,
    "dead": 0,
    "displaced": 0
  }
];