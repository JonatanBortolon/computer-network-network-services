function codification(input = '') {
  var chars = [];
  var sum = 0;
  var invertedSum = '';
  var temp = '';

  for (let i = 0; i < input.length; i++) {
    sum += input[i].charCodeAt();

    chars.push(
      Array(8 - input[i].charCodeAt().toString(2).length + 1).join('0') +
        input[i].charCodeAt().toString(2)
    );
  }

  if (sum > 255) return { error: true, response: '' };

  sum = Array(8 - sum.toString(2).length + 1).join('0') + sum.toString(2);

  chars.forEach((char) => (temp += char));

  for (
    let i = 0;
    i <
    (Array(8 - sum.toString(2).length + 1).join('0') + sum.toString(2)).length;
    i++
  ) {
    invertedSum +=
      (Array(8 - sum.toString(2).length + 1).join('0') + sum.toString(2))[i] ===
      '1'
        ? '0'
        : '1';
  }

  temp += invertedSum;
  return { error: false, response: temp.repeat(3) };
}

export default codification;
