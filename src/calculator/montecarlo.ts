export const calculateProbabilitiesRecursion = (
  probability: number,
  repetitions: number
): number => {
  const compareNumber = probability * 100;
  return monteKalleRecursion(compareNumber, 0, 0, repetitions)
};

export const calculateProbabilities = (probability: number, repetitions: number): number => {
    const compareNumber = probability * 100;
    let occ = 0;
    for (let i = 0; i < repetitions; i++) {
        if (randomNumber() < compareNumber) {
            occ++;
        }
    }
    return occ;
}

const monteKalleRecursion = (
  compareNumber: number,
  accumulator: number,
  iter: number,
  repetitions: number
): number => {
  if (iter == repetitions) {
    return accumulator;
  } else {
    const randInt = Math.floor(Math.random() * Math.floor(100));
    if (randInt <= compareNumber) {
      return monteKalleRecursion(compareNumber, accumulator + 1, iter + 1, repetitions);
    }
    return monteKalleRecursion(compareNumber, accumulator, iter + 1, repetitions);
  }
};


const randomNumber = () => {
  return Math.floor(Math.random() * Math.floor(100));
};
