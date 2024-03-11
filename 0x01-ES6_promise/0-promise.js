function getResponseFromAPI(){
	return new Promise((resolve, reject) => {
	const success = true;
		if ("success")
		{
			resolve("operation successful");
		}
		else
		{
			reject("operation failed");
		}
	});
}

getResponseFromAPI.then((result) => {
	console.log(result);
})
.catch ((error) => {
	console.error(error);
})
