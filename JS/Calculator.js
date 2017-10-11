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

ServiceMember.allMembers = JSON.parse(localStorage.getItem('allMembers'));

var pushUpsEntry = document.getElementById('pushUps');
var sitUpsEntry = document.getElementById('sitUps');
var runTimeMin = document.getElementById('runTimeMin');
var runTimeSec= document.getElementById('runTimeSec');

// console.log(apftTestResults.male['push-ups']['5'][0]['22-26']);

function handlePushUps(event) {
  event.preventDefault();
  console.log(pushUpsEntry.value);
  console.log(ServiceMember.allMembers[0]);
  ServiceMember.allMembers[0].pushUps = parseInt(pushUpsEntry.value);
};

// function handleSitUps(event) {
//   event.preventDefault();
//   ServiceMember.sitUps = sitUpsEntry.value;
// };

// function handleRunTime(event) {
//   event.preventDefault();
//   ServiceMember.runTime =
// };

pushUpsEntry.onblur = handlePushUps;
// pushUpsEntry.addEventListener('submit', handlePushUps);
// sitUpsEntry.addEventListener('change', handleSitUps);
// runTimeMin.addEventListener('input', handleRunTime);
// runTimeSec.addEventListener('input', handleRunTime);
