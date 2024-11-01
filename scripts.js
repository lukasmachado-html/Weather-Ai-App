const key = "0ae9773251bc3641a0b480caff66599c"

function colocarDadosNaTela(dados){
    console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    document.querySelector(".text-weather").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsão").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
    
    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {
    const city = document.querySelector(".input-city").value
    buscarCidade(city)
}
