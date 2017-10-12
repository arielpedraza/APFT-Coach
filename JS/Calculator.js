'use strict';

ServiceMember.allMembers = [];

function ServiceMember(name, gender, age, height, weight) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.height = height;
  this.weight = weight;
  this.neck;
  this.waist;
  this.hips;
  this.ageRange = '';
  this.genderStr = '';
  this.pushUps = 0;
  this.sitUps = 0;
  this.runTime = 0;
  this.testHistory = [];
  this.isFat = false;
  this.fatPercent;
  this.passBodyComp = false;
  ServiceMember.allMembers.push(this);
}


//Parsed information from first page
ServiceMember.allMembers = JSON.parse(localStorage.getItem('allMembers'));

ServiceMember.allMembers[0].totalScore = 0;

//Get scores by cross referencing user input with JSON object data
function getScores(a) {
  var x, y, z;
  //Each event handler calls different getScores() by hard coding arguments 1, 2, or 3
  //if called by push up event handler
  if (a === 1) {
    x = apftTestResults[ServiceMember.allMembers[0].genderStr]['push-ups'][ServiceMember.allMembers[0].pushUps][0][ServiceMember.allMembers[0].ageRange];
    return x;
  }
  // if called by sit up event handler
  if (a === 2) {
    y = apftTestResults[ServiceMember.allMembers[0].genderStr]['sit-ups'][ServiceMember.allMembers[0].sitUps][0][ServiceMember.allMembers[0].ageRange];
    return y;
  }
  //Used modulo to induce 6 sec intervals to second user input so that it would match JSON run data
  // if called by run second handler
  if (a === 3) {
    var temp = parseInt(ServiceMember.allMembers[0].runTimeSec);
    if (temp % 6 ) {
      temp = 6 - (temp % 6) + temp;
  //adds difference back to seconds if not a 6 sec interval
      z = ServiceMember.allMembers[0].runTimeMin + '' + temp;
    } else {
    z = ServiceMember.allMembers[0].runTime;
    }
    z = apftTestResults[ServiceMember.allMembers[0].genderStr]['run'][z][0][ServiceMember.allMembers[0].ageRange];
    return z;
  }
};
//adds score from JSON data to empty p tags in HTML
function printScores(a, x) {
  var pEl4 = document.getElementById('totalScore');
    if (a === 1) {
    var pEl1 = document.getElementById('pushUpScore');
    pEl1.textContent = x;
    ServiceMember.allMembers[0].totalScore += x;
    pEl4.textContent = ServiceMember.allMembers[0].totalScore;
  }
    if (a === 2) {
      var pEl2 = document.getElementById('sitUpScore');
      pEl2.textContent = x;
      ServiceMember.allMembers[0].totalScore += x;
      pEl4.textContent = ServiceMember.allMembers[0].totalScore;

  }
    if (a === 3) {
    var pEl3 = document.getElementById('runTimeScore');
    pEl3.textContent = x;
    ServiceMember.allMembers[0].totalScore += x;
    pEl4.textContent = ServiceMember.allMembers[0].totalScore;
  }
};

var pushUpsEntry = document.getElementById('pushUps');
var sitUpsEntry = document.getElementById('sitUps');
var runTimeMin = document.getElementById('runTimeMin');
var runTimeSec = document.getElementById('runTimeSec');

// console.log(apftTestResults.male['push-ups']['5'][0]['22-26']);

function handlePushUps(event) {
  event.preventDefault();
  console.log(pushUpsEntry.value);
  ServiceMember.allMembers[0].pushUps = parseInt(pushUpsEntry.value);
  var score = getScores(1);
  console.log(score);
  printScores(1, score);
};

function handleSitUps(event) {
  event.preventDefault();
  console.log(sitUpsEntry.value);
  console.log(ServiceMember.allMembers[0]);
  ServiceMember.allMembers[0].sitUps = parseInt(sitUpsEntry.value);
  var score = getScores(2);
  console.log(score);
  printScores(2, score);
};

function handleRunMin(event) {
  event.preventDefault();
  ServiceMember.allMembers[0].runTimeMin = runTimeMin.value;
  console.log(ServiceMember.allMembers[0].runTime)
};

function handleRunSec(event) {
  event.preventDefault();
  ServiceMember.allMembers[0].runTimeSec = runTimeSec.value;
  ServiceMember.allMembers[0].runTime = runTimeMin.value + '' + runTimeSec.value
  var score = getScores(3);
  console.log(ServiceMember.allMembers[0].runTime);
  printScores(3, score);
};

pushUpsEntry.onblur = handlePushUps;
sitUpsEntry.onblur = handleSitUps;
runTimeMin.onblur = handleRunMin;
runTimeSec.onblur = handleRunSec;
