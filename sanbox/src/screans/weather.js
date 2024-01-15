import { useEffect, useState } from 'react';

const TOWN = "Cahors"
const URL = "http://api.weatherapi.com/v1/current.json?key=72361dc0de984631970174354230208&q=";
 
function Weather(props) {
 
    const [temperature, setTemperature] = useState(null);
 
    async function asyncLoadData() {
        const response = await fetch(URL + TOWN);
        const data = await response.json();
        setTemperature(data);
    }
    useEffect(() => {asyncLoadData()}, [])
 
    if(temperature){
        return (
            <div>
                Il fait {temperature.current.temp_c}°C à {TOWN}
            </div>
        );
    } else {
        <div>Chargement...en cours</div>
    }
}
 
export default Weather;