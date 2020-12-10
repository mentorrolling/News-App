# News App

Este proyecto fué creado con [Create React App](https://github.com/facebook/create-react-app) y [Bootstrap](https://getbootstrap.com/docs/4.4/getting-started/introduction/)

## Para deployar

Una vez clonado el proyecto ejecutar los siguientes comandos:

### `npm install`

### `npm start`

La App se ejecutará en el servidor de desarrollo.\
Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Configurar las Api´s

Como la aplicación hace uso de Api´s externas, se deben generar las key´s en las siguientes páginas:

[News API](https://newsapi.org/).

[OpenWeathermap](https://openweathermap.org/).

### Configurar variables de entorno

En la raiz del proyecto se encuentra el archivo .env_sample que sirve de modelo para configurar las variables de entorno que contendrán las key´s de las Api´s.
Una vez modificado el archivo con los valores correctos de cada variable, se debe renombrar el archivo como .env para que funcione correctamente.
Las apiKey generadas tanto para OpenWeathermap como para News API deben copiarse y agregarse sin comillas (") en la variable de entorno que corresponda.

&copy; Derechos reservados 2020 - Hecho con 💙
