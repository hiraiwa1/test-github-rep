import { eventOrOdd } from "./main"

describe('even or odd 関数', () => {
  it('even パターン', () => {
    expect(eventOrOdd(6)).toBe('odd');
  })
})