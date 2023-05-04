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

// const whereAmI = async function(lat, lang){
//     const res = await fetch(`https://geocode.xyz/${lat},${lang}?geoit=json&auth=373951042644846129738x125239`)
//     const data = await res.json()
//     console.log(data)
// }
// whereAmI(-33.933, 18.474)


// const p = new Promise((resolve, reject) => {
//     let x = 2
//     if(x == 10){
//         resolve("success")
//     }else{
//         reject("fail")
//     }
// })

// p.then(sucess => console.log("i am in then and you are", sucess)).catch(res => console.log(`iam in then and you are ${res}`))


const gumbling = new Promise((resolve, reject) => {
    console.log("your game is proccesing")
    setTimeout(function(){
        if(Math.random() > 0.5){
            resolve("you win")
        }else{
            reject("you lose")
        }
    }, 2000)
})

gumbling.then(res => console.log(res)).catch(res => console.log(res))