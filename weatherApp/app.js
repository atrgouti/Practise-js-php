const btn = document.querySelector(".btn")
const header = document.querySelector(".header")
const city = document.querySelector(".city")
const humidityy = document.querySelector(".humidity")
const description = document.querySelector(".description")
const wind = document.querySelector(".wind")

btn.addEventListener("click", async function(){
    const input = document.querySelector(".input").value
    const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=9cae0b3c663b4bf582d225912230405&q=${input}&aqi=no`)
    const data = await res.json()
    let {location : {name},current : {temp_c}, current: {humidity}, current: {condition: {text}}, current : {wind_kph}} = data
    console.log(data)
    header.textContent = `${temp_c}°C`
    city.textContent = `Weather in ${name}`
    humidityy.textContent = `Humidity: ${humidity}%`
    description.textContent = `${text}`
    wind.textContent = `Wind speed: ${wind_kph} km/h`
})


const getIcons = async function(){
    const res = await fetch("https://www.weatherapi.com/docs/weather_conditions.json")
    const data = await res.json()
    console.log(data)
}
getIcons()