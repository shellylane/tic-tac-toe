export default {
  calculateWinner: function(squares) {
    // each array is all the squares that would make up a line
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    // loop through all of the lines
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      //if there is an 'a' & 'a' = 'b' & 'a also = c' return the value of a  (x or o)
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    //otherwise return null
    return null;
  }
};
