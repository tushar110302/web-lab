(()=>{

    const button1 = document.querySelector(".click")
    const message = document.querySelector(".message")

    if (!navigator.geolocation) {
        message.textContent = `Your browser doesn't support Geolocation`;
        message.classList.add('error');
        return;
    }


    // button1.addEventlistener('click',function()
    button1.addEventListener('click', function() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError)
    });

    function onSuccess(position)
    {
        const{
            latitude,
            longitude
        } = position.coords

        message.classList.add('success')
        message.textContent =`Your Location is : ${latitude} and ${longitude}`
        
    }

    function onError()
    {
        message.classList.add('Error')
        message.textContent = `Your connection was not established`  
    }

})()


