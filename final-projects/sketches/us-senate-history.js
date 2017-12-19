/* final project
Jen Lavallee, 12/2017

program to show the makeup of the US Senate over the course of american history
*/

// political parties
//I attempted to allign colors to the parties which they become, 
//although this is an innacurate measure as ideology switches 
//(around 1860-1930 democratic and republican platforms swapped)

const proAdmin = {
  partyColor: 'PaleVioletRed ',
  name: 'Federalist'
};

const antiAdmin = {
  partyColor: 'teal',
  name: 'Anti-Federalist'
};

const federalist = {
  partyColor: 'DarkCyan',
  name: 'Federalist'
};
const adamsR = {
  partyColor: 'tomato',
  name: 'Adams-Republican'
};

const jacksonian = {
  partyColor: 'SlateBlue',
  name: 'Jacksonian Democrat'
};

const antiJackson = {
  partyColor: 'DarkSalmon',
  name: 'Anti-Jackson'
};
const whig = {
  partyColor: 'SandyBrown',
  name: 'Whig'
};
const opposition = {
  partyColor: 'coral',
  name: 'Opposition'
};
const republican = {
  partyColor: '#dd4d4d',
  name: 'Republican'
};
const democrat = {
  partyColor: 'RoyalBlue',
  name: 'Democrat'
};
const other = {
  partyColor: 'gray',
  name: 'Other party'
};

//this will be over at line 1449 please skip down because this is a ton of data
//data obtained from senate.gov

//I was going to list an array that contained only the number of reps from each
//party each year but discovered using objects could simplify the data 
//significantly not needing to use 0's

const congress = {
  majParty: {
    party: proAdmin,
    numSeats: 16
  },
  minParty: {
    party: antiAdmin,
    numSeats: 13
  },
  other: 0
};

