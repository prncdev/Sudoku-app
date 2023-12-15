import ShuffleArray from ".";

describe('shuffle' , () => {
  it('returns an array with the same length after being shuffled', () => {
    const array = [1, 2, 3];  // So we have created an of 3 elements
    ShuffleArray(array); // Here we shuffled the array 
    expect(array).toHaveLength(3); // Here we testing whether we got the expected out? In this case we are expecting the function to return array of 3 length.
  });

  it('returns an array with the same element after being shuffled', () => {
    const array = [1, 2, 3];

    // Again we are shuffling the array.
    ShuffleArray(array);

    // After shuffled the array successfully we are testing whether the function returns the elements with no duplicate elements. This is what we are expecting from our ShuffleArray function.
    expect(array).toContain(1);
    expect(array).toContain(2);
    expect(array).toContain(3);
  });
});