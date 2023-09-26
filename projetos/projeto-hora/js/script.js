function carregar() {
    var msg = document.querySelector('div#msg')
    var foto = document.querySelector('img#imagem')
    var bg = document.querySelector('body')
    var hora = new Date()
    var agora = hora.getHours()

    msg.innerHTML = `<p>Agora são ${agora} horas</p>`

    if(agora > 5 && agora < 13) {
        foto.src = 'image/fotomanha.png'
        bg.style.background = '#e2cd9f'
    }
    else if (agora >= 13 && agora < 18) {
        foto.src = 'image/fototarde.png'
        bg.style.background = '#b9846f'
    }
    else {
        foto.src = 'image/fotonoite.png'
        bg.style.background = '#515154'
    }
}