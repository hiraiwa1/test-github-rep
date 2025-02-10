import { evenOrOdd } from "./evenOrOdd";


describe('even or odd 関数', () => {
  test('even', () => {
    expect(evenOrOdd(6)).toBe('even');
  })
})