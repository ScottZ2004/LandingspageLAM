
// de modal
var modal = document.getElementById("myModal");
// var modal1 = document.getElementById()
var modal2 = document.getElementById("myModal2")
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
    modal2.style.display = "none";
}

// sluit de modal wanneer de gebruiker er buiten klikt
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        modal2.style.display = "none";
    }
}




//van nu vraag 1
var countervr1aw1 = 0;
var countervr1aw2 = 0;
var countervr1aw3 = 0;
var countervr1aw4 = 0;
var countervr1 = 0;
var countervr2 = 0;
var countervr3 = 0;
var countervr4 = 0;
var countervr5 = 0;
var countervr6 = 0;
var nognietIngevult = 0;
//vr1aw1
function Klikvr1aw1(){
    countervr1aw1++;
    console.log(countervr1aw1);
    if (countervr1aw1 === 2){
        countervr1aw1 = 0;
        console.log(countervr1aw1);
    }

    if (countervr1aw1 === 1){
        document.getElementById("vr1aw1").style.border = "black solid 5px";
        document.getElementById("vr1aw1").style.opacity= "100%";
    }else if(countervr1aw1 === 0){
        document.getElementById("vr1aw1").style.border = "";
        document.getElementById("vr1aw1").style.opacity= "85%";
    }

    //met deze if statement kunnen er niet meerdere worden geselecteerd
    if (countervr1aw1 === 1 && countervr1aw2 === 1){
        document.getElementById("vr1aw2").style.border = "";
        document.getElementById("vr1aw2").style.opacity= "85%";
        countervr1aw2 = 0;
    }else if (countervr1aw1 === 1 && countervr1aw3 === 1){
        document.getElementById("vr1aw3").style.border = "";
        document.getElementById("vr1aw3").style.opacity= "85%";
        countervr1aw3 = 0;
    }else if (countervr1aw1 === 1 && countervr1aw4 === 1){
        document.getElementById("vr1aw4").style.border = "";
        document.getElementById("vr1aw4").style.opacity= "85%";
        countervr1aw4 = 0;
    }



    
}
//vr1aw2
function Klikvr1aw2(){
    countervr1aw2++;
    console.log(countervr1aw2);
    if (countervr1aw2 === 2){
        countervr1aw2 = 0;
        console.log(countervr1aw2);
    }
    if (countervr1aw2 === 1){
        document.getElementById("vr1aw2").style.border = "black solid 5px"
        document.getElementById("vr1aw2").style.opacity= "100%";
    }else if(countervr1aw2 === 0){
        document.getElementById("vr1aw2").style.border = ""
        document.getElementById("vr1aw2").style.opacity= "85%";
    }

    if (countervr1aw2 === 1 && countervr1aw1 === 1){
        document.getElementById("vr1aw1").style.border = "";
        document.getElementById("vr1aw1").style.opacity= "85%";
        countervr1aw1 = 0;
    }else if (countervr1aw2 === 1 && countervr1aw3 === 1){
        document.getElementById("vr1aw3").style.border = "";
        document.getElementById("vr1aw3").style.opacity= "85%";
        countervr1aw3 = 0;
    }else if (countervr1aw2 === 1 && countervr1aw4 === 1){
        document.getElementById("vr1aw4").style.border = "";
        document.getElementById("vr1aw4").style.opacity= "85%";
        countervr1aw4 = 0;
    }
    
    

    
}
//vr1aw3
function Klikvr1aw3(){
    countervr1aw3++;
    console.log(countervr1aw3);
    if (countervr1aw3 === 2){
        countervr1aw3 = 0;
        console.log(countervr1aw3);
    }
    if (countervr1aw3 === 1){
        document.getElementById("vr1aw3").style.border = "black solid 5px"
        document.getElementById("vr1aw3").style.opacity= "100%";
    }else if(countervr1aw3 === 0){
        document.getElementById("vr1aw3").style.border = ""
        document.getElementById("vr1aw3").style.opacity= "85%";
    }

    if (countervr1aw3 === 1 && countervr1aw1 === 1){
        document.getElementById("vr1aw1").style.border = "";
        document.getElementById("vr1aw1").style.opacity= "85%";
        countervr1aw1 = 0;
    }else if (countervr1aw3 === 1 && countervr1aw2 === 1){
        document.getElementById("vr1aw2").style.border = "";
        document.getElementById("vr1aw2").style.opacity= "85%";
        countervr1aw2 = 0;
    }else if (countervr1aw3 === 1 && countervr1aw4 === 1){
        document.getElementById("vr1aw4").style.border = "";
        document.getElementById("vr1aw4").style.opacity= "85%";
        countervr1aw4 = 0;
    }

    
}
//vr1aw4
function Klikvr1aw4(){
    countervr1aw4++;
    console.log(countervr1aw4);
    if (countervr1aw4 === 2){
        countervr1aw4 = 0;
        console.log(countervr1aw4);
    }
    if (countervr1aw4 === 1){
        document.getElementById("vr1aw4").style.border = "black solid 5px"
        document.getElementById("vr1aw4").style.opacity= "100%";
    }else if(countervr1aw4 === 0){
        document.getElementById("vr1aw4").style.border = ""
        document.getElementById("vr1aw4").style.opacity= "85%";
    }

    if (countervr1aw4 === 1 && countervr1aw1 === 1){
        document.getElementById("vr1aw1").style.border = "";
        document.getElementById("vr1aw1").style.opacity= "85%";
        countervr1aw1 = 0;
    }else if (countervr1aw4 === 1 && countervr1aw2 === 1){
        document.getElementById("vr1aw2").style.border = "";
        document.getElementById("vr1aw2").style.opacity= "85%";
        countervr1aw2 = 0;
    }else if (countervr1aw4 === 1 && countervr1aw3 === 1){
        document.getElementById("vr1aw3").style.border = "";
        document.getElementById("vr1aw3").style.opacity= "85%";
        countervr1aw3 = 0;
    }
    

    
}


