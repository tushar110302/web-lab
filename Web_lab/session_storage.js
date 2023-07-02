const button1 = document.querySelector('.click')
const message = document.querySelector('.message')

button1.addEventListener('click', ()=>{

    
    if(typeof(Storage) !== "undefined")
    {
        if(sessionStorage.clickcount)
        {
            sessionStorage.clickcount = Number(sessionStorage.clickcount) + 1
        }
        else 
        {
            sessionStorage.clickcount = 1
        }
        message.innerHTML = `Your have click ${sessionStorage.clickcount} times`
    }
    else
        message.innerHTML = `Your Browser does not support seesion storage`
})