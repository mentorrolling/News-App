import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import "../css/card.css";

export default function ClimaApp() {
  //Guardo en variable apiKey de openweathermap.org
  const apiKey = process.env.REACT_APP_API_CLIMA;
  const [coordenadas, setCoordenadas] = useState({
    latitud: 0,
    longitud: 0,
  });
  const [datos, setDatos] = useState({
    ciudad: "",
    temperatura: "",
    descripcion: "",
    temp_max: "",
    temp_min: "",
    humedad: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    calculaCoords();
  }, []);

  useEffect(() => {
    if (coordenadas.latitud !== 0) {
      getClima();
    }
  }, [coordenadas]); // eslint-disable-line react-hooks/exhaustive-deps

  const calculaCoords = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (pos) {
        let lat = pos.coords.latitude.toFixed(2);
        let long = pos.coords.longitude.toFixed(2);
        setCoordenadas({
          latitud: Number(lat),
          longitud: Number(long),
        });
      });
    }
  };

  const getClima = async () => {
    console.log(coordenadas);
    try {
      const resp = await fetch(
        `http://api.openweathermap.org/data/2.5/find?lat=${coordenadas.latitud}&lon=${coordenadas.longitud}&units=metric&appid=${apiKey}&lang=es`
      );

      const data = await resp.json();

      console.log(data);
      const { main, name, weather } = data.list[0];

      setDatos({
        ciudad: name,
        temperatura: main.temp,
        descripcion: weather[0].description,
        temp_max: main.temp_max,
        temp_min: main.temp_min,
        humedad: main.humidity,
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card card-clima">
      {loading ? (
        <div className="row card-body">
          <div className="col text-center">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="row card-body">
          <div className="col-2 align-items-center text-center">
            <span>⛅</span>
          </div>
          <div className="col-10 text-arriba">
            <b>
              {datos.temperatura}°C {datos.ciudad} {datos.temp_max}°max
            </b>
          </div>

          <div className="col offset-2 text-abajo text-capitalize">
            {datos.descripcion} - humedad: {datos.humedad}% hoy
          </div>
        </div>
      )}
    </div>
  );
}
