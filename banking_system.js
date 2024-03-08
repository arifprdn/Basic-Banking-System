class BankAccount {
    #saldo = 0
    constructor(props){
        this.name = props.name   
    }


    pilihMenu(){
        let menu = Number(window.prompt("Pilih menu\n1. Deposit\n2. Withdraw\n3. Cek Saldo\n0. Keluar"))
        switch(menu){
            case 1:
                this.deposit(Number(window.prompt("Deposit Saldo : ")))
                break
            case 2:
                this.withdraw(Number(window.prompt("Withdraw Saldo : ")))
                break
            case 3:
                setTimeout(() => {
                    this.cekSaldo();
                    this.pilihMenu();
                }, 5000);
                break
            case 0:
                break
            default:
                window.alert("Input Invalid")
                this.pilihMenu()
                break
        }
    }

    deposit(amount){
        if (isNaN(amount)){
            window.alert("Input tidak valid!")
            this.pilihMenu()
            return
        }

        if (amount <= 0 ){
            window.alert("Jumlah deposit tidak valid!")
            this.pilihMenu()
            return
        } 
        this.#saldo += amount
        window.alert(`Deposit berhasil, total saldo : ${this.#saldo}`)
        this.pilihMenu()
    }

    withdraw(amount){
        if (isNaN(amount)){
            window.alert("Input tidak valid!")
            this.pilihMenu()
            return
        }

        if (amount <= 0) {
            window.alert("Input tidak boleh 0 atau negatif!")
            this.pilihMenu()
            return
        }

        if (this.#saldo <= 0){
            window.alert(`Saldo anda tidak ada!`)
            this.pilihMenu()
            return
        }
            
        if (this.#saldo < amount){
            window.alert(`Saldo anda tidak Cukup!`)
            this.pilihMenu()
            return
        } 

        this.#saldo -= amount
        window.alert(`Withdraw berhasil, sisa saldo : ${this.#saldo}`)
        this.pilihMenu()
    }

    cekSaldo(){
        window.alert(`Saldo anda : ${this.#saldo}`) 
    }


}

let bankMandiri = new BankAccount({name: 'Bank Mandiri'})
bankMandiri.pilihMenu()
