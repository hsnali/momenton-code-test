import store from './store'

test('store is of type array', () => {
  expect(Array.isArray(store)).toBe(true)
})

test('store has at least one entry', () => {
  expect(store.length).toBeGreaterThan(0)
})

test('a random store entry has at least an id and name property', () => {
  const index = Math.floor(Math.random() * store.length)
  const entry = store[index]
  console.log(entry)
  expect(entry).toMatchObject({
    id: expect.any(Number),
    name: expect.any(String)
  })
})
