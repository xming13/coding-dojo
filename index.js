const answer = (number, customRule = {3: 'Fizz', 5: 'Buzz'}) => {
  let output = '';
 
  for (let [key, word] of Object.entries(customRule)) {
    if (number % key === 0 || number.toString(10).includes(key)) {
      output += word;
    }
  }

	return output === '' ? number : output;
}

export default answer;
