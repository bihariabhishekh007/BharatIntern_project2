const kelvinEL = document.querySelector("#Kelvin");
const celsiusEL = document.querySelector("#celsius");
const fahrenheitEL = document.querySelector("#fahrenheit");
function KelvinConverter(kelvin){
    celsiusEL.value= (kelvin -273.1).toFixed(1);
    fahrenheitEL.value=((kelvin*(9/5))-459.67).toFixed(1);
}
function celsiusConverter(celsius){
    kelvinEL.value=(celsius + 273.1).toFixed(1) ;
    fahrenheitEL.value=((celsius*1.8)+32).toFixed(1);

}
function fahrenheitConverter(fahrenheit) {
    kelvinEL.value=((fahrenheit+459.67)*(5/9)).toFixed(1);
    celsiusEL.value= ((fahrenheit-(32))*5/9 ).toFixed(1);

}
