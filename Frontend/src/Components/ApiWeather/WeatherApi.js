const apiKey = '8a5d1d7c7df279aedd4b521d0d797cd8'; // Reemplaza con tu API key
const city = 'Santiago'; // La ciudad para la cual deseas obtener el clima
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log('Clima en Santiago:', data);
    // Puedes extraer la información que necesites del objeto data
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    console.log(`Temperatura: ${temperature}°C, Condiciones: ${description}`);
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
