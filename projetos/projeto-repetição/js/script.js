function contar(){
    let ini = document.querySelector('input#txti')
    let fim = document.querySelector('input#txtf')
    let pas = document.querySelector('input#txtp')
    let res = document.querySelector('div#res')
    
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados')
    } 
    else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        
        if (p <= 0) {
            window.alert('Passo invalido, passo considerado 1')
            p = 1
        }

        if (i < f) {
            for (let c = i ; c <= f ; c += p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
        }
        else {
            for(let c = i ; c >= f ; c -= p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}