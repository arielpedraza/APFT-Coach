'use strict'

var ServiceMember.allMembers = [];
var maleData = [];
var femaleData = [];


function ServiceMember(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.height =
  this.weight = 
  this.maleData = 0;
  this.femaleData = 0;
  ServiceMember.allMembers.push(this);

};

new ServiceMember('Kerry', '32', true);
new ServiceMember('Ariel', '31', true);
new ServiceMember('Dre', '34', true);
