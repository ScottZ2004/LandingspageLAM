let fotonummer, fotobreedte, aantalfotos, fotoslider;

function setupFotoslider(){
    // alert("lol")
    fotonummer = 0;
    fotobreedte = 400; // Pas dit aan naar de breedte van jouw foto's
    fotoslider = document.getElementById("fotoslider");
    let volgendeKnop = document.getElementById("volgende-btn");
    let vorigeKnop = document.getElementById("vorige-btn");
    aantalfotos = fotoslider.children.length;
    console.log(aantalfotos);
    volgendeKnop.addEventListener('click', volgendeFoto);
    vorigeKnop.addEventListener('click', vorigeFoto);
}

function volgendeFoto(){
    // alert('volgende geklikt');
    // De variabele fotonummer met 1 ophogen (bij de eerste foto is fotonummer 0)
    // Bij de tweede foto wordt deze dus 1, bij de derde foto 2 enzovoorts.
    fotonummer += 1;

    // Als fotonummer gelijk is aan het aantal foto's willen we weer terug naar de eerste foto
    if (fotonummer === aantalfotos) {
        fotonummer = 0;
    }

    // Dit is de berekening die ik hierboven heb uitgelegd
    // Bereken aan de hand van het fotonummer hoe veel de slider naar links moet in de viewport
    let afstandNaarLinks = -1 * (fotonummer * fotobreedte)

    // Zet het style attribuut van de fotoslider (vergeet de px niet)
    fotoslider.style.left = afstandNaarLinks + "px";
}

function vorigeFoto(){
    // alert('volgende geklikt');
    // De variabele fotonummer met 1 ophogen (bij de eerste foto is fotonummer 0)
    // Bij de tweede foto wordt deze dus 1, bij de derde foto 2 enzovoorts.
    fotonummer -= 1;

    // Als fotonummer gelijk is aan het aantal foto's willen we weer terug naar de eerste foto
    if (fotonummer < 0) {
        fotonummer = aantalfotos - 1;
    }

    // Dit is de berekening die ik hierboven heb uitgelegd
    // Bereken aan de hand van het fotonummer hoe veel de slider naar links moet in de viewport
    let afstandNaarLinks = -1 * (fotonummer * fotobreedte)

    // Zet het style attribuut van de fotoslider (vergeet de px niet)
    fotoslider.style.left = afstandNaarLinks + "px";
}

window.addEventListener('DOMContentLoaded', setupFotoslider)

//hieronder hover functie

function setuphoverevent(){
    // alert("lol");
    let Foto1 = document.getElementById("foto1");
    let Foto2 = document.getElementById("foto2");
    let Foto3 = document.getElementById("foto3");
    let Foto4 = document.getElementById("foto4");
    
    let Foto6 = document.getElementById("foto6");
    

    let Foto1Uit = document.getElementById("foto1");
    let Foto2Uit = document.getElementById("foto2");
    let Foto3Uit = document.getElementById("foto3");
    let Foto4Uit = document.getElementById("foto4");
    
    let Foto6Uit = document.getElementById("foto6");
    
    
    Foto1.addEventListener('mouseover', TextFoto1);
    Foto2.addEventListener('mouseover', TextFoto2);
    Foto3.addEventListener('mouseover', TextFoto3);
    Foto4.addEventListener('mouseover', TextFoto4);
    
    Foto6.addEventListener('mouseover', TextFoto6);
    
    Foto1Uit.addEventListener('mouseout', TextFoto1Uit);
    Foto2Uit.addEventListener('mouseout', TextFoto2Uit);
    Foto3Uit.addEventListener('mouseout', TextFoto3Uit);
    Foto4Uit.addEventListener('mouseout', TextFoto4Uit);
    
    Foto6Uit.addEventListener('mouseout', TextFoto6Uit);
    

}

function TextFoto1(){
    document.getElementById("text-fotoslider").innerHTML = "Artwork: 'Het laatste avondmaal'";
    document.getElementById("text-fotoslider").style.color = "black";
}

function TextFoto2(){
    document.getElementById("text-fotoslider").innerHTML = "Artwork: 'Bon Appétit!'";
    document.getElementById("text-fotoslider").style.color = "black";
}

function TextFoto3(){
    document.getElementById("text-fotoslider").innerHTML = "Artwork: 'De Koffiepot'";
    document.getElementById("text-fotoslider").style.color = "black";
}

function TextFoto4(){
    document.getElementById("text-fotoslider").innerHTML = "Artwork: 'Woman with shopping bag'";
    document.getElementById("text-fotoslider").style.color = "black";
}



function TextFoto6(){
    document.getElementById("text-fotoslider").innerHTML = "Artwork: 'Food Chain Project'";
    document.getElementById("text-fotoslider").style.color = "black";
}


// vanaf hier de functies uit

function TextFoto1Uit(){
    document.getElementById("text-fotoslider").innerHTML = ".";
    document.getElementById("text-fotoslider").style.color = "white";
}

function TextFoto2Uit(){
    document.getElementById("text-fotoslider").innerHTML = ".";
    document.getElementById("text-fotoslider").style.color = "white";
}

function TextFoto3Uit(){
    document.getElementById("text-fotoslider").innerHTML = ".";
    document.getElementById("text-fotoslider").style.color = "white";
}

function TextFoto4Uit(){
    document.getElementById("text-fotoslider").innerHTML = ".";
    document.getElementById("text-fotoslider").style.color = "white";
}



function TextFoto6Uit(){
    document.getElementById("text-fotoslider").innerHTML = ".";
    document.getElementById("text-fotoslider").style.color = "white";
}



window.addEventListener('DOMContentLoaded', setuphoverevent)