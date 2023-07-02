let loc = prompt('Enter location')

function result(loc){
    return new Promise((resolve,reject) =>{
        if(loc === "Paris"){
            setTimeout(()=>{
                resolve('Lets take a trip to Paris')
            },3000)
        }
        else{
            setTimeout(()=>{
                reject("Invalid Location")
            },3000)
        }
    })
}
result(loc)
.then((msg)=> console.log(msg))
.catch((err)=> console.log(err))