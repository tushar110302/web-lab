let flag = 1

// First Book a flight only then book a Hotel

const BookFlight = (flag)=>{

    return new Promise((resolve,reject)=>{
        if(Number(flag))
        {
            setTimeout(()=>{
                resolve('The Flight has been Booked')
            },2000)
            
        }
        else
        {
            setTimeout(()=>{
                reject('No Flight has been booked')
            },2000)
        }
    })
}

const BookHotel = (flag)=>{
    let result = BookFlight(flag)
    
    result
    .then((booked)=>{
            console.log(booked)
            setTimeout(()=>{
                console.log('Hotel has been Booked')
            },2000)
        }
            
        
        )
    .catch(
        (notbooked)=>{
            console.log(notbooked)
            setTimeout(()=>{
                console.log('No Hotel Has been booked because there was no flight booked')
            },2000)
        })
    }

BookHotel(flag)
