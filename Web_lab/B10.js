const message = document.querySelector('.message')

let visitorCount = localStorage.getItem('visitorCount');
 
    if (visitorCount === null) {
      // If visitor count does not exist, initialize it to 1
      visitorCount = 1;
      localStorage.setItem('visitorCount', visitorCount);
    } else {
      // If visitor count exists, increment it by 1
      visitorCount = parseInt(visitorCount) + 1;
      localStorage.setItem('visitorCount', visitorCount);
    }
 
    // Display the visitor count on the webpage
    message.textContent = `Total Visitors: ${visitorCount}`;