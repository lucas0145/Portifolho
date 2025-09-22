let obj = document.getElementById("fncObj")

function skillFnc(a) {
    
        obj.style.opacity = "1"   
        obj.style.padding = "4%, 5%"
        obj.style.width = "70vw"


        setTimeout(() => {
          obj.style.height = "70vb" 
        }, "1000");
        
  

}

function skillOut(obj){

        obj.style.width = "0px"
        obj.style.padding = "0%"

        setTimeout(() => {

            obj.style.height = "0px"

            setTimeout(() => {
            obj.style.opacity = "0"
            }, "1000");    
        }, "1000");    

}



