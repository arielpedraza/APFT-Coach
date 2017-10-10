'use strict';

var formEl = document.getElementById('user-input');
// var currentUserIndex = 0;
ServiceMember.allMembers = [];

function ServiceMember(name, gender, age, height, weight, neck, waist, hips) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.height = height;
  this.weight = weight;
  this.neck = neck;
  this.waist = waist;
  this.hips = hips;
  this.testHistory = [];
  this.isFat = false;
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

ServiceMember.prototype.calculateBodyFat = function() {
  //
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

function formEventHandler(event) {
  event.preventDefault();
  var enteredName = event.target.name.value;
  var enteredGender = parseInt(event.target.gender.value);
  var enteredAge = parseInt(event.target.age.value);
  var enteredHeight = parseInt(event.target.height.value);
  var enteredWeight = parseInt(event.target.weight.value);
  var enteredNeck = parseInt(event.target.neck.value);
  var enteredWaist = parseInt(event.target.waist.value);
  var enteredHips = parseInt(event.target.hips.value);

  var newUser = new ServiceMember(enteredName, enteredGender, enteredAge, enteredHeight, enteredWeight, enteredNeck, enteredWaist, enteredHips);

  newUser.checkIfFat();

  if (newUser.isFat){
    // newUser.calculateBodyFat();
    window.location.href = 'HTML/Circumference.html';
  } else {
    window.location.href = 'HTML/TestEntry.html';
    //move on to next page?
  }
}

formEl.addEventListener('submit', formEventHandler);
