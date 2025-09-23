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
                obj.style.border = "none"
            }, "1000");    

        }, "1000");      

}



