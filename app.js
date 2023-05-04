function whereAmI(lat, lang){
    // const url = `https://geocode.xyz/51.50354,-0.12768?geoit=json&auth=373951042644846129738x125239`

    fetch(`https://geocode.xyz/${lat},${lang}?geoit=json&auth=373951042644846129738x125239`).then(Response => {Response.json() 
    console.log(Response)}).then(data =>{ 
        // let {city, country} = data
        // console.log(`you are in ${city}, ${country}`)
        console.log(data)
}).catch(err => console.log(err))
}
whereAmI(-33.933, 18.474)



