// based from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
// made it a pure function and added types
export function shuffle<T>(input: Array<T>): Array<T> {
  const output = [...input];
  for (let i = output.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [output[i], output[j]] = [output[j], output[i]];
  }

  return output;
}
