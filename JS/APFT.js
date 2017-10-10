'use strict';

var formEl = document.getElementById('user-input');
var currentUserIndex;
ServiceMember.allMembers = [];

function ServiceMember(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.height;
  this.weight;
  this.isFat = false;
  // this.maleData = 0;
  // this.femaleData = 0;
  this.testHistory = [];
  this.neck;
  this.waist;
  this.hips;
  ServiceMember.allMembers.push(this);
}

ServiceMember.prototype.checkIfFat = function() {
  //
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
  var enteredGender = event.target.gender.value;
  var enteredAge = event.target.age.value;
  //check if user in local storage
  if (checkLocalStorage(enteredName)){
    //if exists - load storage and add info to history array
    ServiceMember.allMembers = JSON.parse(localStorage.getItem('allMembers'));
    ServiceMember.allMembers[currentUserIndex].age = enteredAge;
    saveProgress();
  } else {
    //else - create new instance and save data
    new ServiceMember(enteredName, enteredGender, enteredAge);
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
