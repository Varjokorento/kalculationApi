import {calculateProbabilities} from '../calculator/montecarlo'
import {assert} from 'chai'


describe("calculateprobabilities", function () {
  it("it should return roughly correct number", function () {
    const number =calculateProbabilities(0.3, 100)
    assert(number < 50)
  });
});