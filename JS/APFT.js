'use strict';

var formEl = document.getElementById('user-input');
var currentUserIndex = 0;
ServiceMember.allMembers = [];

function ServiceMember(name, gender, age, height) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.height = height;
  this.weight = 0;
  this.neck = 0;
  this.waist = 0;
  this.hips = 0;
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
  console.log(i);
  console.log(j);
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

function checkLocalStorage(name) {
  console.log('Check Local Storage called');
  if(!window.localStorage.allMembers){
    console.log('local storage does NOT exist');
    return false;
  }else{
    console.log('local storage exists!');
    for (var i in ServiceMember.allMembers){
      if (ServiceMember.allMembers[i].name === name){
        console.log('User exists in local storage');
        currentUserIndex = i;
        return true;
      }
    }
    console.log('User does not exist');
    return false;
  }
}

function saveProgress(){
  localStorage.setItem('allMembers', JSON.stringify(ServiceMember.allMembers));
}

function formEventHandler(event) {
  event.preventDefault();
  console.log('Form Event Handler called');
  var enteredName = event.target.name.value;
  var enteredGender = parseInt(event.target.gender.value);
  var enteredAge = parseInt(event.target.age.value);
  var enteredHeight = parseInt(event.target.height.value);
  //check if user in local storage
  if (checkLocalStorage(enteredName)){
    //if exists - load storage and add info to history array
    ServiceMember.allMembers = JSON.parse(localStorage.getItem('allMembers'));
    ServiceMember.allMembers[currentUserIndex].age = enteredAge;
    saveProgress();
  } else {
    //else - create new instance and save data
    new ServiceMember(enteredName, enteredGender, enteredAge, enteredHeight);
    saveProgress();
  }
  //check if height and weight within threshold
  if (ServiceMember.allMembers[currentUserIndex].checkIfFat()){
    //
  }
}

// new ServiceMember('Kerry', true, '32');
// new ServiceMember('Ariel', true, '31');
// new ServiceMember('Dre', true, '34');

formEl.addEventListener('submit', formEventHandler);
