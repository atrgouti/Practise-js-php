// function whereAmI(lat, lang){
//     // const url = `https://geocode.xyz/51.50354,-0.12768?geoit=json&auth=373951042644846129738x125239`

//     fetch(`https://geocode.xyz/${lat},${lang}?geoit=json&auth=373951042644846129738x125239`).then(Response => {Response.json() 
//     console.log(Response)}).then(data =>{ 
//         // let {city, country} = data
//         // console.log(`you are in ${city}, ${country}`)
//         console.log(data)
// }).catch(err => console.log(err))
// }
// whereAmI(-33.933, 18.474)


// first meethod
// function myFunc(lat, lang){
//     fetch(`https://geocode.xyz/${lat},${lang}?geoit=json&auth=373951042644846129738x125239`).then(res => res.json()).then(data => console.log(data))
// }
// myFunc(-33.933, 18.474)

// secend method

const whereAmI = async function(lat, lang){
    const res = await fetch(`https://geocode.xyz/${lat},${lang}?geoit=json&auth=373951042644846129738x125239`)
    const data = await res.json()
    console.log(data)
}
whereAmI(-33.933, 18.474)