const floodData = [
  {
    "name": "Algeria",
    "lat": 33.48077297297297,
    "lng": 3.6349574324324325,
    "cases": 37,
    "dead": 1122,
    "displaced": 101640
  },
  {
    "name": "Brazil",
    "lat": -18.18232576271187,
    "lng": -47.442826271186455,
    "cases": 118,
    "dead": 3861,
    "displaced": 3512372
  },
  {
    "name": "Phillipines",
    "lat": 11.320726153846154,
    "lng": 123.67946153846154,
    "cases": 13,
    "dead": 453,
    "displaced": 1471207
  },
  {
    "name": "Indonesia",
    "lat": -3.0143513777777766,
    "lng": 109.11391075555557,
    "cases": 225,
    "dead": 5392,
    "displaced": 4720455
  },
  {
    "name": "Mozambique",
    "lat": -20.47572564102564,
    "lng": 34.66739743589744,
    "cases": 39,
    "dead": 1648,
    "displaced": 2735550
  },
  {
    "name": "Comoros islands",
    "lat": -11.6516,
    "lng": 43.36,
    "cases": 1,
    "dead": 2,
    "displaced": 35000
  },
  {
    "name": "New Zealand",
    "lat": -40.25058571428571,
    "lng": 174.04209523809521,
    "cases": 42,
    "dead": 15,
    "displaced": 12426
  },
  {
    "name": "USA",
    "lat": 37.3734201871102,
    "lng": -96.04808494802491,
    "cases": 481,
    "dead": 5046,
    "displaced": 9624280
  },
  {
    "name": "Bolivia",
    "lat": -15.899228125,
    "lng": -64.936671875,
    "cases": 32,
    "dead": 518,
    "displaced": 859786
  },
  {
    "name": "China",
    "lat": 30.07515509641873,
    "lng": 110.71176446280991,
    "cases": 363,
    "dead": 32177,
    "displaced": 109633202
  },
  {
    "name": "Argentina",
    "lat": -31.352812500000006,
    "lng": -61.51007749999999,
    "cases": 40,
    "dead": 385,
    "displaced": 1596835
  },
  {
    "name": "Bangladesh",
    "lat": 23.890759999999997,
    "lng": 90.68165368421057,
    "cases": 95,
    "dead": 148224,
    "displaced": 106150803
  },
  {
    "name": "Philippines",
    "lat": 12.694490108695648,
    "lng": 122.31054891304346,
    "cases": 184,
    "dead": 19511,
    "displaced": 25088858
  },
  {
    "name": "India",
    "lat": 22.522154911660778,
    "lng": 82.52964770318029,
    "cases": 283,
    "dead": 53953,
    "displaced": 188496618
  },
  {
    "name": "West Germany",
    "lat": 49.74,
    "lng": 8.521303333333334,
    "cases": 3,
    "dead": 12,
    "displaced": 3550
  },
  {
    "name": "Chad",
    "lat": 11.339205,
    "lng": 17.561433333333333,
    "cases": 18,
    "dead": 278,
    "displaced": 941662
  },
  {
    "name": "Sudan",
    "lat": 13.771664871794874,
    "lng": 31.129376923076933,
    "cases": 39,
    "dead": 785,
    "displaced": 4131435
  },
  {
    "name": "Nepal",
    "lat": 28.00666382978724,
    "lng": 84.64183617021278,
    "cases": 47,
    "dead": 2777,
    "displaced": 10593779
  },
  {
    "name": "Austria",
    "lat": 47.81493333333333,
    "lng": 13.881666666666666,
    "cases": 6,
    "dead": 24,
    "displaced": 70
  },
  {
    "name": "Ethiopia",
    "lat": 8.343380540540542,
    "lng": 39.68895675675676,
    "cases": 37,
    "dead": 1439,
    "displaced": 1526330
  },
  {
    "name": "Japan",
    "lat": 35.1465125,
    "lng": 135.27538888888893,
    "cases": 72,
    "dead": 11102,
    "displaced": 5321044
  },
  {
    "name": "Viet Nam",
    "lat": 17.640933333333333,
    "lng": 106.69849999999998,
    "cases": 12,
    "dead": 886,
    "displaced": 1860400
  },
  {
    "name": "Sweden",
    "lat": 64.3597,
    "lng": 18.712500000000002,
    "cases": 2,
    "dead": 0,
    "displaced": 20
  },
  {
    "name": "Dominican Republic",
    "lat": 19.10496296296296,
    "lng": -70.65292222222223,
    "cases": 27,
    "dead": 3933,
    "displaced": 284730
  },
  {
    "name": "Nigeria",
    "lat": 9.318644705882347,
    "lng": 7.883190441176471,
    "cases": 68,
    "dead": 1877,
    "displaced": 2193557
  },
  {
    "name": "Mexico",
    "lat": 21.565203157894732,
    "lng": -99.67419368421051,
    "cases": 95,
    "dead": 2639,
    "displaced": 4097688
  },
  {
    "name": "Benin",
    "lat": 7.694222857142856,
    "lng": 2.6602985714285716,
    "cases": 7,
    "dead": 358,
    "displaced": 316000
  },
  {
    "name": "Thailand",
    "lat": 13.655787307692304,
    "lng": 100.82748461538462,
    "cases": 78,
    "dead": 163915,
    "displaced": 18454579
  },
  {
    "name": "Jamaica",
    "lat": 20.228263636363636,
    "lng": -78.21856363636363,
    "cases": 11,
    "dead": 271,
    "displaced": 454860
  },
  {
    "name": "Venezuela",
    "lat": 9.307353928571429,
    "lng": -67.61995714285715,
    "cases": 28,
    "dead": 20341,
    "displaced": 694543
  },
  {
    "name": "Trinidad",
    "lat": 10.700725,
    "lng": -61.139399999999995,
    "cases": 4,
    "dead": 8,
    "displaced": 900
  },
  {
    "name": "Peru",
    "lat": -10.541459814814816,
    "lng": -74.10594444444445,
    "cases": 54,
    "dead": 1230,
    "displaced": 1558290
  },
  {
    "name": "Iran",
    "lat": 34.26234117647057,
    "lng": 53.11437647058822,
    "cases": 85,
    "dead": 2584,
    "displaced": 1480082
  },
  {
    "name": "Solomon Islands",
    "lat": -9.25749,
    "lng": 160.074,
    "cases": 5,
    "dead": 23,
    "displaced": 24040
  },
  {
    "name": "Chile",
    "lat": -33.792608,
    "lng": -71.101796,
    "cases": 25,
    "dead": 346,
    "displaced": 414046
  },
  {
    "name": "Columbia",
    "lat": 5.529088275862068,
    "lng": -74.52570344827588,
    "cases": 29,
    "dead": 1724,
    "displaced": 1664290
  },
  {
    "name": "Canada",
    "lat": 50.04706666666666,
    "lng": -88.64171499999999,
    "cases": 60,
    "dead": 26,
    "displaced": 172626
  },
  {
    "name": "Vietnam",
    "lat": 16.509788703703702,
    "lng": 106.69913888888892,
    "cases": 108,
    "dead": 5059,
    "displaced": 11656091
  },
  {
    "name": "Uruguay",
    "lat": -32.507043749999994,
    "lng": -56.30596250000001,
    "cases": 16,
    "dead": 30,
    "displaced": 96794
  },
  {
    "name": "Azores Islands",
    "lat": 37.8118,
    "lng": -25.5053,
    "cases": 1,
    "dead": 3,
    "displaced": 0
  },
  {
    "name": "Tunisia",
    "lat": 35.95473333333334,
    "lng": 9.53903888888889,
    "cases": 9,
    "dead": 87,
    "displaced": 180500
  },
  {
    "name": "Alaska",
    "lat": 60.697100000000006,
    "lng": -142.382,
    "cases": 2,
    "dead": 25,
    "displaced": 1521
  },
  {
    "name": "Haiti",
    "lat": 19.5154962962963,
    "lng": -72.89524444444444,
    "cases": 27,
    "dead": 3806,
    "displaced": 588461
  },
  {
    "name": "Madagascar",
    "lat": -18.624475,
    "lng": 47.33294166666667,
    "cases": 24,
    "dead": 1213,
    "displaced": 1604170
  },
  {
    "name": "Georgia",
    "lat": 42.144549999999995,
    "lng": 43.654556250000006,
    "cases": 16,
    "dead": 199,
    "displaced": 58550
  },
  {
    "name": "Ecuador",
    "lat": -1.8240979,
    "lng": -79.05155,
    "cases": 20,
    "dead": 734,
    "displaced": 407265
  },
  {
    "name": "Tajikistan",
    "lat": 38.279095833333336,
    "lng": 69.76582083333334,
    "cases": 24,
    "dead": 631,
    "displaced": 75904
  },
  {
    "name": "Yugoslavia",
    "lat": 44.5471,
    "lng": 19.17343333333333,
    "cases": 3,
    "dead": 83,
    "displaced": 505000
  },
  {
    "name": "Australia",
    "lat": -26.780531468531468,
    "lng": 142.6073146853147,
    "cases": 143,
    "dead": 378,
    "displaced": 561208
  },
  {
    "name": "Poland",
    "lat": 50.180307692307686,
    "lng": 20.1475,
    "cases": 13,
    "dead": 110,
    "displaced": 190270
  },
  {
    "name": "Italy",
    "lat": 43.22963571428572,
    "lng": 11.665130952380954,
    "cases": 42,
    "dead": 479,
    "displaced": 125747
  },
  {
    "name": "South Korea",
    "lat": 36.44112285714285,
    "lng": 127.53040000000001,
    "cases": 35,
    "dead": 1855,
    "displaced": 1848953
  },
  {
    "name": "South Africa",
    "lat": -29.819559677419353,
    "lng": 26.31290161290323,
    "cases": 62,
    "dead": 755,
    "displaced": 260998
  },
  {
    "name": "Guatamala",
    "lat": 14.961016666666666,
    "lng": -89.9819,
    "cases": 6,
    "dead": 716,
    "displaced": 204233
  },
  {
    "name": "Spain",
    "lat": 39.69349318181818,
    "lng": -2.489347522727273,
    "cases": 44,
    "dead": 262,
    "displaced": 14867
  },
  {
    "name": "Lebanon",
    "lat": 32.81586,
    "lng": 35.514979999999994,
    "cases": 5,
    "dead": 14,
    "displaced": 2500
  },
  {
    "name": "Taiwan",
    "lat": 24.056081250000013,
    "lng": 121.00156249999998,
    "cases": 32,
    "dead": 1272,
    "displaced": 4275152
  },
  {
    "name": "Costa Rica",
    "lat": 10.034042500000002,
    "lng": -83.76681999999998,
    "cases": 20,
    "dead": 4103,
    "displaced": 222751
  },
  {
    "name": "Turkey",
    "lat": 39.520101999999994,
    "lng": 35.102493999999986,
    "cases": 50,
    "dead": 789,
    "displaced": 89164
  },
  {
    "name": "Czechoslovakia",
    "lat": 49.5644,
    "lng": 15.74845,
    "cases": 2,
    "dead": 2,
    "displaced": 500
  },
  {
    "name": "Kenya",
    "lat": -0.21257903508771928,
    "lng": 37.18476491228071,
    "cases": 57,
    "dead": 1291,
    "displaced": 2894615
  },
  {
    "name": "Rwanda",
    "lat": -1.7609386249999999,
    "lng": 29.81706875,
    "cases": 16,
    "dead": 214,
    "displaced": 45389
  },
  {
    "name": "Cuba",
    "lat": 21.67837692307692,
    "lng": -78.86873076923077,
    "cases": 13,
    "dead": 71,
    "displaced": 295738
  },
  {
    "name": "Sri Lanka",
    "lat": 7.4407479661016955,
    "lng": 80.73179152542372,
    "cases": 59,
    "dead": 1304,
    "displaced": 7620566
  },
  {
    "name": "Afghanistan",
    "lat": 34.82026172839506,
    "lng": 67.22833333333334,
    "cases": 81,
    "dead": 5148,
    "displaced": 353004
  },
  {
    "name": "Ukraine",
    "lat": 48.28620666666665,
    "lng": 29.06757333333333,
    "cases": 15,
    "dead": 74,
    "displaced": 239115
  },
  {
    "name": "USSR",
    "lat": 50.769625,
    "lng": 94.07605,
    "cases": 4,
    "dead": 17,
    "displaced": 0
  },
  {
    "name": "Pakistan",
    "lat": 31.11250394736842,
    "lng": 70.78067368421053,
    "cases": 76,
    "dead": 10825,
    "displaced": 21238095
  },
  {
    "name": "Nicaragua",
    "lat": 15.487404545454545,
    "lng": -86.97405454545456,
    "cases": 22,
    "dead": 2489,
    "displaced": 27831340
  },
  {
    "name": "Uganda",
    "lat": 1.20608935483871,
    "lng": 32.39690322580645,
    "cases": 31,
    "dead": 12234,
    "displaced": 648132
  },
  {
    "name": "Burkina Faso",
    "lat": 12.581616666666667,
    "lng": -2.299775,
    "cases": 6,
    "dead": 19,
    "displaced": 84000
  },
  {
    "name": "Niger",
    "lat": 14.821277777777782,
    "lng": 5.461316111111111,
    "cases": 18,
    "dead": 379,
    "displaced": 591600
  },
  {
    "name": "El Savador",
    "lat": 13.6283,
    "lng": -88.8546,
    "cases": 1,
    "dead": 50,
    "displaced": 25850
  },
  {
    "name": "Senegal",
    "lat": 15.204322222222224,
    "lng": -15.422355555555555,
    "cases": 9,
    "dead": 47,
    "displaced": 99000
  },
  {
    "name": "France",
    "lat": 45.371093478260875,
    "lng": 4.056108130434783,
    "cases": 46,
    "dead": 360,
    "displaced": 412579
  },
  {
    "name": "Ghana",
    "lat": 7.353670833333335,
    "lng": -0.5766642916666667,
    "cases": 24,
    "dead": 589,
    "displaced": 876786
  },
  {
    "name": "Guatemala",
    "lat": 15.191063636363635,
    "lng": -90.50423636363638,
    "cases": 11,
    "dead": 76,
    "displaced": 18196
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
    "dead": 2,
    "displaced": 3330
  },
  {
    "name": "Portugal",
    "lat": 37.06375,
    "lng": -13.69286875,
    "cases": 8,
    "dead": 74,
    "displaced": 20600
  },
  {
    "name": "Zambia",
    "lat": -14.36138,
    "lng": 27.282306666666663,
    "cases": 15,
    "dead": 130,
    "displaced": 330603
  },
  {
    "name": "Yemen",
    "lat": 15.060203846153847,
    "lng": 46.387934615384616,
    "cases": 26,
    "dead": 495,
    "displaced": 125440
  },
  {
    "name": "Fiji",
    "lat": -17.65251176470588,
    "lng": 178.18823529411762,
    "cases": 17,
    "dead": 137,
    "displaced": 60552
  },
  {
    "name": "Namibia",
    "lat": -21.075792307692307,
    "lng": 19.124730769230766,
    "cases": 13,
    "dead": 128,
    "displaced": 117360
  },
  {
    "name": "Bermuda",
    "lat": 32.3152,
    "lng": -64.7489,
    "cases": 1,
    "dead": 0,
    "displaced": 60
  },
  {
    "name": "Burundi",
    "lat": -3.3281731249999993,
    "lng": 29.885606250000002,
    "cases": 16,
    "dead": 133,
    "displaced": 59276
  },
  {
    "name": "Djibouti",
    "lat": 11.593716666666667,
    "lng": 42.771233333333335,
    "cases": 6,
    "dead": 180,
    "displaced": 352000
  },
  {
    "name": "Malawi",
    "lat": -13.983888461538461,
    "lng": 34.64337692307693,
    "cases": 26,
    "dead": 1861,
    "displaced": 1438814
  },
  {
    "name": "New Caledonia",
    "lat": -21.365499999999997,
    "lng": 165.67849999999999,
    "cases": 2,
    "dead": 196,
    "displaced": 532000
  },
  {
    "name": "Oman",
    "lat": 21.76011,
    "lng": 56.09312,
    "cases": 10,
    "dead": 215,
    "displaced": 60410
  },
  {
    "name": "Russia",
    "lat": 52.035033333333345,
    "lng": 84.96589333333334,
    "cases": 105,
    "dead": 617,
    "displaced": 1597335
  },
  {
    "name": "Somalia",
    "lat": 3.6528473720930235,
    "lng": 44.82496046511627,
    "cases": 43,
    "dead": 4573,
    "displaced": 1425790
  },
  {
    "name": "North Korea",
    "lat": 39.23588421052631,
    "lng": 126.93394736842107,
    "cases": 19,
    "dead": 1802,
    "displaced": 1948760
  },
  {
    "name": "Tanzania",
    "lat": -6.254795675675678,
    "lng": 36.38392432432432,
    "cases": 37,
    "dead": 4149,
    "displaced": 4348658
  },
  {
    "name": "Antigua",
    "lat": 17.5697,
    "lng": -62.9478,
    "cases": 1,
    "dead": 14,
    "displaced": 50000
  },
  {
    "name": "Paraguay",
    "lat": -24.53550555555556,
    "lng": -57.37730555555556,
    "cases": 18,
    "dead": 138,
    "displaced": 865950
  },
  {
    "name": "Guam",
    "lat": 13.4458,
    "lng": 144.76233333333334,
    "cases": 3,
    "dead": 4,
    "displaced": 500
  },
  {
    "name": "UK",
    "lat": 52.48852255813954,
    "lng": -0.48777379069767424,
    "cases": 43,
    "dead": 131,
    "displaced": 52022
  },
  {
    "name": "Guyana",
    "lat": 6.223885555555555,
    "lng": -58.48493333333332,
    "cases": 9,
    "dead": 127,
    "displaced": 1580100
  },
  {
    "name": "Soviet Union",
    "lat": 50.441599999999994,
    "lng": 74.59909090909092,
    "cases": 11,
    "dead": 84,
    "displaced": 25208
  },
  {
    "name": "Bangledesh",
    "lat": 22.4252,
    "lng": 92.1228,
    "cases": 1,
    "dead": 23,
    "displaced": 800000
  },
  {
    "name": "Myanamar",
    "lat": 24.0102,
    "lng": 95.287,
    "cases": 1,
    "dead": 0,
    "displaced": 300
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
    "dead": 11411,
    "displaced": 2404300
  },
  {
    "name": "England",
    "lat": 52.2915,
    "lng": -0.84501675,
    "cases": 4,
    "dead": 15,
    "displaced": 120
  },
  {
    "name": "Britain, Ireland",
    "lat": 53.5893,
    "lng": -7.838,
    "cases": 1,
    "dead": 13,
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
    "dead": 41,
    "displaced": 300
  },
  {
    "name": "Israel",
    "lat": 31.808050000000005,
    "lng": 35.09817857142856,
    "cases": 14,
    "dead": 68,
    "displaced": 5371
  },
  {
    "name": "Colombia",
    "lat": 5.530368318181818,
    "lng": -74.93702045454546,
    "cases": 44,
    "dead": 1031,
    "displaced": 2446540
  },
  {
    "name": "Myanmar",
    "lat": 20.031323076923076,
    "lng": 95.82995384615384,
    "cases": 13,
    "dead": 227,
    "displaced": 694910
  },
  {
    "name": "Laos",
    "lat": 17.9632,
    "lng": 104.43933333333332,
    "cases": 6,
    "dead": 52,
    "displaced": 47400
  },
  {
    "name": "Romania",
    "lat": 46.22072857142856,
    "lng": 25.24414999999999,
    "cases": 42,
    "dead": 375,
    "displaced": 193410
  },
  {
    "name": "Cambodia",
    "lat": 12.585953333333332,
    "lng": 105.3298,
    "cases": 15,
    "dead": 2182,
    "displaced": 8820148
  },
  {
    "name": "Philippine",
    "lat": 17.2236,
    "lng": 121.394,
    "cases": 1,
    "dead": 43,
    "displaced": 165000
  },
  {
    "name": "Egypt",
    "lat": 27.748709090909095,
    "lng": 32.06912727272727,
    "cases": 11,
    "dead": 677,
    "displaced": 114856
  },
  {
    "name": "French Polynesia",
    "lat": -17.5254,
    "lng": -149.853,
    "cases": 1,
    "dead": 2,
    "displaced": 0
  },
  {
    "name": "Malaysia",
    "lat": 4.250277794117648,
    "lng": 104.77390735294118,
    "cases": 68,
    "dead": 541,
    "displaced": 1311381
  },
  {
    "name": "Puerto Rico",
    "lat": 18.183325,
    "lng": -66.46455,
    "cases": 4,
    "dead": 48,
    "displaced": 10850
  },
  {
    "name": "Uzbekistan",
    "lat": 41.3074,
    "lng": 62.725975,
    "cases": 4,
    "dead": 4,
    "displaced": 70000
  },
  {
    "name": "Papua New Guinea",
    "lat": -6.430666874999999,
    "lng": 145.44681250000002,
    "cases": 16,
    "dead": 207,
    "displaced": 98700
  },
  {
    "name": "Kyrgyzstan",
    "lat": 42.45197999999999,
    "lng": 71.8237,
    "cases": 5,
    "dead": 99,
    "displaced": 45096
  },
  {
    "name": "Burma",
    "lat": 18.791875,
    "lng": 95.62058333333334,
    "cases": 12,
    "dead": 100154,
    "displaced": 1581800
  },
  {
    "name": "El Salvador",
    "lat": 14.6409,
    "lng": -89.9122,
    "cases": 11,
    "dead": 2264,
    "displaced": 309900
  },
  {
    "name": "Montenegro",
    "lat": 42.81585,
    "lng": 19.507199999999997,
    "cases": 2,
    "dead": 6,
    "displaced": 6140
  },
  {
    "name": "Albania",
    "lat": 41.85513999999999,
    "lng": 19.502926666666667,
    "cases": 15,
    "dead": 24,
    "displaced": 21885
  },
  {
    "name": "Zimbabwe",
    "lat": -18.8098375,
    "lng": 29.8500875,
    "cases": 8,
    "dead": 31,
    "displaced": 22850
  },
  {
    "name": "Kazakhstan",
    "lat": 46.7727125,
    "lng": 66.8752,
    "cases": 8,
    "dead": 54,
    "displaced": 96400
  },
  {
    "name": "Belarus",
    "lat": 52.351625000000006,
    "lng": 26.92785,
    "cases": 4,
    "dead": 6,
    "displaced": 44000
  },
  {
    "name": "Armenia",
    "lat": 40.7485,
    "lng": 44.0001,
    "cases": 1,
    "dead": 5,
    "displaced": 400
  },
  {
    "name": "Moldova",
    "lat": 47.0597,
    "lng": 28.3343,
    "cases": 3,
    "dead": 50,
    "displaced": 3300
  },
  {
    "name": "Cameroon",
    "lat": 8.138715,
    "lng": 12.0287975,
    "cases": 4,
    "dead": 31,
    "displaced": 1900
  },
  {
    "name": "Greece",
    "lat": 39.285220689655176,
    "lng": 24.29208965517242,
    "cases": 29,
    "dead": 61,
    "displaced": 5917
  },
  {
    "name": "Botswana",
    "lat": -19.92866666666667,
    "lng": 25.302733333333332,
    "cases": 3,
    "dead": 33,
    "displaced": 2400
  },
  {
    "name": "Germany",
    "lat": 50.12934375,
    "lng": 10.992723125000001,
    "cases": 16,
    "dead": 292,
    "displaced": 355812
  },
  {
    "name": "Norway",
    "lat": 62.13417499999999,
    "lng": 10.268107500000001,
    "cases": 4,
    "dead": 2,
    "displaced": 4700
  },
  {
    "name": "Azerbaijan",
    "lat": 40.835879999999996,
    "lng": 47.49852,
    "cases": 5,
    "dead": 10,
    "displaced": 1505200
  },
  {
    "name": "Togo",
    "lat": 7.4445033333333335,
    "lng": 1.2046306666666666,
    "cases": 6,
    "dead": 33,
    "displaced": 196300
  },
  {
    "name": "Morocco",
    "lat": 32.662436842105265,
    "lng": -6.083304210526316,
    "cases": 19,
    "dead": 550,
    "displaced": 5463
  },
  {
    "name": "Caribbean",
    "lat": 14.2621,
    "lng": -60.8749,
    "cases": 1,
    "dead": 3,
    "displaced": 0
  },
  {
    "name": "Martinique",
    "lat": 15.0033,
    "lng": -61.172799999999995,
    "cases": 2,
    "dead": 45,
    "displaced": 44000
  },
  {
    "name": "Mauritania",
    "lat": 16.889114285714285,
    "lng": -10.00284857142857,
    "cases": 7,
    "dead": 26,
    "displaced": 419020
  },
  {
    "name": "Panama",
    "lat": 8.734925,
    "lng": -80.06751,
    "cases": 10,
    "dead": 50,
    "displaced": 28514
  },
  {
    "name": "Saudi Arabia",
    "lat": 22.181027272727274,
    "lng": 42.56658181818181,
    "cases": 22,
    "dead": 316,
    "displaced": 1842
  },
  {
    "name": "United Arab Emerates",
    "lat": 25.1783,
    "lng": 56.1541,
    "cases": 1,
    "dead": 0,
    "displaced": 4000
  },
  {
    "name": "Czech Republic",
    "lat": 49.532288888888885,
    "lng": 17.660966666666667,
    "cases": 9,
    "dead": 81,
    "displaced": 51360
  },
  {
    "name": "Liberia",
    "lat": 6.444011666666667,
    "lng": -9.880363333333333,
    "cases": 6,
    "dead": 20,
    "displaced": 22000
  },
  {
    "name": "Mongolia",
    "lat": 47.793714285714294,
    "lng": 103.18887142857143,
    "cases": 7,
    "dead": 61,
    "displaced": 1030
  },
  {
    "name": "Bosnia",
    "lat": 44.2592,
    "lng": 18.14965,
    "cases": 2,
    "dead": 1,
    "displaced": 159
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
    "dead": 18,
    "displaced": 1900
  },
  {
    "name": "Philipines",
    "lat": 15.2748,
    "lng": 120.631,
    "cases": 1,
    "dead": 21,
    "displaced": 265000
  },
  {
    "name": "Moldava",
    "lat": 47.0678,
    "lng": 28.5625,
    "cases": 2,
    "dead": 9,
    "displaced": 20400
  },
  {
    "name": "Syria",
    "lat": 35.43996,
    "lng": 38.139019999999995,
    "cases": 5,
    "dead": 40,
    "displaced": 8000
  },
  {
    "name": "Congo",
    "lat": -1.7540477500000002,
    "lng": 19.727175,
    "cases": 4,
    "dead": 53,
    "displaced": 47500
  },
  {
    "name": "Bulgaria",
    "lat": 42.303287499999996,
    "lng": 26.057537500000006,
    "cases": 16,
    "dead": 92,
    "displaced": 18620
  },
  {
    "name": "Democratic Republic of the Congo",
    "lat": -5.06649,
    "lng": 16.0739,
    "cases": 1,
    "dead": 8,
    "displaced": 0
  },
  {
    "name": "Vanuatu",
    "lat": -16.998175,
    "lng": 167.94,
    "cases": 4,
    "dead": 1,
    "displaced": 1900
  },
  {
    "name": "Central African Republic",
    "lat": 5.07151,
    "lng": 17.85876,
    "cases": 5,
    "dead": 12,
    "displaced": 24835
  },
  {
    "name": "Siberia",
    "lat": 63.9567,
    "lng": 131.959,
    "cases": 1,
    "dead": 15,
    "displaced": 51000
  },
  {
    "name": "Bangaldesh",
    "lat": 25.9513,
    "lng": 91.8551,
    "cases": 1,
    "dead": 2632,
    "displaced": 25000000
  },
  {
    "name": "Slovakia",
    "lat": 48.85565,
    "lng": 19.7666,
    "cases": 6,
    "dead": 52,
    "displaced": 11113
  },
  {
    "name": "Tibet",
    "lat": 29.24,
    "lng": 86.8106,
    "cases": 1,
    "dead": 156,
    "displaced": 8000
  },
  {
    "name": "Belgium",
    "lat": 50.9388,
    "lng": 4.672575,
    "cases": 2,
    "dead": 4,
    "displaced": 400
  },
  {
    "name": "Croatia",
    "lat": 44.862725000000005,
    "lng": 16.116049999999998,
    "cases": 4,
    "dead": 0,
    "displaced": 2010
  },
  {
    "name": "Switzerland",
    "lat": 47.21782,
    "lng": 7.983442000000001,
    "cases": 5,
    "dead": 17,
    "displaced": 5500
  },
  {
    "name": "Democratic Republic of Congo",
    "lat": -3.872003555555555,
    "lng": 21.0451,
    "cases": 9,
    "dead": 146,
    "displaced": 156724
  },
  {
    "name": "Angola",
    "lat": -10.830449583333335,
    "lng": 14.731708333333332,
    "cases": 24,
    "dead": 327,
    "displaced": 176733
  },
  {
    "name": "Timor",
    "lat": -9.27811,
    "lng": 125.334,
    "cases": 1,
    "dead": 126,
    "displaced": 15000
  },
  {
    "name": "Belize",
    "lat": 17.7937,
    "lng": -88.75655,
    "cases": 2,
    "dead": 16,
    "displaced": 10621
  },
  {
    "name": "DR Congo",
    "lat": -3.43709875,
    "lng": 23.99035,
    "cases": 4,
    "dead": 78,
    "displaced": 28500
  },
  {
    "name": "East Timor",
    "lat": -8.703915,
    "lng": 126.303,
    "cases": 2,
    "dead": 3,
    "displaced": 1000
  },
  {
    "name": "Ivory Coast",
    "lat": 5.81611,
    "lng": -3.8819825000000003,
    "cases": 4,
    "dead": 6,
    "displaced": 820
  },
  {
    "name": "Guinea",
    "lat": 10.2944,
    "lng": -11.332445,
    "cases": 2,
    "dead": 15,
    "displaced": 43500
  },
  {
    "name": "Democratic Republic Congo",
    "lat": -1.866708,
    "lng": 17.97625,
    "cases": 2,
    "dead": 0,
    "displaced": 13500
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
    "dead": 7,
    "displaced": 2000
  },
  {
    "name": "Canary Islands",
    "lat": 28.4785,
    "lng": -16.2539,
    "cases": 1,
    "dead": 8,
    "displaced": 400
  },
  {
    "name": "Africa",
    "lat": -0.075707,
    "lng": 33.5441,
    "cases": 1,
    "dead": 160,
    "displaced": 168000
  },
  {
    "name": "Europe",
    "lat": 47.137,
    "lng": 10.6119,
    "cases": 1,
    "dead": 8,
    "displaced": 100
  },
  {
    "name": "Ireland",
    "lat": 51.98343333333333,
    "lng": -5.05675,
    "cases": 3,
    "dead": 2,
    "displaced": 200
  },
  {
    "name": "Texas",
    "lat": 29.5326,
    "lng": -98.3593,
    "cases": 1,
    "dead": 9,
    "displaced": 4000
  },
  {
    "name": "Sierra Leone",
    "lat": 7.99197,
    "lng": -12.040280000000001,
    "cases": 5,
    "dead": 427,
    "displaced": 19000
  },
  {
    "name": "Macedonia",
    "lat": 41.889359999999996,
    "lng": 21.575940000000003,
    "cases": 5,
    "dead": 5,
    "displaced": 3600
  },
  {
    "name": "Comoros Islands",
    "lat": -12.3152,
    "lng": 43.741,
    "cases": 1,
    "dead": 0,
    "displaced": 300
  },
  {
    "name": "American Samoa",
    "lat": -14.07565,
    "lng": -172.06799999999998,
    "cases": 2,
    "dead": 104,
    "displaced": 0
  },
  {
    "name": "Sudan and Eritrea",
    "lat": 15.3828,
    "lng": 36.4589,
    "cases": 1,
    "dead": 20,
    "displaced": 325000
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
    "dead": 40,
    "displaced": 15400
  },
  {
    "name": "Canada and USA",
    "lat": 49.5023,
    "lng": -122.853,
    "cases": 1,
    "dead": 4,
    "displaced": 4000
  },
  {
    "name": "Hungary",
    "lat": 48.187775,
    "lng": 19.8861,
    "cases": 4,
    "dead": 0,
    "displaced": 3150
  },
  {
    "name": "Boliva",
    "lat": -14.8766,
    "lng": -64.8904,
    "cases": 1,
    "dead": 0,
    "displaced": 40000
  },
  {
    "name": "Iraq",
    "lat": 33.90711666666666,
    "lng": 45.61451666666667,
    "cases": 6,
    "dead": 45,
    "displaced": 49400
  },
  {
    "name": "Malayasia",
    "lat": 1.86645,
    "lng": 103.354,
    "cases": 1,
    "dead": 0,
    "displaced": 12400
  },
  {
    "name": "Bosnia-Herzegovina",
    "lat": 45.07755,
    "lng": 17.9,
    "cases": 2,
    "dead": 0,
    "displaced": 1200
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
    "displaced": 400
  },
  {
    "name": "Western Sahara",
    "lat": 27.1188,
    "lng": -10.8789,
    "cases": 1,
    "dead": 0,
    "displaced": 3000
  },
  {
    "name": "Congo Republic",
    "lat": -4.1842500000000005,
    "lng": 15.3216,
    "cases": 2,
    "dead": 8,
    "displaced": 6000
  },
  {
    "name": "Lesotho",
    "lat": -29.586,
    "lng": 28.15995,
    "cases": 2,
    "dead": 35,
    "displaced": 8000
  },
  {
    "name": "Serbia",
    "lat": 43.892775,
    "lng": 20.7623625,
    "cases": 8,
    "dead": 6,
    "displaced": 44620
  },
  {
    "name": "Serbia-Montenegro",
    "lat": 45.2621,
    "lng": 20.7493,
    "cases": 1,
    "dead": 0,
    "displaced": 1500
  },
  {
    "name": "Suriname",
    "lat": 3.19053,
    "lng": -56.080200000000005,
    "cases": 2,
    "dead": 3,
    "displaced": 28500
  },
  {
    "name": "Phillippines",
    "lat": 14.6726,
    "lng": 121.091,
    "cases": 1,
    "dead": 11,
    "displaced": 12000
  },
  {
    "name": "Slovenia",
    "lat": 46.2575,
    "lng": 14.0326,
    "cases": 1,
    "dead": 6,
    "displaced": 0
  },
  {
    "name": "Serbia and Montenegro",
    "lat": 42.7619,
    "lng": 20.7976,
    "cases": 1,
    "dead": 0,
    "displaced": 3500
  },
  {
    "name": "United Kingdom",
    "lat": 53.0221875,
    "lng": -2.019048125,
    "cases": 16,
    "dead": 22,
    "displaced": 84628
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
    "dead": 5,
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
    "dead": 46,
    "displaced": 0
  },
  {
    "name": "Burkino Faso",
    "lat": 12.9425,
    "lng": -1.38925,
    "cases": 1,
    "dead": 14,
    "displaced": 20000
  },
  {
    "name": "Tasmania",
    "lat": -41.4217,
    "lng": 147.327,
    "cases": 1,
    "dead": 0,
    "displaced": 500
  },
  {
    "name": "Gaza",
    "lat": 31.4583,
    "lng": 34.4615,
    "cases": 1,
    "dead": 0,
    "displaced": 1200
  },
  {
    "name": "South Sudan",
    "lat": 7.860916666666666,
    "lng": 30.80317777777778,
    "cases": 9,
    "dead": 135,
    "displaced": 287540
  },
  {
    "name": "The Gambia",
    "lat": 13.4093,
    "lng": -16.1515,
    "cases": 1,
    "dead": 0,
    "displaced": 41
  },
  {
    "name": "Seychelles",
    "lat": -4.60943,
    "lng": 55.4243,
    "cases": 1,
    "dead": 0,
    "displaced": 106
  },
  {
    "name": "Mauritius",
    "lat": -20.670499999999997,
    "lng": 56.5416,
    "cases": 2,
    "dead": 11,
    "displaced": 223
  },
  {
    "name": "Burma/Myanmar",
    "lat": 18.3122,
    "lng": 98.1556,
    "cases": 1,
    "dead": 1,
    "displaced": 34000
  },
  {
    "name": "Saint Vincent",
    "lat": 13.9188,
    "lng": -60.9886,
    "cases": 1,
    "dead": 11,
    "displaced": 0
  },
  {
    "name": "Zimbawe",
    "lat": -19.052400000000002,
    "lng": 30.358199999999997,
    "cases": 6,
    "dead": 250,
    "displaced": 9200
  },
  {
    "name": "Papua New Gunea",
    "lat": -6.06802,
    "lng": 143.399,
    "cases": 1,
    "dead": 4,
    "displaced": 0
  },
  {
    "name": "Kazahkstan",
    "lat": 48.4049,
    "lng": 65.5929,
    "cases": 1,
    "dead": 0,
    "displaced": 5600
  },
  {
    "name": "Camaroun",
    "lat": 3.94741,
    "lng": 9.88421,
    "cases": 1,
    "dead": 0,
    "displaced": 3000
  },
  {
    "name": "Uruguay,",
    "lat": -29.9568,
    "lng": -53.5718,
    "cases": 1,
    "dead": 0,
    "displaced": 10000
  },
  {
    "name": "Bahamas",
    "lat": 24.5568,
    "lng": -76.12950000000001,
    "cases": 2,
    "dead": 5,
    "displaced": 30300
  },
  {
    "name": "Qatar",
    "lat": 21.6586,
    "lng": 51.885,
    "cases": 1,
    "dead": 1,
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
    "dead": 4,
    "displaced": 0
  },
  {
    "name": "Northern Ireland",
    "lat": 54.3667,
    "lng": -7.7468,
    "cases": 1,
    "dead": 0,
    "displaced": 100
  },
  {
    "name": "Unitd Kingdom",
    "lat": 54.1661,
    "lng": -1.88259,
    "cases": 1,
    "dead": 0,
    "displaced": 100
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
    "dead": 5,
    "displaced": 0
  },
  {
    "name": "Cyprus",
    "lat": 32.7134,
    "lng": 35.2079,
    "cases": 1,
    "dead": 4,
    "displaced": 0
  },
  {
    "name": "Libya",
    "lat": 24.5547,
    "lng": 12.6913,
    "cases": 1,
    "dead": 2,
    "displaced": 3000
  },
  {
    "name": "Democratic  Republic of the Congo",
    "lat": 2.83151,
    "lng": 23.2321,
    "cases": 1,
    "dead": 0,
    "displaced": 98000
  },
  {
    "name": "Republic of Congo",
    "lat": 0.06384999999999996,
    "lng": 17.05855,
    "cases": 2,
    "dead": 0,
    "displaced": 8000
  },
  {
    "name": "Madascar",
    "lat": -18.9495,
    "lng": 47.1838,
    "cases": 1,
    "dead": 26,
    "displaced": 40000
  },
  {
    "name": "Cote D'Iavoir",
    "lat": 5.57193,
    "lng": -4.08476,
    "cases": 1,
    "dead": 5,
    "displaced": 0
  }
];
const floodMaxes = {
  "cases": 481,
  "dead": 163915,
  "displaced": 188496618
};