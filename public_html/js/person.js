"use strict";

function Person(name,firstname,age,kind,profession,brothers,mothers,sisters){
   
    this.name = undefined;
    this.firstname = firstname;
    this.age = age;
    this.kind = kind;
    this.profession = profession;
    var brothersArray = [];
    if (brothers != undefined) {
        if (brothers instanceof Person){
            brothersArray.push(brothers);
        }
        else {
            brothersArray.push(new Person(brothers, undefined,undefined,undefined,undefined,undefined,undefined,undefined));
        }
    }
    this.brothers = brothersArray;
    
    var sistersArray = [];
    if (sisters != undefined) {
        if (sisters instanceof Person){
            sistersArray.push(sisters);
        }
        else {
            sistersArray.push(new Person(sisters, undefined,undefined,undefined,undefined,undefined,undefined,undefined));
        }
    }
    this.sisters = sistersArray;
    
    this.mother = "";
        this.addBrother = function(name, age, sexe, brothers, sisters){
    this.brothers = new Person(name, age, sexe, brothers, sisters);
        }
    this.subProduct = [];
}




    


 function initialiseProductFiche(param) {
    debugger;
    Object.keys(param).forEach(function (key) {
        debugger;
        if ("photo" != key) {
            var text = undefined != param[key] ? param[key] : "";
            document.getElementById(key).innerHTML = text;
        } else {
           document.getElementById(key).src = param[key];    
        }
    });
}
    
    

//a regarder à la maison pour vérifié la valeur de name, age, etc...    
function getValueAfterTest (value) {
    debugger;
        if (value == undefined || value == null || value == ""){
            value = undefined;//Pas de valeur
        }
        else{
            value = value;
        }
        return value;
    }