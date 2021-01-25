//van nu vraag 1
var countervr1aw1 = 0;
var countervr1aw2 = 0;
var countervr1aw3 = 0;
var countervr1aw4 = 0;
var countervr1;

//vr1aw1
function Klikvr1aw1(){
    countervr1aw1++;
    console.log(countervr1aw1);
    if (countervr1aw1 == 2){
        countervr1aw1 = 0;
        console.log(countervr1aw1);
    }

    if (countervr1aw1 == 1){
        document.getElementById("vr1aw1").style.border = "red solid 5px";
    }else if(countervr1aw1 == 0){
        document.getElementById("vr1aw1").style.border = "";
    }

    //met deze if statement kunnen er niet meerdere worden geselecteerd
    if (countervr1aw1 == 1 && countervr1aw2 == 1){
        document.getElementById("vr1aw2").style.border = "";
        countervr1aw2 = 0;
    }else if (countervr1aw1 == 1 && countervr1aw3 == 1){
        document.getElementById("vr1aw3").style.border = "";
        countervr1aw3 = 0;
    }else if (countervr1aw1 == 1 && countervr1aw4 == 1){
        document.getElementById("vr1aw4").style.border = "";
        countervr1aw4 = 0;
    }



    
}
//vr1aw2
function Klikvr1aw2(){
    countervr1aw2++;
    console.log(countervr1aw2);
    if (countervr1aw2 == 2){
        countervr1aw2 = 0;
        console.log(countervr1aw2);
    }
    if (countervr1aw2 == 1){
        document.getElementById("vr1aw2").style.border = "red solid 5px"
    }else if(countervr1aw2 == 0){
        document.getElementById("vr1aw2").style.border = ""
    }

    if (countervr1aw2 == 1 && countervr1aw1 == 1){
        document.getElementById("vr1aw1").style.border = "";
        countervr1aw1 = 0;
    }else if (countervr1aw2 == 1 && countervr1aw3 == 1){
        document.getElementById("vr1aw3").style.border = "";
        countervr1aw3 = 0;
    }else if (countervr1aw2 == 1 && countervr1aw4 == 1){
        document.getElementById("vr1aw4").style.border = "";
        countervr1aw4 = 0;
    }
    
    

    
}
//vr1aw3
function Klikvr1aw3(){
    countervr1aw3++;
    console.log(countervr1aw3);
    if (countervr1aw3 == 2){
        countervr1aw3 = 0;
        console.log(countervr1aw3);
    }
    if (countervr1aw3 == 1){
        document.getElementById("vr1aw3").style.border = "red solid 5px"
    }else if(countervr1aw3 == 0){
        document.getElementById("vr1aw3").style.border = ""
    }

    if (countervr1aw3 == 1 && countervr1aw1 == 1){
        document.getElementById("vr1aw1").style.border = "";
        countervr1aw1 = 0;
    }else if (countervr1aw3 == 1 && countervr1aw2 == 1){
        document.getElementById("vr1aw2").style.border = "";
        countervr1aw2 = 0;
    }else if (countervr1aw3 == 1 && countervr1aw4 == 1){
        document.getElementById("vr1aw4").style.border = "";
        countervr1aw4 = 0;
    }

    
}
//vr1aw4
function Klikvr1aw4(){
    countervr1aw4++;
    console.log(countervr1aw4);
    if (countervr1aw4 == 2){
        countervr1aw4 = 0;
        console.log(countervr1aw4);
    }
    if (countervr1aw4 == 1){
        document.getElementById("vr1aw4").style.border = "red solid 5px"
    }else if(countervr1aw4 == 0){
        document.getElementById("vr1aw4").style.border = ""
    }

    if (countervr1aw4 == 1 && countervr1aw1 == 1){
        document.getElementById("vr1aw1").style.border = "";
        countervr1aw1 = 0;
    }else if (countervr1aw4 == 1 && countervr1aw2 == 1){
        document.getElementById("vr1aw2").style.border = "";
        countervr1aw2 = 0;
    }else if (countervr1aw4 == 1 && countervr1aw3 == 1){
        document.getElementById("vr1aw3").style.border = "";
        countervr1aw3 = 0;
    }
    

    
}


