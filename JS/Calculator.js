'use strict';

function ServiceMember(gender, age) {
  this.gender = gender;
  this.age = age;
  this.ageRange = '';
  this.pushUps = 0;
  this.sitUps = 0;
  this.runTime = 0;
};

var pushUpsEntry = document.getElementById('pushUps');
var sitUpsEntry = document.getElementById('sitUps');
var runTimeEntry = document.getElementById('runTime');

console.log(apftTestResults.male['push-ups']['5'][0]['22-26']);

function handlePushUps(e) {
  e.preventDefault();

  var x = ServiceMember.allMembers[0].pushUps;
  var pushUps = parseInt(e.target.pushUps.value);
  x = pushUps;
};

function handleSitUps(e) {
  e.preventDefault();
  var y = ServiceMember.allMembers[0].sitUps;
  var sitUps = parseInt(e.target.sitUps.value);
  y = sitUps;
};

function handleRunTime(e) {
  e.preventDefault();
  var z = ServiceMember.allMembers[0].runTime;
  var runTime = parseInt(e.target.runTime.value);
  z = runTime;
};

pushUpsEntry.addEventListener('input', handlePushUps);
sitUpsEntry.addEventListener('input', handleSitUps);
runTimeEntry.addEventListener('input', handleRunTime);
