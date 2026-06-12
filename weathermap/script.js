async function getWeather() {
  const apiKey = "7d7f10d4b91e5c100b578f4530f058b0";
  const city = document.getElementById("city").value;

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();

    document.getElementById("result").innerHTML = `
      <h3>${data.name}</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].description}</p>
      <p>Humidity: ${data.main.humidity}%</p>
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = "Error fetching weather data";
  }
}