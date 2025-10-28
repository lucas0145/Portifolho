let obj = document.getElementById("fncObj")
const respons = window.matchMedia("(max-width: 550px)")
let dmCtrl = 0

function skillFnc(a) {

    obj.style.border = "10px solid var(--secCor)"

    if (respons.matches) {

        obj.style.width = "90vw"
        obj.style.fontSize = "1.5rem"
        obj.firstElementChild.innerHTML = a.innerHTML

        setTimeout(() => {

            obj.style.height = "90vb"

        }, "1001");

    } else {

        obj.style.width = "70vw"
        obj.firstElementChild.innerHTML = a.innerHTML

        setTimeout(() => {

            obj.style.height = "70vb"

        }, "1001");
    }

}

function skillOut(obj) {

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

function formataTel(a) {

    a.value = a.value.slice(0, 16)

    if (a.value[0] != "(" && a.value[0] != undefined) {

        a.value = a.value.slice(0, 0) + "(" + a.value[0]

    }

    if (a.value[3] != ")" && a.value[3] != undefined) {

        a.value = a.value.slice(0, 3) + ") " + a.value[3]

    }

    if (a.value[6] != " " && a.value[6] != undefined) {
        a.value = a.value.slice(0, 6) + " " + a.value[6]
    }

    if (a.value[10] != "-" && a.value[10] != undefined) {
        a.value = a.value.slice(0, 10) + "-" + a.value[10]
    }
}

function openModal(modalId) {

    localStorage.setItem("msgNome", document.getElementById("msgNome").value)
    localStorage.setItem("msgEmail", document.getElementById("msgEmail").value)
    localStorage.setItem("msgTel", document.getElementById("msgTel").value)
    localStorage.setItem("msgTxt", document.getElementById("msgTxt").value)

    if (localStorage.getItem("msgNome") != '' && localStorage.getItem("msgTel") != '' && localStorage.getItem("msgEmail") != '' && localStorage.getItem("msgTxt") != '') {
        
        setTimeout(() => {

            let modal = document.getElementById(modalId)
            modal.showModal()

            document.getElementById("getNome").innerHTML = "Nome: " + localStorage.getItem("msgNome")
            document.getElementById("getEmail").innerHTML = "Email: " + localStorage.getItem("msgEmail")
            document.getElementById("getTel").innerHTML = "Tel: " + localStorage.getItem("msgTel")
            document.getElementById("getTxt").innerHTML = "Mensagem: " + localStorage.getItem("msgTxt")
        }, 20)
    }   


}

function dropMenuFnc() {
    let a = document.getElementById("lstMenu")

    a.classList.toggle("menuClass")
}

window.addEventListener('scroll', function () {
    let lstMenu = document.getElementById("lstMenu")

    lstMenu.classList.remove('menuClass')
});

function darkmodeFnc(sw) {

    sw.style.transform = "rotateY(90deg)";

    setTimeout(() => {

        if (dmCtrl % 2 == 0) {
            sw.src = "Assets/sun.png"
        } else {
            sw.src = "Assets/moon.png"
        }
        sw.style.transform = "rotateY(0deg)";

    }, "550");

    document.body.classList.toggle("darkmodeON")

    dmCtrl += 1

}
