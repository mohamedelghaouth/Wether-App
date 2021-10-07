class UI {
    showInformation(data){
        document.querySelector("#location").innerHTML = data.cityAndState;
        document.querySelector("#locationweather").innerHTML = data.current.condition.text;
        document.querySelector("#temperature").innerHTML = data.current.temp_f + " F (" + data.current.temp_c + ")";
        document.querySelector("#icon").setAttribute("src", data.image);

        let informations = document.querySelector("#information");
        informations.innerHTML = `
        <li class="list-group-item">
            <div class="w-100">
                Relative Humidity: ${data.current.humidity}
            </div>
        </li>
        <li class="list-group-item">
            <div class="w-100">
                Feels Like: ${data.current.temp_f} F (${data.current.temp_c})
            </div>
        </li>
        `;

       
    }

    hideModal(){
        let close = document.querySelector("#close");
        close.click();
    }

    showModal(){
        let show = document.querySelector("#show");
        show.click();
    }
}