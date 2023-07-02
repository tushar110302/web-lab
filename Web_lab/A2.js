function asyncFunction() {
    return new Promise((resolve, reject) => {
      // Simulating an asynchronous operation
      setTimeout(() => {
        const randomNumber = Math.random();
        
        // Check if the random number is greater than 0.5
        if (randomNumber > 0.5) {
          resolve(randomNumber);
        } else {
          reject("Error: Random number is less than or equal to 0.5");
        }
      }, 2000);
    });
  }

  function handleSuccess(result) {
    alert("Promise resolved with result: " + result);
  }

  function handleFailure(error) {
    alert("Promise rejected with error: " + error);
  }

  function executePromise() {
    asyncFunction()
      .then(handleSuccess)
      .catch(handleFailure);
  }