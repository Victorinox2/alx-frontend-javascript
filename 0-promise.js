const promise = new Promise(getResponseFromAPI(resolve, reject) => {
	if ("successful")
	{
		resolve("success");
	}
	else
	{
		reject("resolve");
	}
});
