function procurar() {
    let secs1 = document.querySelector('#sec1')
    let secs2 = document.querySelector('#sec2')
    let secs3 = document.querySelector('#sec3')
    const res = document.querySelector('#top1')
    let nome = document.querySelector('#name')
    let idade = document.querySelector('#idade')

    let nm = String(nome.value)
    const idd = Number(idade.value)

    if (idd <= 12) {
        res.innerHTML = `${nm} esse foram o jogos que achamos para vc`
        secs1.style.backgroundImage = "url('minecraft.jpg')"
        secs2.style.backgroundImage = "url('fire red.jpg')"
        secs3.style.backgroundImage = "url('roblox.jpg')"
    }else if (idd <= 15) {
        res.innerHTML = `${nm} esse foram o jogos que achamos para vc`
        secs1.style.backgroundImage = "url('COD.jpg')"
        secs2.style.backgroundImage = "url('assassins creeds.jpg')"
        secs3.style.backgroundImage = "url('red dead.jpg')"
    }else if (idd <= 17) {
    res.innerHTML = `${nm} esse foram o jogos que achamos para vc`
        secs1.style.backgroundImage = "url('fortnite.jpg')"
        secs2.style.backgroundImage = "url('warzone.jpg')"
        secs3.style.backgroundImage = "url('cs2.jpg')"
    }else if (idd >= 18) {
        res.innerHTML = `${nm} esse foram o jogos que achamos para vc`
        secs1.style.backgroundImage = "url('red dead.jpg')"
        secs2.style.backgroundImage = "url('FIFA.jpg')"
        secs3.style.backgroundImage = "url('GTA.jpg')"
    }

    
}