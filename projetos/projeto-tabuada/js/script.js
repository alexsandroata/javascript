var bnt = document.querySelector('input#bnt')
bnt.addEventListener('click', tabuada)

function tabuada () {
    let num = document.querySelector('input#txtn')
    let tab = document.querySelector('select#seltab')

    if (num.value.length == 0){
        window.alert('Por favor, digite um numero!')
    }
    else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n}X${c}=${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}