function Vraag1(){
    if(countervr1aw1 == 1){
        countervr1 = 1;
        alert(countervr1)
    }else if(countervr1aw2 == 1){
        countervr1 = 2;
        alert(countervr1)
    }else if(countervr1aw3 == 1){
        countervr1 = 3;
        alert(countervr1)
    }else if(countervr1aw4 == 1){
        countervr1 = 4;
        alert(countervr1)
    }else{
        alert("je hebt nog niets ingevult!")
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
    if (countervr2aw1 == 2){
        countervr2aw1 = 0;
        console.log(countervr2aw1);
    }

    if (countervr2aw1 == 1){
        document.getElementById("vr2aw1").style.border = "red solid 5px";
    }else if(countervr2aw1 == 0){
        document.getElementById("vr2aw1").style.border = "";
    }

    //met deze if statement kunnen er niet meerdere worden geselecteerd
    if (countervr2aw1 == 1 && countervr2aw2 == 1){
        document.getElementById("vr2aw2").style.border = "";
        countervr2aw2 = 0;
    }else if (countervr2aw1 == 1 && countervr2aw3 == 1){
        document.getElementById("vr2aw3").style.border = "";
        countervr2aw3 = 0;
    }else if (countervr2aw1 == 1 && countervr2aw4 == 1){
        document.getElementById("vr2aw4").style.border = "";
        countervr2aw4 = 0;
    }



    
}
//vr2aw2
function Klikvr2aw2(){
    countervr2aw2++;
    console.log(countervr2aw2);
    if (countervr2aw2 == 2){
        countervr2aw2 = 0;
        console.log(countervr2aw2);
    }
    if (countervr2aw2 == 1){
        document.getElementById("vr2aw2").style.border = "red solid 5px"
    }else if(countervr2aw2 == 0){
        document.getElementById("vr2aw2").style.border = ""
    }

    if (countervr2aw2 == 1 && countervr2aw1 == 1){
        document.getElementById("vr2aw1").style.border = "";
        countervr2aw1 = 0;
    }else if (countervr2aw2 == 1 && countervr2aw3 == 1){
        document.getElementById("vr2aw3").style.border = "";
        countervr2aw3 = 0;
    }else if (countervr2aw2 == 1 && countervr2aw4 == 1){
        document.getElementById("vr2aw4").style.border = "";
        countervr2aw4 = 0;
    }
    
    

    
}
//vr2aw3
function Klikvr2aw3(){
    countervr2aw3++;
    console.log(countervr2aw3);
    if (countervr2aw3 == 2){
        countervr2aw3 = 0;
        console.log(countervr2aw3);
    }
    if (countervr2aw3 == 1){
        document.getElementById("vr2aw3").style.border = "red solid 5px"
    }else if(countervr2aw3 == 0){
        document.getElementById("vr2aw3").style.border = ""
    }

    if (countervr2aw3 == 1 && countervr2aw1 == 1){
        document.getElementById("vr2aw1").style.border = "";
        countervr2aw1 = 0;
    }else if (countervr2aw3 == 1 && countervr2aw2 == 1){
        document.getElementById("vr2aw2").style.border = "";
        countervr2aw2 = 0;
    }else if (countervr2aw3 == 1 && countervr2aw4 == 1){
        document.getElementById("vr2aw4").style.border = "";
        countervr2aw4 = 0;
    }

    
}
//vr2aw4
function Klikvr2aw4(){
    countervr2aw4++;
    console.log(countervr2aw4);
    if (countervr2aw4 == 2){
        countervr2aw4 = 0;
        console.log(countervr2aw4);
    }
    if (countervr2aw4 == 1){
        document.getElementById("vr2aw4").style.border = "red solid 5px"
    }else if(countervr2aw4 == 0){
        document.getElementById("vr2aw4").style.border = ""
    }

    if (countervr2aw4 == 1 && countervr2aw1 == 1){
        document.getElementById("vr2aw1").style.border = "";
        countervr2aw1 = 0;
    }else if (countervr2aw4 == 1 && countervr2aw2 == 1){
        document.getElementById("vr2aw2").style.border = "";
        countervr2aw2 = 0;
    }else if (countervr2aw4 == 1 && countervr2aw3 == 1){
        document.getElementById("vr2aw3").style.border = "";
        countervr2aw3 = 0;
    }
    

    
}


function Vraag2(){
    if(countervr2aw1 == 1){
        countervr2 = 1;
        alert(countervr2)
    }else if(countervr2aw2 == 1){
        countervr2 = 2;
        alert(countervr2)
    }else if(countervr2aw3 == 1){
        countervr2 = 3;
        alert(countervr2)
    }else if(countervr1aw2 == 1){
        countervr2 = 4;
        alert(countervr2)
    }else{
        alert("je hebt nog niets ingevult!")
    }
    
}
