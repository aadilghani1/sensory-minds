/**
 * Fisher–Yates Shuffle to shuffle any given array
 * @param array Given array to shuffle
 * @returns The shuffled array
 */
export const shuffleArray = (array: Array<unknown>) => {
  let m = array.length;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    const i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    const t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};
