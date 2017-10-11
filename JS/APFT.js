'use strict';

var formEl = document.getElementById('user-input');
var genderInput = document.getElementsByClassName('female-input');
var maleInput = document.getElementsByClassName('male-input');
// var currentUserIndex = 0;
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
  this.testHistory = [];
  this.isFat = false;
  this.fatPercent;
  this.passBodyComp = false;
  ServiceMember.allMembers.push(this);
}

ServiceMember.prototype.checkIfFat = function() {
  //check age to determine
  var i = 0;
  var tempAge = parseInt(this.age);
  if (tempAge >= 17 && tempAge <= 20) {
    i = 0;
  } else if (tempAge >= 21 && tempAge <= 27) {
    i = 1;
  } else if (tempAge >= 28 && tempAge <= 39) {
    i = 2;
  } else if (tempAge >= 40) {
    i = 3;
  } else {
    console.log('Age less than 17');
  }
  //check gender to determine which array to use
  var j = heightRange.indexOf(Math.round(this.height));
  //check cross section
  if (this.gender === 1) {
    //use male chart
    if (this.weight < maleWeightByAgeAndHeight[j][i]){
      this.isFat = false;
    }else{
      this.isFat = true;
    }
  } else {
    //use female chart
    if (this.weight < femaleWeightByAgeAndHeight[j][i]){
      this.isFat = false;
    } else {
      this.isFat = true;
    }
  }
};

ServiceMember.prototype.displayNewInput = function() {
  formEl.removeEventListener('submit', formEventHandler);
  var i;
  if (this.gender) {
    for (i = 0; i < maleInput.length; i++) {
      maleInput[i].style.display = 'block';
    }
    formEl.addEventListener('submit', bodyFatCalculationM);
  } else {
    for (i = 0; i < genderInput.length; i++) {
      genderInput[i].style.display = 'block';
    }
    formEl.addEventListener('submit', bodyFatCalculationF);
  }
};

ServiceMember.prototype.getAge = function(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var month = today.getMonth() - birthDate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  this.age = age;
  return age;
};

function bodyFatCalculationM(event) {
  event.preventDefault();
  var enteredNeck = parseInt(event.target.mneck.value);
  var enteredAbs = parseInt(event.target.abdomen.value);
  ServiceMember.allMembers[0].waist = enteredAbs;
  var circ = enteredAbs - enteredNeck;
  var j = maleHeightRange.indexOf(ServiceMember.allMembers[0].height);
  var i = maleCircumferenceRange.indexOf(circ);
  ServiceMember.allMembers[0].fatPercent = maleBodyFat[i][j];
  passBodyFatM(ServiceMember.allMembers[0].fatPercent);
}

function bodyFatCalculationF(event) {
  event.preventDefault();
  var enteredNeck = parseInt(event.target.neck.value);
  var enteredWaist = parseInt(event.target.waist.value);
  var enteredHips = parseInt(event.target.hips.value);
  ServiceMember.allMembers[0].neck = enteredNeck;
  ServiceMember.allMembers[0].waist = enteredWaist;
  ServiceMember.allMembers[0].hips = enteredHips;
  var circ = (enteredHips + enteredWaist) - enteredNeck;
  var j = femaleHeightRange.indexOf(ServiceMember.allMembers[0].height);
  var i = femaleCircumferenceRange.indexOf(circ);
  ServiceMember.allMembers[0].fatPercent = femaleBodyFat[i][j];
  passBodyFatF(ServiceMember.allMembers[0].fatPercent);
}

function passBodyFatM(bodyFat){
  var tempAge = (ServiceMember.allMembers[0].age);
  if (tempAge >= 17 && tempAge <= 20 && bodyFat <= 20) {
    ServiceMember.allMembers[0].passBodyComp = true;
  } else if (tempAge >= 21 && tempAge <= 27 && bodyFat <= 22) {
    ServiceMember.allMembers[0].passBodyComp = true;
  } else if (tempAge >= 28 && tempAge <= 39 && bodyFat <= 24) {
    ServiceMember.allMembers[0].passBodyComp = true;
  } else if (tempAge >= 40 && bodyFat <= 26) {
    ServiceMember.allMembers[0].passBodyComp = true;
  } else {
    console.log('Did not pass body composition');
  }
  saveToLocal();
}

function passBodyFatF(bodyFat){
  var tempAge = (ServiceMember.allMembers[0].age);
  if (tempAge >= 17 && tempAge <= 20 && bodyFat <= 30) {
    ServiceMember.allMembers[0].passBodyComp = true;
  } else if (tempAge >= 21 && tempAge <= 27 && bodyFat <= 32) {
    ServiceMember.allMembers[0].passBodyComp = true;
  } else if (tempAge >= 28 && tempAge <= 39 && bodyFat <= 34) {
    ServiceMember.allMembers[0].passBodyComp = true;
  } else if (tempAge >= 40 && bodyFat <= 36) {
    ServiceMember.allMembers[0].passBodyComp = true;
  } else {
    console.log('Did not pass body composition');
  }
  saveToLocal();
}

function saveToLocal(){
  localStorage.allMembers = JSON.stringify(ServiceMember.allMembers);
  window.location.href = 'HTML/TestEntry.html';
}

function formEventHandler(event) {
  event.preventDefault();
  var enteredName = event.target.name.value;
  var enteredGender = parseInt(event.target.gender.value);
  var enteredAge = parseInt(event.target.age.value);
  var enteredHeight = parseInt(event.target.height.value);
  var enteredWeight = parseInt(event.target.weight.value);

  var newUser = new ServiceMember(enteredName, enteredGender, enteredAge, enteredHeight, enteredWeight);

  newUser.checkIfFat();

  if (newUser.isFat){
    newUser.displayNewInput();
  } else {
    saveToLocal();
  }
}

for (var i = 0; i < genderInput.length; i++) {
  genderInput[i].style.display = 'none';
}
for (i = 0; i < maleInput.length; i++) {
  maleInput[i].style.display = 'none';
}

formEl.addEventListener('submit', formEventHandler);
