import React, {useState, useEffect} from 'react';
import './css/style.css'; 

const Temp = () => {

  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Ahmedabad");

  useEffect(() => {
    const fetchApi = async () =>{
        const url     = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=xxxxxxx`;
        const res     = await fetch(url);
        const resJson = await res.json();
        // console.log(resJson);
        setCity(resJson.main);
      };
    fetchApi();
  },[search])



  return (
    <div className='weather-box'>
        <input type="search" onChange = {(e)=>{setSearch(e.target.value)}} value={search} className="searchBox" />
        {!city ? (
          <p id='not-found'>No data found</p>
        ) : (
        <div className='info'>
            <h1 className='location'>
                <i className='fa fa-map-marker-alt'></i> {search}
            </h1>
            <h2 className='temp'>{city.temp}</h2>
            <h3 className='tmpMin-max'>Min : {city.temp_min} Cel | Max : {city.temp_max} Cel </h3>
        </div>
        )}
    </div>
  )
}

export default Temp
