import {example} from '../example';

test('Example Test', () =>{
	expect(example(2)).toBe('1 2 ');
	expect(example(3)).toBe('1 2 Fizz ');
	expect(example(5)).toBe('1 2 Fizz 4 Buzz ')
});
