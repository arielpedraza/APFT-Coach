'use strict';

var pEl;
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

ServiceMember.allMembers[0].runTimeMin = '0';
ServiceMember.allMembers[0].runTimeSec = '00';
ServiceMember.allMembers[0].totalScore = 0;
ServiceMember.allMembers[0].runScore = 0;
ServiceMember.allMembers[0].sitUpsScore = 0;
ServiceMember.allMembers[0].pushUpsScore = 0;

//Get scores by cross referencing user input with JSON object data
function getScores(a) {
  var x, y, z;
  //Each event handler calls different getScores() by hard coding arguments 1, 2, or 3
  //if called by push up event handler
  if (a === 1) {
    if (ServiceMember.allMembers[0].pushUps < 5) {
      x = 0;
      ServiceMember.allMembers[0].pushUpsScore = x;
    } else if (ServiceMember.allMembers[0].gender && ServiceMember.allMembers[0].pushUps > 77) {
      x = 100;
      ServiceMember.allMembers[0].pushUpsScore = x;
    } else if (!ServiceMember.allMembers[0].gender && ServiceMember.allMembers[0].pushUps > 50) {
      x = 100;
      ServiceMember.allMembers[0].pushUpsScore = x;
    } else {
      x = apftTestResults[ServiceMember.allMembers[0].genderStr]['push-ups'][ServiceMember.allMembers[0].pushUps][0][ServiceMember.allMembers[0].ageRange];
      ServiceMember.allMembers[0].pushUpsScore = x;
    }
    pEl = document.getElementById('pushUpScore');
    pEl.textContent = 'Score: ' + x;
  }
  // if called by sit up event handler
  if (a === 2) {
    if (ServiceMember.allMembers[0].sitUps < 21) {
      y = 0;
      ServiceMember.allMembers[0].sitUpsScore = y;
    } else if (ServiceMember.allMembers[0].sitUps > 82) {
      y = 100;
      ServiceMember.allMembers[0].sitUpsScore = y;
    } else {
      y = apftTestResults[ServiceMember.allMembers[0].genderStr]['sit-ups'][ServiceMember.allMembers[0].sitUps][0][ServiceMember.allMembers[0].ageRange];
      ServiceMember.allMembers[0].sitUpsScore = y;
    }
    pEl = document.getElementById('sitUpScore');
    pEl.textContent = 'Score: ' + y;
  }
  // if called by run second handler
  if (a === 3) {
    //Used modulo to induce 6 sec intervals to second user input so that it would match JSON run data
    var temp = parseInt(ServiceMember.allMembers[0].runTimeSec);
    if (temp % 6 || temp === 0) {
      temp = 6 - (temp % 6) + temp;
      //adds difference back to seconds if not a 6 sec interval
      if (temp < 10){
        z = ServiceMember.allMembers[0].runTimeMin + '0' + temp;
      } else if (temp === 60) {
        z = parseInt(ServiceMember.allMembers[0].runTimeMin) + 1;
        z = z + '00';
      } else {
        z = ServiceMember.allMembers[0].runTimeMin + '' + temp;
      }
    } else {
      ServiceMember.allMembers[0].runTime = runTimeMin.value + '' + runTimeSec.value;
      z = ServiceMember.allMembers[0].runTime;
    }
    //assign points if outside table bounds.
    if (parseInt(z) < 1254) {
      z = 100;
      ServiceMember.allMembers[0].runScore = z;
    } else if (parseInt(z) > 2630) {
      z = 0;
      ServiceMember.allMembers[0].runScore = z;
    } else {
      z = apftTestResults[ServiceMember.allMembers[0].genderStr]['run'][z][0][ServiceMember.allMembers[0].ageRange];
      ServiceMember.allMembers[0].runScore = z;
    }
    pEl = document.getElementById('runTimeScore');
    pEl.textContent = 'Score: ' + z;
  }
  updateTotalScore();
}

function updateTotalScore() {
  pEl = document.getElementById('totalScore');
  console.log(ServiceMember.allMembers[0].pushUpsScore);
  console.log(ServiceMember.allMembers[0].sitUpsScore);
  console.log(ServiceMember.allMembers[0].runScore);
  console.log(ServiceMember.allMembers[0].totalScore);
  ServiceMember.allMembers[0].totalScore = ServiceMember.allMembers[0].pushUpsScore + ServiceMember.allMembers[0].sitUpsScore + ServiceMember.allMembers[0].runScore;
  pEl.textContent = 'Total Score: ' + ServiceMember.allMembers[0].totalScore;
}

var pushUpsEntry = document.getElementById('pushUps');
var sitUpsEntry = document.getElementById('sitUps');
var runTimeMin = document.getElementById('runTimeMin');
var runTimeSec = document.getElementById('runTimeSec');

// console.log(apftTestResults.male['push-ups']['5'][0]['22-26']);

function handlePushUps(event) {
  event.preventDefault();
  if (pushUpsEntry.value && (parseInt(pushUpsEntry.value) >= 0)){
    ServiceMember.allMembers[0].pushUps = parseInt(pushUpsEntry.value);
    getScores(1);
  } else {
    pushUpsEntry.value = null;
  }
};

function handleSitUps(event) {
  event.preventDefault();
  if (sitUpsEntry.value && (parseInt(sitUpsEntry.value) >= 0)){
    ServiceMember.allMembers[0].sitUps = parseInt(sitUpsEntry.value);
    getScores(2);
  } else {
    sitUpsEntry.value = null;
  }
};

function handleRunMin(event) {
  event.preventDefault();
  if (runTimeMin.value && (parseInt(runTimeMin.value) >= 0)) {
    ServiceMember.allMembers[0].runTimeMin = runTimeMin.value;
  } else {
    runTimeMin.value = null;
  }
};

function handleRunSec(event) {
  event.preventDefault();
  if (runTimeSec.value && (parseInt(runTimeSec.value) >= 0) && (parseInt(runTimeSec.value) < 60) && !(runTimeSec.value.length > 2)) {
    ServiceMember.allMembers[0].runTimeSec = runTimeSec.value;
    // ServiceMember.allMembers[0].runTime = runTimeMin.value + '' + runTimeSec.value;
    getScores(3);
  } else {
    runTimeSec.value = null;
  }
};

pushUpsEntry.onblur = handlePushUps;
sitUpsEntry.onblur = handleSitUps;
runTimeMin.onblur = handleRunMin;
runTimeSec.onblur = handleRunSec;
