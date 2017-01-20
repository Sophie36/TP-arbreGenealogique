"use strict";
function Person(nom,description,poids,dimension,photo){
    if (reference == undefined || reference == "" || reference == null){
        this.reference = "01";
    }
    else {
        this.reference = reference;
    }
    var grandFather1 = new Person("","Roger",85,"M","Retraité","","");
    var grandMother1 = new Person("","Philomene",84,"F","Retraitée","","");
    var grandFather2 = new Person("","Robert",85,"M","Retraité","","");
    var grandMother2 = new Person("","Yolande",84,"F","Retraitée","","");
    var father = new Person("","Jean-pierre",66,"M","Retraité","","");
    var mother = new Person("","Thérèse",59,"F","Auxilliaire de vie","","");
    var child = new Person("","Sophie",42,"F","Développeur","","");
    var husband = new Person("","Patrick",52,"M","Plombier","","");//le mari de child
    var aine = new Person("","Florian",17,"M","Etudiant","","");//enfant aine de child
    var benjamin = new Person("","Amélie",15,"F","Etudiante","","");//enfant benjamin de child
    var cadet = new Person("","Julien",14,"M","Etudiant","","");//enfant cadet de child
    var sister1 = new Person("","Ludivine",35,"F","Caissière","","");
    var husband1 = new Person("","Léon",48,"M","Pizzaiolo","","");//le mari de sister1
    var aine1 = new Person("","Cindy",23,"F","Caissière","","");//enfant aine de sister1
    var brother = new Person("","Michael",41,"F","Agent de sécurité","","");
    var wife = new Person("","Carine",40,"F","Aide ménagère","","");//la femme de brother
    var brother1 = new Person("","David",40,"F","Cuisinier","","");
    
      initialiseProductFiche(person);