const weatherApi = new WeatherApi();
const ui = new UI();
const localStorageUtils = new LocalStorage();

const form = document.querySelector("#form");


form.addEventListener("submit", function(e){
    e.preventDefault();

    let  state = document.querySelector("#stateId").value;
    let  city = document.querySelector("#cityId").value;

    if(state !== "" && city !== ""){
        state = abbrState(state, 'abbr').toLowerCase();

        ui.hideModal();

        localStorageUtils.setCityAndState(city, state);

        fetchData(state, city);
    }else{
        console.log("error")
    }

});

document.addEventListener("DOMContentLoaded", function(){
    let data =  localStorageUtils.getCityAndState();
    if(data.state !== null && data.city !== null){
        fetchData(data.state, data.city);
    }else {
        ui.showModal();    
    }
 
})


function fetchData(state, city){
    weatherApi.getWeather(city)
    .then((data) => {
        data.cityAndState = city + "," + state;
        return weatherApi.getIcon(data);
    })
    .then((data) => {
        ui.showInformation(data);
    })
    .catch((err) => {
        
    });
}