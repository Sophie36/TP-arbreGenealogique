"use strict";

function Person(name,firstname,age,kind,profession,brothers,mothers,sisters,profilpicture){
   
    this.name = undefined;
    this.firstname = firstname;
    this.age = age;
    this.kind = kind;
    this.profession = profession;
    this.mother = mother;
    this.father = father;
    this.brothers = brothers;
    this.sisters = sisters;
    this.profilpicture = profilpicture;
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
        //if (value == undefined || value == null || value == ""){
            value = undefined;//Pas de valeur
       // }
        //else{
           // value = value;
       // }
       // return value;
   // } MODELE
   if (name == undefined  || name == "" || name == null) {
        this.name = undefined;
    }
    else{
        this.name = name;
    }
    if (firstname == undefined  || firstname == "" || firstname == null) {
        this.firstname = prompt("Veuillez noter le prenom de la personne");
    }
    else{
        this.firstname = firstname;
    }
    if (age == undefined  || age == "" || age == null) {
        this.age = undefined;
    }
    else if(isNaN(age)){
        this.age=prompt("Notez l'age de la personne");
    }
    else {
        this.age=age;
    }
    if (kind == "m" || kind == "M" || kind == "f" || kind=="F") {
        this.kind = kind;
    } 
    else {
        this.kind=kind;
    }
    if (profession == undefined  || profession == "" || profession == null) {
        this.profession = undefined;
    }
    else {
        this.profession = profession;
    }
    if (mother == undefined  || mother == "" || mother == null) {
        this.mother = undefined;
    }
    else {
        this.addmother = function(name, age, kind, profession, profilpicture){
            this.mother = new Person(name, age, kind, profession, profilpicture);
        }
    }
    if (father == undefined  || father == "" || father == null) {
        this.father = undefined;
    }
    else {
        this.addfather = function(name, age, kind, profession, profilpicture){
            this.father = new Person(name, age, kind, profession, profilpicture);
        }
    }
}
