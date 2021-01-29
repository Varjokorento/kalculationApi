import express from 'express';
import {calculateProbabilitiesRecursion, calculateProbabilities} from './calculator/montecarlo'

const app = express();
const port = 3000;

app.use(express.json())


app.post('/calculate', (req,res) => {
    const probs = req.body.prob
    const reps = req.body.reps
    if (reps <= 1100) {
        res.json({requestBody: calculateProbabilitiesRecursion(probs, reps)})
    } else {
        res.json({requestBody: calculateProbabilities(probs, reps)})
    }
})



app.listen(port, function() {
  return console.log(`server is listening on ${port}`);
});