const congresses = [{
    //1
    majParty: {
      party: proAdmin,
      numSeats: 18
    },
    minParty: {
      party: antiAdmin,
      numSeats: 8
    },
    other: 0
  },
  //2                 
  {
    majParty: {
      party: proAdmin,
      numSeats: 16
    },
    minParty: {
      party: antiAdmin,
      numSeats: 13
    },
    other: 0
  },
  //3
  {
    majParty: {
      party: proAdmin,
      numSeats: 16
    },
    minParty: {
      party: antiAdmin,
      numSeats: 14
    },
    other: 0
  },
  //4
  {
    majParty: {
      party: federalist,
      numSeats: 21
    },
    minParty: {
      party: republican,
      numSeats: 11
    },
    other: 0
  },
  //5
  {
    majParty: {
      party: federalist,
      numSeats: 22
    },
    minParty: {
      party: republican,
      numSeats: 10
    },
    other: 0
  },
  //6
  {
    majParty: {
      party: federalist,
      numSeats: 22
    },
    minParty: {
      party: republican,
      numSeats: 10
    },
    other: 0
  },
  //7
  {
    majParty: {
      party: republican,
      numSeats: 17
    },
    minParty: {
      party: federalist,
      numSeats: 15
    },
    other: 0
  },
  //8
  {
    majParty: {
      party: republican,
      numSeats: 25
    },
    minParty: {
      party: federalist,
      numSeats: 9
    },
    other: 0
  },
  //9
  {
    majParty: {
      party: republican,
      numSeats: 27
    },
    minParty: {
      party: federalist,
      numSeats: 7
    },
    other: 0
  },
  //10
  {
    majParty: {
      party: republican,
      numSeats: 28
    },
    minParty: {
      party: federalist,
      numSeats: 6
    },
    other: 0
  },
  //11
  {
    majParty: {
      party: republican,
      numSeats: 27
    },
    minParty: {
      party: federalist,
      numSeats: 7
    },
    other: 0
  },
  //12
  {
    majParty: {
      party: republican,
      numSeats: 30
    },
    minParty: {
      party: federalist,
      numSeats: 6
    },
    other: 0
  },
  //13
  {
    majParty: {
      party: republican,
      numSeats: 28
    },
    minParty: {
      party: federalist,
      numSeats: 8
    },
    other: 0
  },
  //14
  {
    majParty: {
      party: republican,
      numSeats: 26
    },
    minParty: {
      party: federalist,
      numSeats: 12
    },
    other: 0
  },
  //15
  {
    majParty: {
      party: republican,
      numSeats: 30
    },
    minParty: {
      party: federalist,
      numSeats: 12
    },
    other: 0
  },
  //16
  {
    majParty: {
      party: republican,
      numSeats: 37
    },
    minParty: {
      party: federalist,
      numSeats: 9
    },
    other: 0
  },
  //17
  {
    majParty: {
      party: republican,
      numSeats: 44
    },
    minParty: {
      party: federalist,
      numSeats: 4
    },
    other: 0
  },
  //18
  {
    majParty: {
      party: jacksonian,
      numSeats: 31
    },
    minParty: {
      party: adamsR,
      numSeats: 17
    },
    other: 0
  },
  //19
  {
    majParty: {
      party: jacksonian,
      numSeats: 26
    },
    minParty: {
      party: adamsR,
      numSeats: 22
    },
    other: 0
  },
  //20
  {
    majParty: {
      party: jacksonian,
      numSeats: 27
    },
    minParty: {
      party: adamsR,
      numSeats: 21
    },
    other: 0
  },
  //21
  {
    majParty: {
      party: jacksonian,
      numSeats: 25
    },
    minParty: {
      party: antiJackson,
      numSeats: 23
    },
    other: 0
  },
  //22
  {
    majParty: {
      party: jacksonian,
      numSeats: 24
    },
    minParty: {
      party: antiJackson,
      numSeats: 22
    },
    other: 2
  },
  //23
  {
    majParty: {
      party: jacksonian,
      numSeats: 26
    },
    minParty: {
      party: antiJackson,
      numSeats: 20
    },
    other: 2
  },
  //24
  {
    majParty: {
      party: jacksonian,
      numSeats: 26
    },
    minParty: {
      party: antiJackson,
      numSeats: 24
    },
    other: 2
  },
  //25
  {
    majParty: {
      party: democrat,
      numSeats: 35
    },
    minParty: {
      party: whig,
      numSeats: 17
    },
    other: 0
  },
  //26
  {
    majParty: {
      party: democrat,
      numSeats: 30
    },
    minParty: {
      party: whig,
      numSeats: 22
    },
    other: 0
  },
  //27
  {
    majParty: {
      party: whig,
      numSeats: 29
    },
    minParty: {
      party: democrat,
      numSeats: 22
    },
    other: 0
  },
  //28
  {
    majParty: {
      party: whig,
      numSeats: 29
    },
    minParty: {
      party: democrat,
      numSeats: 23
    },
    other: 0
  },
  //29
  {
    majParty: {
      party: democrat,
      numSeats: 34
    },
    minParty: {
      party: whig,
      numSeats: 22
    },
    other: 0
  },
  //30
  {
    majParty: {
      party: democrat,
      numSeats: 38
    },
    minParty: {
      party: whig,
      numSeats: 21
    },
    other: 1
  },
  //31
  {
    majParty: {
      party: democrat,
      numSeats: 35
    },
    minParty: {
      party: whig,
      numSeats: 25
    },
    other: 2
  },
  //32
  {
    majParty: {
      party: democrat,
      numSeats: 36
    },
    minParty: {
      party: whig,
      numSeats: 23
    },
    other: 3
  },
  //33
  {
    majParty: {
      party: democrat,
      numSeats: 38
    },
    minParty: {
      party: whig,
      numSeats: 22
    },
    other: 2
  },
  //34
  {
    majParty: {
      party: democrat,
      numSeats: 39
    },
    minParty: {
      party: opposition,
      numSeats: 21
    },
    other: 2
  },
  //35
  {
    majParty: {
      party: democrat,
      numSeats: 41
    },
    minParty: {
      party: republican,
      numSeats: 20
    },
    other: 5
  },
  //36
  {
    majParty: {
      party: democrat,
      numSeats: 38
    },
    minParty: {
      party: republican,
      numSeats: 26
    },
    other: 2
  },
  //37
  {
    majParty: {
      party: democrat,
      numSeats: 31
    },
    minParty: {
      party: republican,
      numSeats: 15
    },
    other: 3
  },
  //38
  {
    majParty: {
      party: republican,
      numSeats: 33
    },
    minParty: {
      party: democrat,
      numSeats: 10
    },
    other: 9
  },
  //39
  {
    majParty: {
      party: republican,
      numSeats: 39
    },
    minParty: {
      party: democrat,
      numSeats: 11
    },
    other: 4
  },
  //40
  {
    majParty: {
      party: republican,
      numSeats: 57
    },
    minParty: {
      party: democrat,
      numSeats: 9
    },
    other: 0
  },
  //41
  {
    majParty: {
      party: republican,
      numSeats: 62
    },
    minParty: {
      party: democrat,
      numSeats: 12
    },
    other: 0
  },
  //42
  {
    majParty: {
      party: republican,
      numSeats: 56
    },
    minParty: {
      party: democrat,
      numSeats: 17
    },
    other: 1
  },
  //43
  {
    majParty: {
      party: republican,
      numSeats: 47
    },
    minParty: {
      party: democrat,
      numSeats: 19
    },
    other: 7
  },
  //44
  {
    majParty: {
      party: republican,
      numSeats: 46
    },
    minParty: {
      party: democrat,
      numSeats: 28
    },
    other: 1
  },
  //45
  {
    majParty: {
      party: republican,
      numSeats: 40
    },
    minParty: {
      party: democrat,
      numSeats: 35
    },
    other: 1
  },
  //46
  {
    majParty: {
      party: democrat,
      numSeats: 42
    },
    minParty: {
      party: republican,
      numSeats: 33
    },
    other: 1
  },
  //47
  {
    majParty: {
      party: republican,
      numSeats: 37
    },
    minParty: {
      party: democrat,
      numSeats: 37
    },
    other: 2
  },
  //48
  {
    majParty: {
      party: republican,
      numSeats: 38
    },
    minParty: {
      party: democrat,
      numSeats: 36
    },
    other: 2
  },
  //49
  {
    majParty: {
      party: republican,
      numSeats: 42
    },
    minParty: {
      party: democrat,
      numSeats: 34
    },
    other: 0
  },
  //50
  {
    majParty: {
      party: republican,
      numSeats: 39
    },
    minParty: {
      party: democrat,
      numSeats: 37
    },
    other: 0
  },
  //51
  {
    majParty: {
      party: republican,
      numSeats: 51
    },
    minParty: {
      party: democrat,
      numSeats: 37
    },
    other: 0
  },
  //52
  {
    majParty: {
      party: republican,
      numSeats: 47
    },
    minParty: {
      party: democrat,
      numSeats: 39
    },
    other: 2
  },
  //53
  {
    majParty: {
      party: democrat,
      numSeats: 44
    },
    minParty: {
      party: republican,
      numSeats: 40
    },
    other: 4
  },
  //54
  {
    majParty: {
      party: republican,
      numSeats: 44
    },
    minParty: {
      party: democrat,
      numSeats: 40
    },
    other: 6
  },
  //55
  {
    majParty: {
      party: republican,
      numSeats: 44
    },
    minParty: {
      party: democrat,
      numSeats: 34
    },
    other: 12
  },
  //56
  {
    majParty: {
      party: republican,
      numSeats: 57
    },
    minParty: {
      party: democrat,
      numSeats: 9
    },
    other: 0
  },
  //57
  {
    majParty: {
      party: republican,
      numSeats: 53
    },
    minParty: {
      party: democrat,
      numSeats: 26
    },
    other: 10
  },
  //58
  {
    majParty: {
      party: republican,
      numSeats: 57
    },
    minParty: {
      party: democrat,
      numSeats: 33
    },
    other: 0
  },
  //59
  {
    majParty: {
      party: republican,
      numSeats: 59
    },
    minParty: {
      party: democrat,
      numSeats: 32
    },
    other: 0
  },
  //60
  {
    majParty: {
      party: republican,
      numSeats: 61
    },
    minParty: {
      party: democrat,
      numSeats: 31
    },
    other: 0
  },
  //61
  {
    majParty: {
      party: republican,
      numSeats: 60
    },
    minParty: {
      party: democrat,
      numSeats: 32
    },
    other: 0
  },
  //62
  {
    majParty: {
      party: republican,
      numSeats: 52
    },
    minParty: {
      party: democrat,
      numSeats: 44
    },
    other: 0
  },
  //63
  {
    majParty: {
      party: democrat,
      numSeats: 51
    },
    minParty: {
      party: republican,
      numSeats: 44
    },
    other: 1
  },
  //64
  {
    majParty: {
      party: democrat,
      numSeats: 56
    },
    minParty: {
      party: republican,
      numSeats: 40
    },
    other: 0
  },
  //65
  {
    majParty: {
      party: democrat,
      numSeats: 54
    },
    minParty: {
      party: republican,
      numSeats: 42
    },
    other: 1
  },
  //66
  {
    majParty: {
      party: republican,
      numSeats: 49
    },
    minParty: {
      party: democrat,
      numSeats: 47
    },
    other: 0
  },
  //67
  {
    majParty: {
      party: republican,
      numSeats: 59
    },
    minParty: {
      party: democrat,
      numSeats: 37
    },
    other: 0
  },
  //68
  {
    majParty: {
      party: republican,
      numSeats: 53
    },
    minParty: {
      party: democrat,
      numSeats: 42
    },
    other: 1
  },
  //69
  {
    majParty: {
      party: republican,
      numSeats: 54
    },
    minParty: {
      party: democrat,
      numSeats: 41
    },
    other: 1
  },
  //70
  {
    majParty: {
      party: republican,
      numSeats: 48
    },
    minParty: {
      party: democrat,
      numSeats: 46
    },
    other: 1
  },
  //71
  {
    majParty: {
      party: republican,
      numSeats: 56
    },
    minParty: {
      party: democrat,
      numSeats: 39
    },
    other: 1
  },
  //72
  {
    majParty: {
      party: republican,
      numSeats: 48
    },
    minParty: {
      party: democrat,
      numSeats: 47
    },
    other: 1
  },
  //73
  {
    majParty: {
      party: democrat,
      numSeats: 59
    },
    minParty: {
      party: republican,
      numSeats: 36
    },
    other: 1
  },
  //74
  {
    majParty: {
      party: democrat,
      numSeats: 69
    },
    minParty: {
      party: republican,
      numSeats: 25
    },
    other: 2
  },
  //75
  {
    majParty: {
      party: democrat,
      numSeats: 76
    },
    minParty: {
      party: republican,
      numSeats: 16
    },
    other: 4
  },
  //76
  {
    majParty: {
      party: democrat,
      numSeats: 69
    },
    minParty: {
      party: republican,
      numSeats: 23
    },
    other: 4
  },
  //77
  {
    majParty: {
      party: democrat,
      numSeats: 66
    },
    minParty: {
      party: republican,
      numSeats: 28
    },
    other: 2
  },
  //78
  {
    majParty: {
      party: democrat,
      numSeats: 57
    },
    minParty: {
      party: republican,
      numSeats: 38
    },
    other: 1
  },
  //79
  {
    majParty: {
      party: democrat,
      numSeats: 57
    },
    minParty: {
      party: republican,
      numSeats: 38
    },
    other: 1
  },
  //80
  {
    majParty: {
      party: republican,
      numSeats: 51
    },
    minParty: {
      party: democrat,
      numSeats: 45
    },
    other: 0
  },
  //81
  {
    majParty: {
      party: democrat,
      numSeats: 54
    },
    minParty: {
      party: republican,
      numSeats: 42
    },
    other: 0
  },
  //82
  {
    majParty: {
      party: democrat,
      numSeats: 49
    },
    minParty: {
      party: republican,
      numSeats: 47
    },
    other: 0
  },
  //83
  {
    majParty: {
      party: republican,
      numSeats: 48
    },
    minParty: {
      party: democrat,
      numSeats: 47
    },
    other: 1
  },
  //84
  {
    majParty: {
      party: democrat,
      numSeats: 48
    },
    minParty: {
      party: republican,
      numSeats: 47
    },
    other: 1
  },
  //85
  {
    majParty: {
      party: democrat,
      numSeats: 49
    },
    minParty: {
      party: republican,
      numSeats: 47
    },
    other: 0
  },
  //86
  {
    majParty: {
      party: democrat,
      numSeats: 65
    },
    minParty: {
      party: republican,
      numSeats: 35
    },
    other: 0
  },
  //87
  {
    majParty: {
      party: democrat,
      numSeats: 64
    },
    minParty: {
      party: republican,
      numSeats: 36
    },
    other: 0
  },
  //88
  {
    majParty: {
      party: democrat,
      numSeats: 66
    },
    minParty: {
      party: republican,
      numSeats: 34
    },
    other: 0
  },
  //89
  {
    majParty: {
      party: democrat,
      numSeats: 68
    },
    minParty: {
      party: republican,
      numSeats: 32
    },
    other: 0
  },
  //90
  {
    majParty: {
      party: democrat,
      numSeats: 64
    },
    minParty: {
      party: republican,
      numSeats: 36
    },
    other: 0
  },
  //91
  {
    majParty: {
      party: democrat,
      numSeats: 57
    },
    minParty: {
      party: republican,
      numSeats: 43
    },
    other: 0
  },
  //92
  {
    majParty: {
      party: democrat,
      numSeats: 54
    },
    minParty: {
      party: republican,
      numSeats: 44
    },
    other: 2
  },
  //93
  {
    majParty: {
      party: democrat,
      numSeats: 56
    },
    minParty: {
      party: republican,
      numSeats: 42
    },
    other: 2
  },
  //94
  {
    majParty: {
      party: democrat,
      numSeats: 61
    },
    minParty: {
      party: republican,
      numSeats: 37
    },
    other: 2
  },
  //95
  {
    majParty: {
      party: democrat,
      numSeats: 61
    },
    minParty: {
      party: republican,
      numSeats: 38
    },
    other: 1
  },
  //96
  {
    majParty: {
      party: democrat,
      numSeats: 58
    },
    minParty: {
      party: republican,
      numSeats: 41
    },
    other: 1
  },
  //97
  {
    majParty: {
      party: republican,
      numSeats: 53
    },
    minParty: {
      party: democrat,
      numSeats: 46
    },
    other: 1
  },
  //98
  {
    majParty: {
      party: republican,
      numSeats: 55
    },
    minParty: {
      party: democrat,
      numSeats: 45
    },
    other: 0
  },
  //99
  {
    majParty: {
      party: republican,
      numSeats: 53
    },
    minParty: {
      party: democrat,
      numSeats: 47
    },
    other: 0
  },
  //100
  {
    majParty: {
      party: democrat,
      numSeats: 55
    },
    minParty: {
      party: republican,
      numSeats: 45
    },
    other: 0
  },
  //101
  {
    majParty: {
      party: democrat,
      numSeats: 55
    },
    minParty: {
      party: republican,
      numSeats: 45
    },
    other: 0
  },
  //102
  {
    majParty: {
      party: democrat,
      numSeats: 56
    },
    minParty: {
      party: republican,
      numSeats: 44
    },
    other: 0
  },
  //103
  {
    majParty: {
      party: democrat,
      numSeats: 57
    },
    minParty: {
      party: republican,
      numSeats: 43
    },
    other: 0
  },
  //104
  {
    majParty: {
      party: republican,
      numSeats: 52
    },
    minParty: {
      party: democrat,
      numSeats: 48
    },
    other: 0
  },
  //105
  {
    majParty: {
      party: republican,
      numSeats: 55
    },
    minParty: {
      party: democrat,
      numSeats: 45
    },
    other: 0
  },
  //106
  {
    majParty: {
      party: republican,
      numSeats: 55
    },
    minParty: {
      party: democrat,
      numSeats: 45
    },
    other: 0
  },
  //107
  {
    majParty: {
      party: democrat,
      numSeats: 50
    },
    minParty: {
      party: republican,
      numSeats: 50
    },
    other: 0
  },
  //108
  {
    majParty: {
      party: republican,
      numSeats: 51
    },
    minParty: {
      party: democrat,
      numSeats: 48
    },
    other: 0
  },
  //109
  {
    majParty: {
      party: democrat,
      numSeats: 55
    },
    minParty: {
      party: republican,
      numSeats: 44
    },
    other: 1
  },
  //110
  {
    majParty: {
      party: democrat,
      numSeats: 49
    },
    minParty: {
      party: republican,
      numSeats: 49
    },
    other: 2
  },
  //111
  {
    majParty: {
      party: democrat,
      numSeats: 57
    },
    minParty: {
      party: republican,
      numSeats: 41
    },
    other: 2
  },
  //112
  {
    majParty: {
      party: democrat,
      numSeats: 51
    },
    minParty: {
      party: republican,
      numSeats: 47
    },
    other: 2
  },
  //113
  {
    majParty: {
      party: democrat,
      numSeats: 53
    },
    minParty: {
      party: republican,
      numSeats: 45
    },
    other: 2
  },
  //114
  {
    majParty: {
      party: republican,
      numSeats: 54
    },
    minParty: {
      party: democrat,
      numSeats: 44
    },
    other: 2
  },
  //115
  {
    majParty: {
      party: republican,
      numSeats: 52
    },
    minParty: {
      party: democrat,
      numSeats: 46
    },
    other: 2
  }
]
//entering that data is a pain!

