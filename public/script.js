
let windSpeed = 0;
let angle = 0;

// fetch wind speed from server
async function fetchWind() {
    try {
        const res = await fetch('/api/current');
        if (!res.ok) throw new Error('No data yet');
        const data = await res.json();

        windSpeed = data.windspeed || 0;

        document.getElementById('wind-speed').textContent =
            `${windSpeed.toFixed(2)} m/s`;

        const time = new Date(data.time);
        document.getElementById('timestamp').textContent =
            `Last updated: ${time.toLocaleTimeString()}`;
    } catch (err) {
        document.getElementById('wind-speed').textContent = '--';
        document.getElementById('timestamp').textContent = 'No data available';
    }
}

fetchWind();
setInterval(fetchWind, 500);

// webcam setup
async function setupWebcam() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('video');
        video.srcObject = stream;
    } catch (err) {
        alert("Could not access webcam 😞");
        console.error(err);
    }
}

setupWebcam();

// animate the circle
function animate() {
    const circle = document.getElementById('circle');

    // map wind speed to rotation speed
    // e.g., 10 m/s = 10 degrees per frame
    angle += windSpeed * 0.5;
    circle.style.transform = `rotate(${angle}deg)`;

    requestAnimationFrame(animate);
}
animate();