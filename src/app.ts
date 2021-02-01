import express from 'express';
import {calculateProbabilitiesRecursion, calculateProbabilities} from './services/calculator/montecarlo'
import {typeOrmConfig} from './config'
import {getTopPosts} from './services/reddit/postService'

const app = express();
const port = typeOrmConfig.port

app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/test', (req, res) => {
    const topArr = getTopPosts('wallstreetbets')
    res.send(topArr)
})


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