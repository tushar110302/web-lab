const button1 = document.querySelector(".click")
const message = document.querySelector('.message')

button1.addEventListener('click',()=>{

    if(typeof(Storage) !== "undefined")
    {
        if(localStorage.clickcount)
        {
            localStorage.clickcount = Number(localStorage.clickcount) + 1
        }
        else
        {
            localStorage.clickcount = 1
        }
        message.innerHTML = `Your clicked ${localStorage.clickcount} times`         
    }

    else
    {
        message.innerHTML = 'Your Browser does not support local storage API'
    }
})