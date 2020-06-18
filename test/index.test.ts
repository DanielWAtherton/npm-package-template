import { Output } from '../src/index';
test('My Greeter', () => {
  expect(Output('Hello World')).toBe('Hello World!');
});
