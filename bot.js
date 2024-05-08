const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0
const botSay = (data) => {
    return["hallo aku jaddid alwi, nama kamu siapa ya?",
    `hallo ${data?.nama}, berapa usia kamu?`,
    `ooh ${data?.usia}, hobi kamu apa yaaa?`,
    `waaaw, sama dong aku juga hobi ${data?.hobi}, btw udah punya pacar belum kamu?`,
    `ooh ${data?.pacar}, ya udah kalo gitu udahan ya...`,
    ]
}
pertanyaan.innerHTML = botSay()[0]

let usersData =[]

function botStart() {
    init++
    if(init === 1) {
        botDelay({nama: jawaban.value})      
    }else if (init ===2) {
        botDelay({usia: jawaban.value})
    }else if (init ===3) {
        botDelay({hobi: jawaban.value})
    }else if (init ===4) {
        botDelay({pacar: jawaban.value}) 
    }else if (init ===5) {
        finishing()
    }else {
        botEnd()
    }
}

function botDelay(jawabanUser){
    console.log({usersData: usersData})
    setTimeout(() =>{
        pertanyaan.innerHTML = botSay(jawabanUser) [init]
    },[1500])
    usersData.push(jawaban.value)
    jawaban.value=""
}

function finishing(){
    pertanyaan.innerHTML = `thankyou ya ${usersData[0]}udah main ke jaddid bot👌. kali kali main ${usersData[2]} sama aku biar tambah jago lagi.`
    jawaban.value="ok thanks juga 🤩"
}

function botEnd(){
    window.location.reload(

    )
}