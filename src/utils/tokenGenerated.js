// const tokenGenerated = () => {
//   const characters = [
//     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
//     'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
//     'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a',
//     'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
//     'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
//     't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1',
//     '2', '3', '4', '5', '6', '7', '8', '9',
//   ];
//   let index = 0;
//   let token = '';

//   while (index < 16) {
//     const i = Math.floor(Math.random() * 62);
//     token += characters[i];
//     index += 1;
//   }
//   return token;
// };

// module.exports = tokenGenerated;

const tokenGenerated = () => {
  const chars = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a',
    'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1',
    '2', '3', '4', '5', '6', '7', '8', '9',
  ];
  let i = 0;

  let token = '';
  while (i < 16) {
    const index = Math.floor(Math.random() * 62);
    token += chars[index];
    i += 1;
  }
  return token;
};

module.exports = tokenGenerated;