function Vraag1(){
    if(countervr1aw1 === 1){
        countervr1 = 1;
        // alert(countervr1)
    }else if(countervr1aw2 === 1){
        countervr1 = 2;
        // alert(countervr1)
    }else if(countervr1aw3 === 1){
        countervr1 = 3;
        // alert(countervr1)
    }else if(countervr1aw4 === 1){
        countervr1 = 4;
        // alert(countervr1)
    }else{
        nognietIngevult++;
    }
    Vraag2();
}

//-----------------------------------------------------------------------

//van nu vraag 2
var countervr2aw1 = 0;
var countervr2aw2 = 0;
var countervr2aw3 = 0;
var countervr2aw4 = 0;
var countervr2;

//vr2aw1
function Klikvr2aw1(){
    countervr2aw1++;
    console.log(countervr2aw1);
    if (countervr2aw1 === 2){
        countervr2aw1 = 0;
        console.log(countervr2aw1);
    }

    if (countervr2aw1 === 1){
        document.getElementById("vr2aw1").style.border = "black solid 5px";
        document.getElementById("vr2aw1").style.opacity= "100%";
    }else if(countervr2aw1 === 0){
        document.getElementById("vr2aw1").style.border = "";
        document.getElementById("vr2aw1").style.opacity= "85%";
    }

    //met deze if statement kunnen er niet meerdere worden geselecteerd
    if (countervr2aw1 === 1 && countervr2aw2 === 1){
        document.getElementById("vr2aw2").style.border = "";
        document.getElementById("vr2aw2").style.opacity= "85%";
        countervr2aw2 = 0;
    }else if (countervr2aw1 === 1 && countervr2aw3 === 1){
        document.getElementById("vr2aw3").style.border = "";
        document.getElementById("vr2aw3").style.opacity= "85%";
        countervr2aw3 = 0;
    }else if (countervr2aw1 === 1 && countervr2aw4 === 1){
        document.getElementById("vr2aw4").style.border = "";
        document.getElementById("vr2aw4").style.opacity= "85%";
        countervr2aw4 = 0;
    }



    
}
//vr2aw2
function Klikvr2aw2(){
    countervr2aw2++;
    console.log(countervr2aw2);
    if (countervr2aw2 === 2){
        countervr2aw2 = 0;
        console.log(countervr2aw2);
    }
    if (countervr2aw2 === 1){
        document.getElementById("vr2aw2").style.border = "black solid 5px";
        document.getElementById("vr2aw2").style.opacity= "100%";
    }else if(countervr2aw2 === 0){
        document.getElementById("vr2aw2").style.border = "";
        document.getElementById("vr2aw2").style.opacity= "85%";
    }

    if (countervr2aw2 === 1 && countervr2aw1 === 1){
        document.getElementById("vr2aw1").style.border = "";
        document.getElementById("vr2aw1").style.opacity= "85%";
        countervr2aw1 = 0;
    }else if (countervr2aw2 === 1 && countervr2aw3 === 1){
        document.getElementById("vr2aw3").style.border = "";
        document.getElementById("vr2aw3").style.opacity= "85%";
        countervr2aw3 = 0;
    }else if (countervr2aw2 === 1 && countervr2aw4 === 1){
        document.getElementById("vr2aw4").style.border = "";
        document.getElementById("vr2aw4").style.opacity= "85%";
        countervr2aw4 = 0;
    }
    
    

    
}
//vr2aw3
function Klikvr2aw3(){
    countervr2aw3++;
    console.log(countervr2aw3);
    if (countervr2aw3 === 2){
        countervr2aw3 = 0;
        console.log(countervr2aw3);
    }
    if (countervr2aw3 === 1){
        document.getElementById("vr2aw3").style.border = "black solid 5px"
        document.getElementById("vr2aw3").style.opacity= "100%";
    }else if(countervr2aw3 === 0){
        document.getElementById("vr2aw3").style.border = ""
        document.getElementById("vr2aw3").style.opacity= "85%";
    }

    if (countervr2aw3 === 1 && countervr2aw1 === 1){
        document.getElementById("vr2aw1").style.border = "";
        document.getElementById("vr2aw1").style.opacity= "85%";
        countervr2aw1 = 0;
    }else if (countervr2aw3 === 1 && countervr2aw2 === 1){
        document.getElementById("vr2aw2").style.border = "";
        document.getElementById("vr2aw2").style.opacity= "85%";
        countervr2aw2 = 0;
    }else if (countervr2aw3 === 1 && countervr2aw4 === 1){
        document.getElementById("vr2aw4").style.border = "";
        document.getElementById("vr2aw4").style.opacity= "85%";
        countervr2aw4 = 0;
    }

    
}
//vr2aw4
function Klikvr2aw4(){
    countervr2aw4++;
    console.log(countervr2aw4);
    if (countervr2aw4 === 2){
        countervr2aw4 = 0;
        console.log(countervr2aw4);
    }
    if (countervr2aw4 === 1){
        document.getElementById("vr2aw4").style.border = "black solid 5px"
        document.getElementById("vr2aw4").style.opacity= "100%";
    }else if(countervr2aw4 === 0){
        document.getElementById("vr2aw4").style.border = ""
        document.getElementById("vr2aw4").style.opacity= "85%";
    }

    if (countervr2aw4 === 1 && countervr2aw1 === 1){
        document.getElementById("vr2aw1").style.border = "";
        document.getElementById("vr2aw1").style.opacity= "85%";
        countervr2aw1 = 0;
    }else if (countervr2aw4 === 1 && countervr2aw2 === 1){
        document.getElementById("vr2aw2").style.border = "";
        document.getElementById("vr2aw2").style.opacity= "85%";
        countervr2aw2 = 0;
    }else if (countervr2aw4 === 1 && countervr2aw3 === 1){
        document.getElementById("vr2aw3").style.border = "";
        document.getElementById("vr2aw3").style.opacity= "85%";
        countervr2aw3 = 0;
    }
    

    
}


