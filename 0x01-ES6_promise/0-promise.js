function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) {
        // If successful, resolve the Promise with the result
        resolve("API response data");
      } else {
        // If there's an error, reject the Promise with an error message
        reject("Error: Unable to get response from the API");
      }
    }, 2000);
  });
}

getResponseFromAPI()
  .then(response => {
    console.log("Success:", response);
  })
  .catch(error => {
    console.error("Error:", error);
  });
