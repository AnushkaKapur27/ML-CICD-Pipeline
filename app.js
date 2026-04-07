const express = require('express');
const app = express();

app.use(express.json());

function predict(x) {
    return 2*x+1;
}

app.post('/predict',(req,res) => {
    const {x} = req.body;
    if (x === undefined) {
        return res.status(400).json( {error: "Please provide x"} );
    }
    const result = predict(x);
    res.json({
        input: x,
        prediction: result
    });
});

app.get('/', (req,res) => {
    res.send('ML Service is Running');
});

app.listen(3000, '0.0.0.0', () => {
    console.log("Server running on port 3000");
});
