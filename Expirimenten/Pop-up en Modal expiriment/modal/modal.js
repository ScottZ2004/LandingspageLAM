// vanaf hier komt de code voor de code voor de modal
// de knoppen 
var knop1 = document.getElementById("knop1")

var knop2 = document.getElementById("knop2")

var knop3 = document.getElementById("knop3")

// de modal
var modal = document.getElementById("myModal");

// de button die de modal opent
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// de modal openen wanneer er op de knop gebrukt word 
btn.onclick = function openModal() {
    modal.style.display = "block";
}

// sluit de modal wanneer de gebruiker op het kruisje(x)klikt
span.onclick = function() {
    modal.style.display = "none";
}

// sluit de modal wanneer de gebruiker er buiten klikt
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// submit button (werkt niet)
//let mijnButton = document.getElementById("mijnButton");

//mijnButton.addEventListener("click", ()=>{
                      
//window.alert(datum + "Dit is een test om te kijken of de knop werkt.");
//}) 

// vanaf hier komt de code voor de quiz!!!!!!!!





function SpeelQuiz(){
    var c = 0;
    // vraag1
    if (document.getElementById("knop1vraag1").checked){
        c++;
    } else if (document.getElementById("knop2vraag1").checked){
        c++;
        c++;
    } else if (document.getElementById("knop3vraag1").checked){
        c++;
        c++;
        c++;
    }
    // vraag2
    if (document.getElementById("knop1vraag2").checked){
        c++;
        c++;
    } else if (document.getElementById("knop2vraag2").checked){
        c++;
        
    } else if (document.getElementById("knop3vraag2").checked){
        c++;
        c++;
        c++;
    }
    // vraag3
    if (document.getElementById("knop1vraag3").checked){
        c++;
        c++;
    } else if (document.getElementById("knop2vraag3").checked){
        c++;
        c++;
        c++;
    } else if (document.getElementById("knop3vraag3").checked){
        c++;
        
    }
    // vraag4
    if (document.getElementById("knop1vraag4").checked){
        c++;
        c++;
        c++;
    } else if (document.getElementById("knop2vraag4").checked){
        c++;
        c++;
    } else if (document.getElementById("knop3vraag4").checked){
        c++;
        
    }
    // vraag5
    if (document.getElementById("knop1vraag5").checked){
        c++;
        c++;
    } else if (document.getElementById("knop2vraag5").checked){
        c++;
        c++;
        c++;
    } else if (document.getElementById("knop3vraag5").checked){
        c++;
        
    }
    // vraag6
    if (document.getElementById("knop1vraag6").checked){
        c++
    } else if (document.getElementById("knop2vraag6").checked){
        c++;
        c++;
        c++;
    } else if (document.getElementById("knop3vraag6").checked){
        c++;
        c++;
        
    }
    console.log(c)
}

