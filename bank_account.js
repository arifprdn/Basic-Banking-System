let saldo = 0;


function pilihMenu(){
    let menu = Number(window.prompt("Pilih menu\n1. Tambah Saldo\n2. Kurangi Saldo\n0. Keluar"))
    switch(menu){
        case 1:
            tambahSaldo()
            break;
        case 2:
            kurangiSaldo()
            break;
        case 0:
            break;
        default:
            window.alert("Input Invalid")
            break;
    }
}


function tambahSaldo(){
    saldo += Number(window.prompt("Tambahkan Saldo : "))
    console.log(saldo)
    window.alert("Saldo anda adalah : "+saldo)
    pilihMenu()
}

function kurangiSaldo(){
    saldo -= Number(window.prompt("Kurangi Saldo : "))
    console.log(saldo)
    window.alert("Saldo anda adalah : "+saldo)
    pilihMenu()
}

pilihMenu()
// tambahSaldo()
// kurangiSaldo()