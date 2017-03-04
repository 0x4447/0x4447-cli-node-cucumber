#!/usr/bin/env node

let fs = require('fs');
let crypto = require('crypto');

//
//	Open the app.json file.
//
fs.readFile('app.json', 'utf8', function(err, data) {

	//
	//	1.	Display Error if any
	//
	err && console.log(err.message)

	//
	//	2.	Convert the content of the file in to a JS Object
	//
	let parsed = JSON.parse(data).env;

	//
	//	3.	Create a variable to store the
	//
	let line = "";

	//
	//	4.	Loop over the environment variables and convert them in to a file
	//
	for(env_var in parsed)
	{
		//
		//	1.	Save the default value in a clear variable
		//
		let value = parsed[env_var].value;

		//
		//	2.	Save the description in a clear variable
		//
		let description = parsed[env_var].description;

		//
		//	3.	Save the generator in a clear variable
		//
		let generator = parsed[env_var].generator;

		//
		//	4.	Chop the description in to a specific line length
		//
		let comment = limit_80_array(description, "", 80);

		//
		//	5.	Create the default empty env name
		//
		let env_name = env_var + "=";

		//
		//	6. 	If the file specifies a secret, we create one.
		//
		if(!value && generator === "secret")
		{
			env_name += crypto.randomBytes(16).toString('hex');
		}

		//
		//	7.	If there is a default value for the env var, we append it
		//
		if(value && !generator)
		{
			env_name += value;
		}

		//
		//	8.	Combine the comment section with the environment variable
		//
		line += comment + "\n" + env_name + "\n\n";
	}

	//
	//	5.	Remove the last two new line characters
	//
	let file = line.substring(0, line.length - 2);

	//
	//	6.	Save the data in to the .env file.
	//
	fs.writeFile('.env', file, (err) => {

		//
		//	1.	Display Error if any
		//
  		err && console.log(err.message)

  		//
  		//	2.	Let the user know what happened
  		//
  		console.log("The file .env was created.");

	});

});

//
//	The main function that is responsible in chopping the comment to a specific
//	length.
//
//	string 		<-	The string to chop
//	fragment	<- 	The variable holding the chopped string
//	length		<-	Line length
//
//	Return 	->	Chopped and formated string
//
function limit_80_array(string, fragment, length)
{
	//
	//	1.	Split the string in to an array
	//
	let array = string.split(" ");

	//
	//	2.	Make a copy of the array. We are going to use this array as a
	//		container that will hold the words that need to be still proceed
	//
	let array_copy = array.slice();

	//
	//	3.	A temp Array that is going to hold one line of text at each iteration
	//
	let tmp = [];

	//
	//	4.	Variable that helps us track how many character do we have in one
	//		line already
	//
	let size = 0;

	//
	//	5.	Main loop that append words until they are less then the length
	//		passed in the function
	//
	for(let index in array)
	{
		//
		//	1.	Add the word to our array
		//
		tmp.push(array[index])

		//
		//	2.	Store the size of the word, plus 1 for the extra space
		//
		size += array[index].length + 1;

		//
		//	3.	Remove the first element from the array
		//
		array_copy.shift();

		//
		//	4.	Check the future
		//
		let position = parseInt(index) + 1;

		//
		//	5.	Make sure the future holds something for us
		//
		if(array[position])
		{
			//
			//	1.	Calculate the future size
			//
			let future = size + array[position].length;

			//
			//	2.	If the future will be to big for us, lets run away
			//
			if(future >= length - 2)
			{
				break;
			}
		}
	}

	//
	//	6.	Check if there are some word left in the array
	//
	if(array_copy.length > 0)
	{
		//
		//	1.	Combine what we have
		//
		fragment += "# " + tmp.join(" ") + "\n";

		//
		//	2.	Process the left overs again
		//
		return limit_80_array(array_copy.join(" "), fragment, length)
	}

	//
	//	7.	If nothing left, combine what we have
	//
	fragment += "# " + tmp.join(" ") + "\n";

	//
	//	->	Return our master peace
	//
	return fragment.substring(0, fragment.length - 1);
}