function Vraag2(){
    if(countervr2aw1 === 1){
        countervr2 = 1;
        // alert(countervr2)
    }else if(countervr2aw2 === 1){
        countervr2 = 2;
        // alert(countervr2)
    }else if(countervr2aw3 === 1){
        countervr2 = 4;
        // alert(countervr2)
    }else if(countervr2aw4 === 1){
        countervr2 = 3;
        // alert(countervr2)
    }else{
        nognietIngevult++;
    }
    Vraag3()
}

//-----------------------------------------------------------------------

//van nu vraag 3
var countervr3aw1 = 0;
var countervr3aw2 = 0;
var countervr3aw3 = 0;
var countervr3aw4 = 0;
var countervr3;

//vr2aw1
function Klikvr3aw1(){
    countervr3aw1++;
    console.log(countervr3aw1);
    if (countervr3aw1 === 2){
        countervr3aw1 = 0;
        console.log(countervr3aw1);
    }

    if (countervr3aw1 === 1){
        document.getElementById("vr3aw1").style.border = "black solid 5px";
        document.getElementById("vr3aw1").style.opacity= "100%";
    }else if(countervr3aw1 === 0){
        document.getElementById("vr3aw1").style.border = "";
        document.getElementById("vr3aw1").style.opacity= "85%";
    }

    //met deze if statement kunnen er niet meerdere worden geselecteerd
    if (countervr3aw1 === 1 && countervr3aw2 === 1){
        document.getElementById("vr3aw2").style.border = "";
        document.getElementById("vr3aw2").style.opacity= "85%";
        countervr3aw2 = 0;
    }else if (countervr3aw1 === 1 && countervr3aw3 === 1){
        document.getElementById("vr3aw3").style.border = "";
        document.getElementById("vr3aw3").style.opacity= "85%";
        countervr3aw3 = 0;
    }else if (countervr3aw1 === 1 && countervr3aw4 === 1){
        document.getElementById("vr3aw4").style.border = "";
        document.getElementById("vr3aw4").style.opacity= "85%";
        countervr3aw4 = 0;
    }



    
}
//vr2aw2
function Klikvr3aw2(){
    countervr3aw2++;
    console.log(countervr3aw2);
    if (countervr3aw2 === 2){
        countervr3aw2 = 0;
        console.log(countervr3aw2);
    }
    if (countervr3aw2 === 1){
        document.getElementById("vr3aw2").style.border = "black solid 5px"
        document.getElementById("vr3aw2").style.opacity= "100%";
    }else if(countervr3aw2 === 0){
        document.getElementById("vr3aw2").style.border = ""
        document.getElementById("vr3aw2").style.opacity= "85%";
    }

    if (countervr3aw2 === 1 && countervr3aw1 === 1){
        document.getElementById("vr3aw1").style.border = "";
        document.getElementById("vr3aw1").style.opacity= "85%";
        countervr3aw1 = 0;
    }else if (countervr3aw2 === 1 && countervr3aw3 === 1){
        document.getElementById("vr3aw3").style.border = "";
        document.getElementById("vr3aw3").style.opacity= "85%";
        countervr3aw3 = 0;
    }else if (countervr3aw2 === 1 && countervr3aw4 === 1){
        document.getElementById("vr3aw4").style.border = "";
        document.getElementById("vr3aw4").style.opacity= "85%";
        countervr3aw4 = 0;
    }
    
    

    
}
//vr2aw3
function Klikvr3aw3(){
    countervr3aw3++;
    console.log(countervr3aw3);
    if (countervr3aw3 === 2){
        countervr3aw3 = 0;
        console.log(countervr3aw3);
    }
    if (countervr3aw3 === 1){
        document.getElementById("vr3aw3").style.border = "black solid 5px"
        document.getElementById("vr3aw3").style.opacity= "100%";
    }else if(countervr3aw3 === 0){
        document.getElementById("vr3aw3").style.border = ""
        document.getElementById("vr3aw3").style.opacity= "85%";
    }

    if (countervr3aw3 === 1 && countervr3aw1 === 1){
        document.getElementById("vr3aw1").style.border = "";
        document.getElementById("vr3aw1").style.opacity= "85%";
        countervr3aw1 = 0;
    }else if (countervr3aw3 === 1 && countervr3aw2 === 1){
        document.getElementById("vr3aw2").style.border = "";
        document.getElementById("vr3aw2").style.opacity= "85%";
        countervr3aw2 = 0;
    }else if (countervr3aw3 === 1 && countervr3aw4 === 1){
        document.getElementById("vr3aw4").style.border = "";
        document.getElementById("vr3aw4").style.opacity= "85%";
        countervr3aw4 = 0;
    }

    
}
//vr2aw4
function Klikvr3aw4(){
    countervr3aw4++;
    console.log(countervr3aw4);
    if (countervr3aw4 === 2){
        countervr3aw4 = 0;
        console.log(countervr3aw4);
    }
    if (countervr3aw4 === 1){
        document.getElementById("vr3aw4").style.border = "black solid 5px"
        document.getElementById("vr3aw4").style.opacity= "100%";
    }else if(countervr3aw4 === 0){
        document.getElementById("vr3aw4").style.border = ""
        document.getElementById("vr3aw4").style.opacity= "85%";
    }

    if (countervr3aw4 === 1 && countervr3aw1 === 1){
        document.getElementById("vr3aw1").style.border = "";
        document.getElementById("vr3aw1").style.opacity= "85%";
        countervr3aw1 = 0;
    }else if (countervr3aw4 === 1 && countervr3aw2 === 1){
        document.getElementById("vr3aw2").style.border = "";
        document.getElementById("vr3aw2").style.opacity= "85%";
        countervr3aw2 = 0;
    }else if (countervr3aw4 === 1 && countervr3aw3 === 1){
        document.getElementById("vr3aw3").style.border = "";
        document.getElementById("vr3aw3").style.opacity= "85%";
        countervr3aw3 = 0;
    }
}


