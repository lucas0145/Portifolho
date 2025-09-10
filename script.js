let cont = -1

function skillFnc(a) {

    cont += 1
    if (cont % 2 == 0){
        a.style.transform = "translate(-50%, -50%)"
        a.style.position = "absolute"
        a.style.left =  "50%"
        a.style.top = "50%"
    }else{
        a.style.transform = ""
        a.style.position = "static"
        a.style.left =  "50%"
        a.style.top = "50%"
    }

}