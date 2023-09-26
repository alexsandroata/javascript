var bnt = document.querySelector('input.bnt')
bnt.addEventListener('click', verificar)

function verificar () {
    var data = new Date()
    var ano = data.getFullYear()

    var fAno = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert(`[${ano}] verifique os dados e tente novamente`)
    }
    else {
        var fSex = document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fSex[0].checked) {
            var genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'image/crianca-m.png')
            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'image/jovem-m.png')
            }
            else if (idade < 51) {
                //Adulto
                img.setAttribute('src', 'image/adulto-m.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'image/idoso-m.png')
            }
        }
        else if (fSex[1].checked) {
            var genero = 'Mulher'
            if(idade >=0 && idade <= 10){
                //criança
                img.setAttribute('src', 'image/crianca-f.png')

            }
            else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'image/jovem-f.png')
            }
            else if (idade < 51) {
                //Adulto
                img.setAttribute('src', 'image/adulto-f.png')
            }
            else {
                //Idoso
                img.setAttribute('src', 'image/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos <br>`
        res.appendChild(img)
        img.style.borderRadius = '50%'
    }
}