function Vraag3(){
    if(countervr3aw1 === 1){
        countervr3 = 3;
        // alert(countervr3)
    }else if(countervr3aw2 === 1){
        countervr3 = 4;
        // alert(countervr3)
    }else if(countervr3aw3 === 1){
        countervr3 = 1;
        // alert(countervr3)
    }else if(countervr3aw4 === 1){
        countervr3 = 2;
        // alert(countervr3)
    }else{
        nognietIngevult++;
    }
    Vraag4()
}
//-----------------------------------------------------------------------

//van nu vraag 4
var countervr4aw1 = 0;
var countervr4aw2 = 0;
var countervr4aw3 = 0;
var countervr4aw4 = 0;
var countervr4;

//vr4aw1
function Klikvr4aw1(){
    countervr4aw1++;
    console.log(countervr4aw1);
    if (countervr4aw1 === 2){
        countervr4aw1 = 0;
        console.log(countervr4aw1);
    }

    if (countervr4aw1 === 1){
        document.getElementById("vr4aw1").style.border = "black solid 5px";
        document.getElementById("vr4aw1").style.opacity= "100%";
    }else if(countervr4aw1 === 0){
        document.getElementById("vr4aw1").style.border = "";
        document.getElementById("vr4aw1").style.opacity= "85%";
    }

    //met deze if statement kunnen er niet meerdere worden geselecteerd
    if (countervr4aw1 === 1 && countervr4aw2 === 1){
        document.getElementById("vr4aw2").style.border = "";
        document.getElementById("vr4aw2").style.opacity= "85%";
        countervr4aw2 = 0;
    }else if (countervr4aw1 === 1 && countervr4aw3 === 1){
        document.getElementById("vr4aw3").style.border = "";
        document.getElementById("vr4aw3").style.opacity= "85%";
        countervr4aw3 = 0;
    }else if (countervr4aw1 === 1 && countervr4aw4 === 1){
        document.getElementById("vr4aw4").style.border = "";
        document.getElementById("vr4aw4").style.opacity= "85%";
        countervr4aw4 = 0;
    }



    
}
//vr4aw2
function Klikvr4aw2(){
    countervr4aw2++;
    console.log(countervr4aw2);
    if (countervr4aw2 === 2){
        countervr4aw2 = 0;
        console.log(countervr4aw2);
    }
    if (countervr4aw2 === 1){
        document.getElementById("vr4aw2").style.border = "black solid 5px"
        document.getElementById("vr4aw2").style.opacity= "100%";
    }else if(countervr4aw2 === 0){
        document.getElementById("vr4aw2").style.border = ""
        document.getElementById("vr4aw2").style.opacity= "85%";
    }

    if (countervr4aw2 === 1 && countervr4aw1 === 1){
        document.getElementById("vr4aw1").style.border = "";
        document.getElementById("vr4aw1").style.opacity= "85%";
        countervr4aw1 = 0;
    }else if (countervr4aw2 === 1 && countervr4aw3 === 1){
        document.getElementById("vr4aw3").style.border = "";
        document.getElementById("vr4aw3").style.opacity= "85%";
        countervr4aw3 = 0;
    }else if (countervr4aw2 === 1 && countervr4aw4 === 1){
        document.getElementById("vr4aw4").style.border = "";
        document.getElementById("vr4aw4").style.opacity= "85%";
        countervr4aw4 = 0;
    }
    
    

    
}
//vr4aw3
function Klikvr4aw3(){
    countervr4aw3++;
    console.log(countervr4aw3);
    if (countervr4aw3 === 2){
        countervr4aw3 = 0;
        console.log(countervr4aw3);
    }
    if (countervr4aw3 === 1){
        document.getElementById("vr4aw3").style.border = "black solid 5px"
        document.getElementById("vr4aw3").style.opacity= "100%";
    }else if(countervr4aw3 === 0){
        document.getElementById("vr4aw3").style.border = ""
        document.getElementById("vr4aw3").style.opacity= "85%";
    }

    if (countervr4aw3 === 1 && countervr4aw1 === 1){
        document.getElementById("vr4aw1").style.border = "";
        document.getElementById("vr4aw1").style.opacity= "85%";
        countervr4aw1 = 0;
    }else if (countervr4aw3 === 1 && countervr4aw2 === 1){
        document.getElementById("vr4aw2").style.border = "";
        document.getElementById("vr4aw2").style.opacity= "85%";
        countervr4aw2 = 0;
    }else if (countervr4aw3 === 1 && countervr4aw4 === 1){
        document.getElementById("vr4aw4").style.border = "";
        document.getElementById("vr4aw4").style.opacity= "85%";
        countervr4aw4 = 0;
    }

    
}
//vr4aw4
function Klikvr4aw4(){
    countervr4aw4++;
    console.log(countervr4aw4);
    if (countervr4aw4 === 2){
        countervr4aw4 = 0;
        console.log(countervr4aw4);
    }
    if (countervr4aw4 === 1){
        document.getElementById("vr4aw4").style.border = "black solid 5px"
        document.getElementById("vr4aw4").style.opacity= "100%";
    }else if(countervr4aw4 === 0){
        document.getElementById("vr4aw4").style.border = ""
        document.getElementById("vr4aw4").style.opacity= "85%";
    }

    if (countervr4aw4 === 1 && countervr4aw1 === 1){
        document.getElementById("vr4aw1").style.border = "";
        document.getElementById("vr4aw1").style.opacity= "85%";
        countervr4aw1 = 0;
    }else if (countervr4aw4 === 1 && countervr4aw2 === 1){
        document.getElementById("vr4aw2").style.border = "";
        document.getElementById("vr4aw2").style.opacity= "85%";
        countervr4aw2 = 0;
    }else if (countervr4aw4 === 1 && countervr4aw3 === 1){
        document.getElementById("vr4aw3").style.border = "";
        document.getElementById("vr4aw3").style.opacity= "85%";
        countervr4aw3 = 0;
    }
}


