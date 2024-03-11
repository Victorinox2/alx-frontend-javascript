function function getResponseFromAPI() {
        return new Promise((resolve, reject) => {

                if ("succesful")
                {
                        resolve("success");
                }
                else
                {
                        reject("failuere");
                }
        });
}
