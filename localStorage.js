class LocalStorage {
    
    static url = "http://api.weatherapi.com/v1/current.json?key=30875321a2944c53ac2233614210610&q=";



    setCityAndState(city, state){
        localStorage.setItem("city", JSON.stringify(city));
        localStorage.setItem("state", JSON.stringify(state));
    }


    getCityAndState(){
        let city = JSON.parse(localStorage.getItem("city"));
        let state = JSON.parse(localStorage.getItem("state"));

        return {
            city: city,
            state: state
        };
    }

}