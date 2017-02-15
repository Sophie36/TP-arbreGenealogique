"use strict";
function Person(name, firstname, age, kind, profession, mother, father, brothers, sisters, profilPicture){
    if (reference == undefined || reference == "" || reference == null){
        this.reference = "01";
    }
    else {
        this.reference = reference;
    }
    var grandFather1 = new Person("Defay","Roger",85,"M","Retraité","Inconnu","Inconnu","NULL","NULL","icone_boy.jpg");
    var grandMother1 = new Person("Defay","Philomene",84,"F","Retraitée","Inconnu","Inconnu","NULL","NULL","icone_girl.jpg");
    var grandFather2 = new Person("Subileau","Robert",83,"M","Retraité","Inconnu","Inconnu","NULL","NULL","icone_boy.jpg");
    var grandMother2 = new Person("Subileau","Yolande",82,"F","Retraitée","Inconnu","Inconnu","NULL","NULL","icone_girl.jpg");
    var father = new Person("Defay","Jean-pierre",66,"M","Retraité","Inconnu","Inconnu","NULL","NULL","icone_boy.jpg");
    var mother = new Person("Subileau","Thérèse",59,"F","Auxilliaire de vie","Inconnu","Inconnu","NULL","NULL","icone_girl.jpg");
    var child = new Person("Defay","Sophie",42,"F","Développeur","Inconnu","Inconnu","NULL","NULL","icone_girl.jpg");
    var husband = new Person("Lemaire","Patrick",52,"M","Plombier","Inconnu","Inconnu","NULL","NULL","icone_boy.jpg");//le mari de child
    var aine = new Person("Lemaire","Florian",17,"M","Etudiant","Inconnu","Inconnu","NULL","NULL","icone_boy.jpg");//enfant aine de child
    var benjamin = new Person("Lemaire","Amélie",15,"F","Etudiante","Inconnu","Inconnu","NULL","NULL","icone_girl.jpg");//enfant benjamin de child
    var cadet = new Person("Lemaire","Julien",14,"M","Etudiant","Inconnu","Inconnu","NULL","NULL","icone_boy.jpg");//enfant cadet de child
    var sister1 = new Person("Defay","Ludivine",35,"F","Caissière","Inconnu","Inconnu","NULL","NULL","icone_girl.jpg");
    var husband1 = new Person("Kowarzik","Léon",48,"M","Pizzaiolo","Inconnu","Inconnu","NULL","NULL","icone_boy.jpg");//le mari de sister1
    var aine1 = new Person("Kowarzik","Cindy",23,"F","Caissière","Inconnu","Inconnu","NULL","NULL","icone_girl.jpg");//enfant aine de sister1
    var brother = new Person("Defay","Michaël",41,"M","Agent de sécurité","Inconnu","Inconnu","NULL","NULL","icone_boy.jpg");
    var wife = new Person("Desmaison","Carine",40,"F","Aide ménagère","Inconnu","Inconnu","NULL","NULL","icone_girl.jpg");//la femme de brother
    var brother1 = new Person("Defay","David",40,"F","Cuisinier","Inconnu","Inconnu","NULL","NULL","icone_boy.jpg");
}
      initialiseProductFiche(person);