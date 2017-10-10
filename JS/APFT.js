'use strict';

var ServiceMember.allMembers = [];

function ServiceMember(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.height = height;
  this.weight = weight;
  this.isTreshold = false;
  // this.maleData = 0;
  // this.femaleData = 0;
  this.testHistory = [][];
  this.neck;
  this.waist;
  this.hips;
  ServiceMember.allMembers.push(this);

};

ServiceMember.prototype.checkIfFat() {
  
}

new ServiceMember('Kerry', '32', true);
new ServiceMember('Ariel', '31', true);
new ServiceMember('Dre', '34', true);