function Vraag4(){
    if(countervr4aw1 === 1){
        countervr4 = 3;
        // alert(countervr4)
    }else if(countervr4aw2 === 1){
        countervr4 = 4;
        // alert(countervr4)
    }else if(countervr4aw3 === 1){
        countervr4 = 1;
        // alert(countervr4)
    }else if(countervr4aw4 === 1){
        countervr4 = 2;
        // alert(countervr4)
    }else{
        nognietIngevult++;
    }
    Vraag5()
}
//-----------------------------------------------------------------------

//van nu vraag 5
var countervr5aw1 = 0;
var countervr5aw2 = 0;
var countervr5aw3 = 0;
var countervr5aw4 = 0;
var countervr5;

//vr5aw1
function Klikvr5aw1(){
    countervr5aw1++;
    console.log(countervr5aw1);
    if (countervr5aw1 === 2){
        countervr5aw1 = 0;
        console.log(countervr5aw1);
    }

    if (countervr5aw1 === 1){
        document.getElementById("vr5aw1").style.border = "black solid 5px";
        document.getElementById("vr5aw1").style.opacity= "100%";
    }else if(countervr5aw1 === 0){
        document.getElementById("vr5aw1").style.border = "";
        document.getElementById("vr5aw1").style.opacity= "85%";
    }

    //met deze if statement kunnen er niet meerdere worden geselecteerd
    if (countervr5aw1 === 1 && countervr5aw2 === 1){
        document.getElementById("vr5aw2").style.border = "";
        document.getElementById("vr5aw2").style.opacity= "85%";
        countervr5aw2 = 0;
    }else if (countervr5aw1 === 1 && countervr5aw3 === 1){
        document.getElementById("vr5aw3").style.border = "";
        document.getElementById("vr5aw3").style.opacity= "85%";
        countervr5aw3 = 0;
    }else if (countervr5aw1 === 1 && countervr5aw4 === 1){
        document.getElementById("vr5aw4").style.border = "";
        document.getElementById("vr5aw4").style.opacity= "85%";
        countervr5aw4 = 0;
    }



    
}
//vr5aw2
function Klikvr5aw2(){
    countervr5aw2++;
    console.log(countervr5aw2);
    if (countervr5aw2 === 2){
        countervr5aw2 = 0;
        console.log(countervr5aw2);
    }
    if (countervr5aw2 === 1){
        document.getElementById("vr5aw2").style.border = "black solid 5px"
        document.getElementById("vr5aw2").style.opacity= "100%";
    }else if(countervr5aw2 === 0){
        document.getElementById("vr5aw2").style.border = ""
        document.getElementById("vr5aw2").style.opacity= "85%";
    }

    if (countervr5aw2 === 1 && countervr5aw1 === 1){
        document.getElementById("vr5aw1").style.border = "";
        document.getElementById("vr5aw1").style.opacity= "85%";
        countervr5aw1 = 0;
    }else if (countervr5aw2 === 1 && countervr5aw3 === 1){
        document.getElementById("vr5aw3").style.border = "";
        document.getElementById("vr5aw3").style.opacity= "85%";
        countervr5aw3 = 0;
    }else if (countervr5aw2 === 1 && countervr5aw4 === 1){
        document.getElementById("vr5aw4").style.border = "";
        document.getElementById("vr5aw4").style.opacity= "85%";
        countervr5aw4 = 0;
    }
    
    

    
}
//vr5aw3
function Klikvr5aw3(){
    countervr5aw3++;
    console.log(countervr5aw3);
    if (countervr5aw3 === 2){
        countervr5aw3 = 0;
        console.log(countervr5aw3);
    }
    if (countervr5aw3 === 1){
        document.getElementById("vr5aw3").style.border = "black solid 5px"
        document.getElementById("vr5aw3").style.opacity= "100%";
    }else if(countervr5aw3 === 0){
        document.getElementById("vr5aw3").style.border = ""
        document.getElementById("vr5aw3").style.opacity= "85%";
    }

    if (countervr5aw3 === 1 && countervr5aw1 === 1){
        document.getElementById("vr5aw1").style.border = "";
        document.getElementById("vr5aw1").style.opacity= "85%";
        countervr5aw1 = 0;
    }else if (countervr5aw3 === 1 && countervr5aw2 === 1){
        document.getElementById("vr5aw2").style.border = "";
        document.getElementById("vr5aw2").style.opacity= "85%";
        countervr5aw2 = 0;
    }else if (countervr5aw3 === 1 && countervr5aw4 === 1){
        document.getElementById("vr5aw4").style.border = "";
        document.getElementById("vr5aw4").style.opacity= "85%";
        countervr5aw4 = 0;
    }

    
}
//vr5aw4
function Klikvr5aw4(){
    countervr5aw4++;
    console.log(countervr5aw4);
    if (countervr5aw4 === 2){
        countervr5aw4 = 0;
        console.log(countervr5aw4);
    }
    if (countervr5aw4 === 1){
        document.getElementById("vr5aw4").style.border = "black solid 5px"
        document.getElementById("vr5aw4").style.opacity= "100%";
    }else if(countervr5aw4 === 0){
        document.getElementById("vr5aw4").style.border = ""
        document.getElementById("vr5aw4").style.opacity= "85%";
    }

    if (countervr5aw4 === 1 && countervr5aw1 === 1){
        document.getElementById("vr5aw1").style.border = "";
        document.getElementById("vr5aw1").style.opacity= "85%";
        countervr5aw1 = 0;
    }else if (countervr5aw4 === 1 && countervr5aw2 === 1){
        document.getElementById("vr5aw2").style.border = "";
        document.getElementById("vr5aw2").style.opacity= "85%";
        countervr5aw2 = 0;
    }else if (countervr5aw4 === 1 && countervr5aw3 === 1){
        document.getElementById("vr5aw3").style.border = "";
        document.getElementById("vr5aw3").style.opacity= "85%";
        countervr5aw3 = 0;
    }
}


