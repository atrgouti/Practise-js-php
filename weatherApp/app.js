const btn = document.querySelector(".btn")
const header = document.querySelector(".header")
const city = document.querySelector(".city")
const humidityy = document.querySelector(".humidity")
const description = document.querySelector(".description")
const wind = document.querySelector(".wind")
const iconn = document.querySelector(".icon")
const validate = document.querySelector(".validate")
const weather = document.querySelector(".weather")

btn.addEventListener("click", async function(){
    try{
        const input = document.querySelector(".input").value
        document.querySelector(".input").value = ''
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=9cae0b3c663b4bf582d225912230405&q=${input}&aqi=no`)
        const data = await res.json()
        let {location : {name},current : {temp_c}, current: {humidity}, current: {condition: {text}}, current : {wind_kph}, current: {condition: {icon}}} = data
        header.textContent = `${temp_c}°C`
        city.textContent = `Weather in ${name}`
        humidityy.textContent = `Humidity: ${humidity}%`
        description.textContent = `${text}`
        wind.textContent = `Wind speed: ${wind_kph} km/h`
        iconn.setAttribute("src", `${icon}`)    

        const empty = document.querySelector(".empty")
        empty.classList.add("loader")
    }catch(error){
        const input = document.querySelector(".input").value
        document.querySelector(".input").value = ''
        validate.textContent = `Please enter a valid city name. ${input} is not valid`

    }finally{
        const empty = document.querySelector(".empty")
        empty.classList.remove("loader")    
    }

})
