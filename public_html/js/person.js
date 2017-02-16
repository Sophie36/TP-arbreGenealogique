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
function initialiseProductFiche(persons,param) {
    //debugger;
    Object.keys(param).forEach(function (complement) {
        //debugger;
        if ("addFeature" != complement) {
            if ("profilpicture" != complement) {
                var text = undefined != param[complement] ? param[complement] : "";
                document.getElementById(persons+'_'+complement).innerHTML = text;
            } else {
               document.getElementById(persons+'_'+complement).src = param[complement];    
            }
        }
    });
}
function Person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilpicture){
    if (reference == undefined || reference == "" || reference == null){
        this.reference = "01";
    }else {
        this.reference = reference;
    }
}
//a regarder à la maison pour vérifié la valeur de name, age, etc...    
function getValueAfterTest (value) {
    debugger;
        //if (value == undefined || value == null || value == ""){
        //    value = undefined;//Pas de valeur
       // }
        //else{
           // value = value;
       // }
       // return value;
   // } MODELE
   if (name == undefined  || name == "" || name == null) {
        this.name = undefined;
    }else{
        this.name = name;
    }if (firstname == undefined  || firstname == "" || firstname == null) {
        this.firstname = prompt("Veuillez noter le prenom de la personne");
    }else{
        this.firstname = firstname;
    }if (age == undefined  || age == "" || age == null) {
        this.age = undefined;
    }else if(isNaN(age)){
        this.age=prompt("Notez l'age de la personne");
    }else {
        this.age=age;
    }if (kind == "m" || kind == "M" || kind == "f" || kind=="F") {
        this.kind = kind;
    }else {
        this.kind=kind;
    }if (profession == undefined  || profession == "" || profession == null) {
        this.profession = undefined;
    }else {
        this.profession = profession;
    }if (mother == undefined  || mother == "" || mother == null) {
        this.mother = undefined;
    }else {
        this.addmother = function(name, age, kind, profession, profilpicture){
            this.mother = new Person(name, age, kind, profession, profilpicture);
        }
    }if (father == undefined  || father == "" || father == null) {
        this.father = undefined;
    }else {
        this.addfather = function(name, age, kind, profession, profilpicture){
            this.father = new Person(name, age, kind, profession, profilpicture);
        }
    }
}
//toutes les personnes de la même famille
var grandFather1 = new Person("Defay","Roger",85,"M","Retraité","Inconnu","Inconnu","NULL","NULL","../images/icone_boy.jpg");
var grandMother1 = new Person("Defay","Philomene",84,"F","Retraitée","Inconnu","Inconnu","NULL","NULL","../images/icone_girl.jpg");
var grandFather2 = new Person("Subileau","Robert",83,"M","Retraité","Inconnu","Inconnu","NULL","NULL","../images/icone_boy.jpg");
var grandMother2 = new Person("Subileau","Yolande",82,"F","Retraitée","Inconnu","Inconnu","NULL","NULL","../images/icone_girl.jpg");
var father = new Person("Defay","Jean-pierre",66,"M","Retraité","Inconnu","Inconnu","NULL","NULL","../images/icone_boy.jpg");
var mother = new Person("Subileau","Thérèse",59,"F","Auxilliaire de vie","Inconnu","Inconnu","NULL","NULL","../images/icone_girl.jpg");
var child = new Person("Defay","Sophie",42,"F","Développeur","Inconnu","Inconnu","NULL","NULL","../images/icone_girl.jpg");
var husband = new Person("Lemaire","Patrick",52,"M","Plombier","Inconnu","Inconnu","NULL","NULL","../images/icone_boy.jpg");//le mari de child
var aine = new Person("Lemaire","Florian",17,"M","Etudiant","Inconnu","Inconnu","NULL","NULL","../images/icone_boy.jpg");//enfant aine de child
var benjamin = new Person("Lemaire","Amélie",15,"F","Etudiante","Inconnu","Inconnu","NULL","NULL","../images/icone_girl.jpg");//enfant benjamin de child
var cadet = new Person("Lemaire","Julien",14,"M","Etudiant","Inconnu","Inconnu","NULL","NULL","../images/icone_boy.jpg");//enfant cadet de child
var sister1 = new Person("Defay","Ludivine",35,"F","Caissière","Inconnu","Inconnu","NULL","NULL","../images/icone_girl.jpg");
var husband1 = new Person("Kowarzik","Léon",48,"M","Pizzaiolo","Inconnu","Inconnu","NULL","NULL","../images/icone_boy.jpg");//le mari de sister1
var aine1 = new Person("Kowarzik","Cindy",23,"F","Caissière","Inconnu","Inconnu","NULL","NULL","../images/icone_girl.jpg");//enfant aine de sister1
var brother = new Person("Defay","Michaël",41,"M","Agent de sécurité","Inconnu","Inconnu","NULL","NULL","../images/icone_boy.jpg");
var wife = new Person("Desmaison","Carine",40,"F","Aide ménagère","Inconnu","Inconnu","NULL","NULL","../images/icone_girl.jpg");//la femme de brother
var brother1 = new Person("Defay","David",40,"F","Cuisinier","Inconnu","Inconnu","NULL","NULL","../images/icone_boy.jpg"); 
    
//initialiseProductFiche(persons);
initialiseProductFiche("persons1", grandFather1);
initialiseProductFiche("persons2", grandMother1);
initialiseProductFiche("persons3", grandFather2);
initialiseProductFiche("persons4", grandMother2);
initialiseProductFiche("persons5", father);
initialiseProductFiche("persons6", mother);
initialiseProductFiche("persons7", child);
initialiseProductFiche("persons8", husband);
initialiseProductFiche("persons9", aine);
initialiseProductFiche("persons10", benjamin);
initialiseProductFiche("persons11", cadet);
initialiseProductFiche("persons12", sister1);
initialiseProductFiche("persons13", husband1);
initialiseProductFiche("persons14", aine1);
initialiseProductFiche("persons15", brother);
initialiseProductFiche("persons16", wife);
initialiseProductFiche("persons17", brother1);