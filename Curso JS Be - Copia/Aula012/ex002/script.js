function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('cuaba')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora São ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora < 18) {
        console.log("james")
        //boa tarde
        document.body.style.background = '#b9846f'
        img.src = 'fototarde.png'
    } else {
        //boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#515154'
    }
}
