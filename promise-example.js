// /**
//  * example of how to do and understand promises in JavaScript
//  */

// function getTempCallback(location, callback)
// {
// 	callback(undefined, 80);
// 	callback('City not found');
// }

// getTempCallback('Copenhagen', function(err, temp) {
// 	if(err)
// 	{
// 		console.log('error', err);
// 	}
// 	else
// 	{
// 		console.log('success', temp);
// 	}
// });

// /**
//  * example of a promise function
//  * @param  {[type]} location [description]
//  * @return {[type]}          [description]
//  */
// function getTempPromise(location)
// {
// 	*
// 	 * returning a new promise
// 	 * @param  {[type]} resolve       [description]
// 	 * @param  {[type]} reject)	{	} [description]
// 	 * @return {[type]}               [description]

// 	return new Promise(function(resolve, reject)
// 	{
// 		setTimeout(function()
// 		{
// 			resolve(20);
// 			reject('City not found');
// 		}, 1000);
// 	});
// }

// /**
//  * call the promise function that works like a if statement
//  * @param  {[type]} temp){	console.log('promise           success',     temp);} [description]
//  * @param  {[type]} function(err){	console.log('Something when          wrong',  err);}       [description]
//  * @return {[type]}                                        [description]
//  */
// getTempPromise('Copenhagen').then(function (temp)
// {
// 	console.log('promise success', temp);
// }, function(err)
// {
// 	console.log('Something when wrong', err);
// });

/**
 * challenge building own custom promise
 */

function addNumbersPromise(a, b)
{
	return new Promise(function(resolve, reject) {
		if(a && b && typeof a == 'number' && typeof b === 'number')
		{
			resolve(a + b);
		}
		else
		{
			reject('No numbers arguments are set');
		}
	});
}

addNumbersPromise(2, 2).then(function(numbers)
{
	console.log('success', numbers); // numbers argument => (a, b)
}, function(err)
{
	console.log('error', err);
})