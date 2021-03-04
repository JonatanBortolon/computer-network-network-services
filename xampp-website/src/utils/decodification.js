function decodification(input = '') {
  if (input.length % 3 !== 0) return { error: true, response: '' };

  const re = /^[0-1]+$/;

  if (!re.test(input)) return { error: true, response: '' };

  const temp1 = input.substring(0, input.length / 3);
  const temp2 = input.substring(input.length / 3, (input.length / 3) * 2);
  const temp3 = input.substring((input.length / 3) * 2, input.length);

  var correct = '';
  var sum = 0;
  var results = [];

  if (temp1 !== temp2 && temp1 !== temp3 && temp2 !== temp3)
    return { error: true, response: '' };

  if (temp1 === temp2 || temp1 === temp3) {
    correct = temp1;
  } else if (temp2 === temp3) {
    correct = temp2;
  } else if (temp3 === temp1) {
    correct = temp3;
  }

  for (let i = 8; i <= correct.length; i += 8) {
    var charTemp = '';

    for (let j = i - 8; j < i; j++) charTemp += correct[j];

    results.push(
      i === correct.length
        ? charTemp
        : String.fromCharCode(parseInt(charTemp, 2))
    );
  }

  for (let i = 0; i < results.length - 1; i++) {
    sum += results[i][0].charCodeAt();
  }

  if (
    parseInt(
      Array(8 - sum.toString(2).length + 1).join('0') + sum.toString(2),
      2
    ) +
      parseInt(results[results.length - 1], 2) !==
    255
  )
    return { error: true, response: '' };

  return {
    error: false,
    response: results
      .splice(0, results.length - 1)
      .reduce((accummulator, currentValue) => accummulator + currentValue),
  };
}

export default decodification;
