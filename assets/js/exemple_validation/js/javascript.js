function remplacerParagraphe() {
   var courriel = document.getElementById("courriel").value;
   document.getElementById("paragraphe").innerHTML = courriel;
}

function validerCourriel() {
	
	var courriel = document.getElementById("courriel").value;
	
	if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(courriel))
    {
      remplacerParagraphe();
	  var alerte = document.getElementById("alerteCourriel").style.display = "none";
    }
	else {
       var alerte = document.getElementById("alerteCourriel");
	   alerte.style.display = "inline";
	   alerte.style.left = "8px";
	   alerte.style.top = "120px";
    }
}

function afficherInformation() {	
	document.getElementById("information").style.display = "inline";
}

function enleverInformation() {
	
	document.getElementById("information").style.display = "none";
}