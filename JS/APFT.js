'use strict';

var formEl = document.getElementById('user-input');
var formEl2 = document.getElementById('user-input2');
var genderInput = document.getElementsByClassName('female-input');
var maleInput = document.getElementsByClassName('male-input');
var firstSubmit = document.getElementById('first-submit');
var secondSubmit = document.getElementById('second-submit');
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
    formEl2.addEventListener('submit', bodyFatCalculationM);
    alert('Unfortunately, you didn\'t pass the height/weight test.  Please enter your neck and abdomen tape measurements.');
    secondSubmit.style.display = 'block';
  } else {
    for (i = 0; i < genderInput.length; i++) {
      genderInput[i].style.display = 'block';
    }
    formEl2.addEventListener('submit', bodyFatCalculationF);
    alert('Unfortunately, you didn\'t pass the height/weight test.  Please enter your neck, waist, and hip tape measurements.');
    secondSubmit.style.display = 'block';
  }

  firstSubmit.style.display = 'none';
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

ServiceMember.prototype.setAgeRange = function() {
  if (this.age >= 17 && this.age <= 21) {
    this.ageRange = '17-21';
  } else if (this.age >= 22 && this.age <= 26) {
    this.ageRange = '22-26';
  } else if (this.age >= 27 && this.age <= 31) {
    this.ageRange = '27-31';
  } else if (this.age >= 32 && this.age <= 36) {
    this.ageRange = '32-36';
  } else if (this.age >= 37 && this.age <= 41) {
    this.ageRange = '37-41';
  } else if (this.age >= 42 && this.age <= 46) {
    this.ageRange = '42-46';
  } else if (this.age >= 47 && this.age <= 51) {
    this.ageRange = '47-51';
  } else if (this.age >= 52 && this.age <= 56) {
    this.ageRange = '52-56';
  } else if (this.age >= 57 && this.age <= 61) {
    this.ageRange = '57-61';
  } else if (this.age >= 62) {
    this.ageRange = '62+';
  } else {
    console.log('age below 17');
  }
};

ServiceMember.prototype.setGenderStr = function() {
  if(this.gender){
    this.genderStr = 'male';
  }else{
    this.genderStr = 'female';
  }
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
  localStorage.setItem('allMembers', JSON.stringify(ServiceMember.allMembers));
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
  newUser.setAgeRange();
  newUser.checkIfFat();
  newUser.setGenderStr();

  if (newUser.isFat){
    newUser.displayNewInput();
  } else {
    saveToLocal();
  }
}

for (var i = 0; i < genderInput.length; i++) {
  genderInput[i].style.display = 'none';
  secondSubmit.style.display = 'none';
}
for (i = 0; i < maleInput.length; i++) {
  maleInput[i].style.display = 'none';
  secondSubmit.style.display = 'none';
}

formEl.addEventListener('submit', formEventHandler);
localStorage.clear();
