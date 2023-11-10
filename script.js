var  okToAccept = true

function changeTrueOrFalseTxt(){
    if (okToAccept == true){
        document.getElementById("TrueOrFalse").innerText = "OK to accept"
    }
    else{
        document.getElementById("TrueOrFalse").innerText = "Please reject"
    }
}

function printNameChangeMsg(){
    var msg =  "If the rest of the ID is valid, complete the name change case. If you don't know how to, please leave a comment stating name change pending and save the document without accepting or rejecting"
    alert (msg);
    document.getElementById("nameChangeMessage").innerText = msg 
}

function printDOBChangeMsg(){
    var msg =  "If the rest of the ID is valid, complete the DOB case. If you don't know how to, please leave a comment stating name change pending and save the document without accepting or rejecting"
    alert(msg);
    document.getElementById("dobChangeMessage").innerText = msg
}

function printAOMMsg(){
    var msg = "If you you trained on handling underaged clientsz please process as per procedure. If not please leave note under comment box without accepting or rejecting"
    alert(msg);
    document.getElementById("underagedMessage").innerText = msg

}

function printFinalCheckMessage(){
    var msg ="Bring it up to the team for discussion to confirm if we can accept. If everyone agrees that the ID is suspicious add it to the suspicous docs sheet for fraud to review. Leave a comment stating pending review and save it without accepting or rejecting it. If the team deems it good to accept, please proceed with accepting."
    alert(msg)
    document.getElementById("finalCheckMsg").innerText = msg
}

function notOK(){
    okToAccept = false
    changeTrueOrFalseTxt();
}

function ok(){
    okToAccept = true
    changeTrueOrFalseTxt()
}

function hideOrShowNameChange(){
    var x = document.getElementById("nameMatchExtended")

    if(x.style.display === "none"){
        x.style.display = "block"
    }
    else{
        x.style.display = "none"
    }
}

function hideOrShowDOBChange(){
    var x = document.getElementById("dobUpdateExtended");

    if(x.style.display === "none"){
        x.style.display = "block"
    }
    else{
        x.style.display = "none"
    }
}

function hideOrShowAOM(){
    var x = document.getElementById("aomExtended");

    if(x.style.display === "none"){
        x.style.display = "block"
    }
    else{
        x.style.display = "none"
    }
}

function hideOrShowSBP(){
    var x = document.getElementById("sgbExtended");

    if(x.style.display === "none"){
        x.style.display = "block"
    }
    else{
        x.style.display = "none"
    }
}