function Vraag5(){
    if(countervr5aw1 === 1){
        countervr5 = 3
        // alert(countervr5)
    }else if(countervr5aw2 === 1){
        countervr5 = 2;
        // alert(countervr5)
    }else if(countervr5aw3 === 1){
        countervr5 = 1;
        // alert(countervr5)
    }else if(countervr5aw4 === 1){
        countervr5 = 4;
        // alert(countervr5)
    }else{
        nognietIngevult++;
    }
    Vraag6()
}

//-----------------------------------------------------------------------

//van nu vraag 6
var countervr6aw1 = 0;
var countervr6aw2 = 0;
var countervr6aw3 = 0;
var countervr6aw4 = 0;
var countervr6;

//vr6aw1
function Klikvr6aw1(){
    countervr6aw1++;
    console.log(countervr6aw1);
    if (countervr6aw1 === 2){
        countervr6aw1 = 0;
        console.log(countervr6aw1);
    }

    if (countervr6aw1 === 1){
        document.getElementById("vr6aw1").style.border = "black solid 5px";
        document.getElementById("vr6aw1").style.opacity= "100%";
    }else if(countervr6aw1 === 0){
        document.getElementById("vr6aw1").style.border = "";
        document.getElementById("vr6aw1").style.opacity= "85%";
    }

    //met deze if statement kunnen er niet meerdere worden geselecteerd
    if (countervr6aw1 === 1 && countervr6aw2 === 1){
        document.getElementById("vr6aw2").style.border = "";
        document.getElementById("vr6aw2").style.opacity= "85%";
        countervr6aw2 = 0;
    }else if (countervr6aw1 === 1 && countervr6aw3 === 1){
        document.getElementById("vr6aw3").style.border = "";
        document.getElementById("vr6aw3").style.opacity= "85%";
        countervr6aw3 = 0;
    }else if (countervr6aw1 === 1 && countervr6aw4 === 1){
        document.getElementById("vr6aw4").style.border = "";
        document.getElementById("vr6aw4").style.opacity= "85%";
        countervr6aw4 = 0;
    }



    
}
//vr6aw2
function Klikvr6aw2(){
    countervr6aw2++;
    console.log(countervr6aw2);
    if (countervr6aw2 === 2){
        countervr6aw2 = 0;
        console.log(countervr6aw2);
    }
    if (countervr6aw2 === 1){
        document.getElementById("vr6aw2").style.border = "black solid 5px"
        document.getElementById("vr6aw2").style.opacity= "100%";
    }else if(countervr6aw2 === 0){
        document.getElementById("vr6aw2").style.border = ""
        document.getElementById("vr6aw2").style.opacity= "85%";
    }

    if (countervr6aw2 === 1 && countervr6aw1 === 1){
        document.getElementById("vr6aw1").style.border = "";
        document.getElementById("vr6aw1").style.opacity= "85%";
        countervr6aw1 = 0;
    }else if (countervr6aw2 === 1 && countervr6aw3 === 1){
        document.getElementById("vr6aw3").style.border = "";
        document.getElementById("vr6aw3").style.opacity= "85%";
        countervr6aw3 = 0;
    }else if (countervr6aw2 === 1 && countervr6aw4 === 1){
        document.getElementById("vr6aw4").style.border = "";
        document.getElementById("vr6aw4").style.opacity= "85%";
        countervr6aw4 = 0;
    }
    
    

    
}
//vr6aw3
function Klikvr6aw3(){
    countervr6aw3++;
    console.log(countervr6aw3);
    if (countervr6aw3 === 2){
        countervr6aw3 = 0;
        console.log(countervr6aw3);
    }
    if (countervr6aw3 === 1){
        document.getElementById("vr6aw3").style.border = "black solid 5px"
        document.getElementById("vr6aw3").style.opacity= "100%";
    }else if(countervr6aw3 === 0){
        document.getElementById("vr6aw3").style.border = ""
        document.getElementById("vr6aw3").style.opacity= "85%";
    }

    if (countervr6aw3 === 1 && countervr6aw1 === 1){
        document.getElementById("vr6aw1").style.border = "";
        document.getElementById("vr6aw1").style.opacity= "85%";
        countervr6aw1 = 0;
    }else if (countervr6aw3 === 1 && countervr6aw2 === 1){
        document.getElementById("vr6aw2").style.border = "";
        document.getElementById("vr6aw2").style.opacity= "85%";
        countervr6aw2 = 0;
    }else if (countervr6aw3 === 1 && countervr6aw4 === 1){
        document.getElementById("vr6aw4").style.border = "";
        document.getElementById("vr6aw4").style.opacity= "85%";
        countervr6aw4 = 0;
    }

    
}
//vr5aw4
function Klikvr6aw4(){
    countervr6aw4++;
    console.log(countervr6aw4);
    if (countervr6aw4 === 2){
        countervr6aw4 = 0;
        console.log(countervr6aw4);
    }
    if (countervr6aw4 === 1){
        document.getElementById("vr6aw4").style.border = "black solid 5px"
        document.getElementById("vr6aw4").style.opacity= "100%";
    }else if(countervr6aw4 === 0){
        document.getElementById("vr6aw4").style.border = ""
        document.getElementById("vr6aw4").style.opacity= "85%";
    }

    if (countervr6aw4 === 1 && countervr6aw1 === 1){
        document.getElementById("vr6aw1").style.border = "";
        document.getElementById("vr6aw1").style.opacity= "85%";
        countervr6aw1 = 0;
    }else if (countervr6aw4 === 1 && countervr6aw2 === 1){
        document.getElementById("vr6aw2").style.border = "";
        document.getElementById("vr6aw2").style.opacity= "85%";
        countervr6aw2 = 0;
    }else if (countervr6aw4 === 1 && countervr6aw3 === 1){
        document.getElementById("vr6aw3").style.border = "";
        document.getElementById("vr6aw3").style.opacity= "85%";
        countervr6aw3 = 0;
    }
}


