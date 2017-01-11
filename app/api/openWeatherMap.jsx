var axios = require('axios');

// API KEY FOR OPEN WEATHER MAP API => 295009f92502f5fbe4bf81f88c4aab96

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=295009f92502f5fbe4bf81f88c4aab96&units=metric';

module.exports = {
	getTemp: function(location) {
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res)
             {
       		if(res.data.cod && res.data.message)
       		{
       			throw new Error(res.data.message);
       		}
       		else
       		{
				return res.data.main.temp;
       		}
             }, function(res)
             {
             	throw new Error(res.data.message);
             });
	}
}