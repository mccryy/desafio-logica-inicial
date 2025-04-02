let nomeHeroi = "superman"
let xpHeroi = 4000

switch (true) {
    case (xpHeroi <= 1000):
        console.log(`O Herói de nome ${nomeHeroi} está no nível `+`Ferro`)
        break
    case (xpHeroi >= 1001 && xpHeroi <= 2000):
        console.log(`O Herói de nome ${nomeHeroi} está no nível `+`Prata`)
        break
    case (xpHeroi >= 2001 && xpHeroi <= 5000):
        console.log(`O Herói de nome ${nomeHeroi} está no nível `+`Prata`)
        break
    case (xpHeroi >= 5001 && xpHeroi <= 7000):
        console.log(`O Herói de nome ${nomeHeroi} está no nível `+`Ouro`)
        break
    case (xpHeroi >= 7001 && xpHeroi <= 8000):
        console.log(`O Herói de nome ${nomeHeroi} está no nível `+`Platina`)
        break
    case (xpHeroi >= 8001 && xpHeroi <= 9000):
        console.log(`O Herói de nome ${nomeHeroi} está no nível `+`Ascendente`)
        break
    case (xpHeroi >= 9001 && xpHeroi <= 10000):
        console.log(`O Herói de nome ${nomeHeroi} está no nível `+`Imortal`)
        break
    case (xpHeroi >= 10001):
        console.log(`O Herói de nome ${nomeHeroi} está no nível `+`Radiante`)
        break
}