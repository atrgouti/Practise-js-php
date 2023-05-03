const p = new Promise((resolve, reject) => {
    let num = 1 + 3
    if(num == 2){
        resolve("success")
    }else{
        reject("fail")
    }
})

p.then((reposnse) => {
    console.log("this is in the then " + reposnse)
}).catch((message) => {
    console.log("this is in catch " + message)
})