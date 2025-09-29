let obj = document.getElementById("fncObj")


function skillFnc(a) {
        
        obj.style.border = "#167000 10px solid"
        obj.style.width = "70vw"
        obj.firstElementChild.innerHTML = a.innerHTML

        setTimeout(() => {

        obj.style.height = "70vb" 
        obj.style.border = "#167000 10px solid"

        }, "1001");     
}

function skillOut(obj){

    obj.style.width = "0vw"

    setTimeout(() => {

        obj.style.height = "0vb"

        setTimeout(() => {
            
            if (obj.style.width == "0vw") {
                obj.style.border = "none"
            }
            
        }, "1000");    

    }, "1000");      

}

function formataTel (a) {

    a.value = a.value.slice(0,16)

    if (a.value[0] != "(" && a.value[0] != undefined){

        a.value = a.value.slice(0,0) + "(" + a.value[0]

    }

    if (a.value[3] != ")" && a.value[3] != undefined){

        a.value = a.value.slice(0,3) + ") " + a.value[3]

    }
    
    if (a.value[6] != " "&& a.value[6] != undefined){
        a.value = a.value.slice(0,6) + " " + a.value[6]
    }

    if (a.value[10] != "-" && a.value[10] != undefined){
        a.value = a.value.slice(0,10) + "-" + a.value[10]
    }
}

function EnviarBtnFnc (){

    document.getElementById('contact-form').reset()
}
