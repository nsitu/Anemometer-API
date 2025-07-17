
async function fetchWind() {
    try {
        const res = await fetch('/api/current');
        if (!res.ok) throw new Error('No data yet');
        const data = await res.json();

        document.getElementById('wind-speed').textContent =
            `${data.windspeed.toFixed(2)} m/s`;

        const time = new Date(data.time);
        document.getElementById('timestamp').textContent =
            `Last updated: ${time.toLocaleTimeString()}`;
    } catch (err) {
        document.getElementById('wind-speed').textContent = '--';
        document.getElementById('timestamp').textContent = 'No data available';
    }
}

// fetch immediately & twice every second
fetchWind();
setInterval(fetchWind, 500);