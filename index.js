import express from "express";
const app = express();

app.use(express.json()); // parse JSON bodies

app.use('/', express.static('./public'))

// store the last 30 wind speed values
const windSpeeds = [];

app.get("/api/datetime", (req, res) => {
    res.send({ datetime: new Date() });
});

app.post("/api/update", (req, res) => {
    const { windspeed } = req.body;
    if (typeof windspeed !== 'number') {
        return res.status(400).send({ error: "windspeed must be a number" });
    }

    // add new windspeed and keep only last 30
    windSpeeds.push({ time: new Date(), windspeed });
    if (windSpeeds.length > 30) {
        windSpeeds.shift(); // remove oldest
    }

    console.log(`New wind speed: ${windspeed} m/s`);
    res.send({ status: "ok", count: windSpeeds.length });
});

app.get("/api/current", (req, res) => {
    if (windSpeeds.length === 0) {
        return res.status(404).send({ error: "No data yet" });
    }

    const latest = windSpeeds[windSpeeds.length - 1];
    res.send(latest);
});

app.listen(80, () => {
    console.log(`Express is now Live.`);
});
