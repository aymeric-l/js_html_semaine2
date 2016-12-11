	var age = prompt("Indiquez votre age");
	var sexe = prompt("Indiquez votre sexe (homme ou femme)");
	/*if(sexe < 21cm){
	return false;
	}*/
	var natio = prompt("Indiquez votre nationnalité(française, tibétaine...)");

if(age < 18){
	age = "mineure";
}else if (age >= 18){
	age = "majeure";
}

if(sexe == "homme"){
	natio = natio.substring(0,natio.length-1); //Retirer le dernier charactere de la variable
	age = age.substring(0,age.length-1);
	alert("Vous êtes un homme "+age+" "+natio);
}else if(sexe == "femme"){
	alert("Vous êtes une femme "+age+" "+natio);
}else{
	alert("Ni homme ni femme ?\n Désolé je ne parle pas aux "+sexe);
}