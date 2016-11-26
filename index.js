#!/usr/bin/env node

let fs = require('fs');

fs.readFile('app.json', 'utf8', function(err, data) {

	err && console.log(err.message)

	let parsed = JSON.parse(data).env;

	let line = "";
	let line_array = "";

	for(key in parsed)
	{
		let ble_array = limit_80_array(parsed[key].description, "", 80);

		line_array += ble_array + "\n" + key + "=\n\n"
	}
	console.log(line_array.substring(0, line_array.length - 2))

});

function limit_80_array(string, fragment, length)
{
	let array = string.split(" ");
	let array_copy = array.slice(); // make a copy

	let tmp = [];
	let size = 0;

	for(let index in array)
	{
		//
		//	Add the word to our array
		//
		tmp.push(array[index])

		//
		//	Store the size of the word, plus 1 for the extra space
		//
		size += array[index].length + 1;

		//
		//	Remove the first element from the array
		//
		array_copy.shift();

		//
		//	Check the future
		//
		let position = parseInt(index) + 1;

		//
		//	Make sure the future holds something for us
		//
		if(array[position])
		{
			//
			//	Calculate the future size
			//
			let future = size + array[position].length;

			//
			//	If the future will be to big for us, lets run away
			//
			if(future >= length - 2)
			{
				break;
			}
		}
	}

	//
	//	Check if there are some word left in the array
	//
	if(array_copy.length > 0)
	{
		//
		//	Combine what we have
		//
		fragment += "# " + tmp.join(" ") + "\n";

		//
		//	Process the left overs again
		//
		return limit_80_array(array_copy.join(" "), fragment, length)
	}

	//
	//	If nothing left, combine what we have
	//
	fragment += "# " + tmp.join(" ") + "\n";

	//
	//	->	Return our master peace
	//
	return fragment.substring(0, fragment.length - 1);
}


