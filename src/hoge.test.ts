import { Hoge } from './hoge'

test('test', () => {
  expect(new Hoge('fuga').getMessage()).toBe('Hello fuga')
})
