const answer = (number) => {
  let output = '';
 
  if (number % 3 === 0 || number.toString(10).includes('3')) {
    output += 'Fizz'
  }

  if (number % 5 === 0 || number.toString(10).includes('5')) {
    output += 'Buzz'
  }

	return output === '' ? number : output
}
export default answer;
