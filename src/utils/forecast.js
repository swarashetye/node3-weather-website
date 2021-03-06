const request = require('request')

const forecast = ( latitude,longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=59c50d1d37cbe411c32cd311de36239f&query='+ latitude +','+ longitude +'&units=f'
    request({url , json:true}, (error,{body}={}) => {
        if(error){
            callback("Unable to connect.",undefined)
        }
        else if(body.error){
            callback("Unable to find the location. Try another search.", undefined)
        }
        else{
            callback(undefined,"Humidity : " + body.current.humidity + ". " + body.current.weather_descriptions[0] +". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike +" degrees out")
        }
        
    })
}

module.exports=forecast