function Vraag6(){
    if(countervr6aw1 === 1){
        countervr6 = 4;
        // alert(countervr6)
    }else if(countervr6aw2 === 1){
        countervr6 = 1;
        // alert(countervr6)
    }else if(countervr6aw3 === 1){
        countervr6 = 2;
        // alert(countervr6)
    }else if(countervr6aw4 === 1){
        countervr6 = 3;
        // alert(countervr6)
    }else{
        nognietIngevult++
    }
    Eindscherm()
}
var countervr = 0;
var foto = document.getElementById("fotoEindschermKlein");
function Eindscherm(){
    if(nognietIngevult > 0 ){
        alert("Je hebt nog niet alle vragen ingevult.")
        nognietIngevult = 0;  
    }else{
        countervr = countervr1 + countervr2 + countervr3 + countervr4 + countervr5 + countervr6;
        
        if(countervr < 7){
            // alert("je bent 1")
            foto.src = "kunstwerkenfotos/kunstwerk1.jpg";
            document.getElementById("naamKunst").innerHTML = "Jij bent het kunstwerk: 'Het laatste avondmaal!'";
        }else if(countervr < 12){
            foto.src = "kunstwerkenfotos/kunstwerk2.jpg";
            document.getElementById("naamKunst").innerHTML = "Jij bent het kunstwerk: 'Bon Appétit!'";
        }else if(countervr < 16){
            // alert("3")
            foto.src = "kunstwerkenfotos/kunstwerk3.jpg";
            document.getElementById("naamKunst").innerHTML = "Jij bent het kunstwerk: 'De Koffiepot'";
        }else if(countervr < 20){
            // alert("4")
            foto.src = "kunstwerkenfotos/kunstwerk4.JPG";
            document.getElementById("naamKunst").innerHTML = "Jij bent het kunstwerk: 'Woman with shopping bag'";
        }else if(countervr < 25){
            //alert("5")
            foto.src = "kunstwerkenfotos/kunstwerk5.jpg";
            document.getElementById("naamKunst").innerHTML = "Jij bent het kunstwerk: 'Food Chain Project'";
        }else{
            alert("er is iets fout gegaan");
            location.reload();
        }

        modal.style.display="none";
        modal2.style.display="block";
        
    }
}
function Home(){
    location.reload()
}

//-------------------------------------------
