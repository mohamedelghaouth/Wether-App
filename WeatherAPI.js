class WeatherApi {
    
    static url = "http://api.weatherapi.com/v1/current.json?key=30875321a2944c53ac2233614210610&q=";



    async getWeather(city){

        let response = await fetch(WeatherApi.url + city);
        let data = await response.json();

        return data;
    }

    async getIcon(data){

        let response = await fetch(data.current.condition.icon);
        let imageBlob = await response.blob();

        // Then create a local URL for that image and print it 
        data.image = URL.createObjectURL(imageBlob);

        return data;
    }

}