//I probably should have set up the canvas so that I can change the 
//size of it easily and resize the whole project, maybe next time.

function setup() {
  createCanvas(800, 800);

  //references a library element and is hard to change the appearance of
  slider = createSlider(0, 114, 0);
  slider.position(40, 100);
  slider.style('width', '720px');
}

function draw() {
  background('#fbf9ec');

  congressIndex = slider.value();
  var curCongress = congresses[congressIndex];
  var seatMult = 9
  var barWidthmaj = curCongress.majParty.numSeats * seatMult;
  var barWidthmin = curCongress.minParty.numSeats * seatMult;
  var barHeight = 40;
  var barX = 40;
  var barY = 140;
  var barText = 80;
  var lineDistance = 1.5;
  var congressNum = congressIndex + 1;
  var barWidthOther = curCongress.other * 6;
  var textStart = 420;
  var textSpacer = 20;

  //This loop shows a lighter line every congresses aka 2 years
  for (var j = 0; j < 81; j++) {
    stroke('#f0eee3');
    strokeWeight(1);
    line(j * seatMult + barX, 130, j * seatMult + barX, 350);
  }

  //this gives a drop shadow effect 
  fill('#cdcdc1');
  noStroke();
  quad(barX, barY, barX + barWidthmaj, barY, barX + barWidthmaj - seatMult, barY + barHeight + seatMult, barX, barY + barHeight);
  
  fill('#cdcdc1');
  noStroke();
  quad(barX, barY * lineDistance, barX + barWidthmin, barY * lineDistance, barX + barWidthmin - seatMult, barY * lineDistance + barHeight + seatMult, barX, barY * lineDistance + barHeight);

  //tried to make a drop shadow for other but the shadow 
  //goes before 0 which is not ideal and I was too lazy
  //to write a statment excluding it

  //This loop shows a darker line every 5 congresses aka 10 years and places numbers
  for (var i = 0; i < 81; i += 5) {
    stroke('#bebeb6');
    strokeWeight(1);
    line(i * seatMult + barX, 130, i * seatMult + barX, 350);
    text(i, i * seatMult + barX - 5, 365);
  }

  //calling objects! to create the majority party bar
  fill(curCongress.majParty.party.partyColor);
  noStroke();
  rect(barX, barY, barWidthmaj, barHeight);
  fill('#fbf9ec');
  text(curCongress.majParty.party.name, barX + 20, barY + barHeight / 1.75);

  //calling objects! to create the minority party bar
  fill(curCongress.minParty.party.partyColor);
  noStroke();
  rect(barX, barY * lineDistance, barWidthmin, barHeight);
  fill('#fbf9ec');
  text(curCongress.minParty.party.name, barX + 20, barY * lineDistance + barHeight / 1.75);

  //calling objects! to create the other party bar
  fill('gray');
  noStroke();
  rect(barX, barY * lineDistance * 1.3333, barWidthOther, barHeight);
  text('Other', barX + barWidthOther + 10, barY * lineDistance * 1.333333 + barHeight / 2);

  //title
  textStyle(NORMAL);
  textSize(20);
  text('PARTY MEMBERSHIP IN THE US SENATE BY CONGRESS', barX, 40);

  textStyle(NORMAL);
  textSize(12);
  text('Displaying congress number:', barX, 70);

  //this calls what congress is active to be displayed I would love
  //to have alligned with the slider but re-styling the slider was too time consuming
  textStyle(BOLD);
  color('black');
  text(congressNum, barX + 170, 70);
 
  //sitation of data
  textStyle(ITALIC);
	text('Senate data obtained from: Senate.gov', 500, 720);
  
  //historical events
  textStyle(NORMAL);
  textSize(16);
  text('List of major events by congress number:', barX, textStart-10);

  // there might have been a better way to include this but it 
  //was an after thought. Ideally it would appear based on slider position.
  textStyle(NORMAL);
  textSize(12);
  text('1803, Louisiana Purchase', barText, textStart + textSpacer);
  text('1849, Gold is found in California', barText, textStart + textSpacer * 2);
  text('1861, The Civil War Begins', barText, textStart + textSpacer * 3);
  text('1870, Slavery has ended and black men are granted the vote', barText, textStart + textSpacer * 4);
  text('1917, World War I begins', barText, textStart + textSpacer * 5);
  text('1919, Women gain right to vote', barText, textStart + textSpacer * 6);
  text('1929, Start of the Depression', barText, textStart + textSpacer * 7);
  text('1941, Pearl Harbor is attacked', barText, textStart + textSpacer * 8);
  text('1945, Atomic Bombs are dropped on Japan', barText, textStart + textSpacer * 9);
  text('1964, Civil Rights Act', barText, textStart + textSpacer * 10);
  text('1969, Apollo 11 lands on the moon, Vietnam draft starts', barText, textStart + textSpacer * 11);
  text('2001, Twin towers attacked', barText, textStart + textSpacer * 12);

  textStyle(BOLD);
  text('8', barX, textStart + textSpacer);
  text('30', barX, textStart + textSpacer * 2);
  text('37', barX, textStart + textSpacer * 3);
  text('41', barX, textStart + textSpacer * 4);
  text('65', barX, textStart + textSpacer * 5);
  text('66', barX, textStart + textSpacer * 6);
  text('71', barX, textStart + textSpacer * 7);
  text('77', barX, textStart + textSpacer * 8);
  text('79', barX, textStart + textSpacer * 9);
  text('88', barX, textStart + textSpacer * 10);
  text('91', barX, textStart + textSpacer * 11);
  text('107', barX, textStart + textSpacer * 12);

}
