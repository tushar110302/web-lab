let a = Number(prompt('Enter the first value'))
let b = Number(prompt('Enter the second value'))

async function add(a,b)
{
    return new Promise((resolve,reject)=>{
        if(typeof(a) !== Number || typeof(b) !== Number )
        {
            setTimeout(()=>{
                resolve(a+b)
            },3000)
        }
        else
        {
            reject('There is an invalid input for addition')
        }
    })
}
async function div(a,b)
{
    let add_res = await add(a,b)
    console.log(add_res)
    return  new Promise((resolve, reject)=>{
        if( b!== 0)
        {
            setTimeout(()=>{
                resolve(a/b)
            },3000)
            
        }
        else
        {
            reject('There is an invalid input for division')
        }
    })

    
}
async function multiply(a,b)
{
    let div_res = await div(a,b)
    console.log(div_res)
    setTimeout(()=>{
        console.log(a*b)
    },3000)
    
}

multiply(a,b)
