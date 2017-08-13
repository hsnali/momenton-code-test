import { getEmployeeById,
  getManagerForEmployee } from './utils'

describe('getting an employee by id', () => {

  test('return undefined if no employee found', () => {
    const result = getEmployeeById()

    expect(result).toBe(undefined)
  })
})

describe('returns an employee manager', () => {
  test('if no manager for employee, returns employee (self managing)', () => {
    const result = getManagerForEmployee(150)
    const manager = getEmployeeById(150)

    expect(result).toEqual(manager)
  })

  test('if employee has manager, returns manager object', () => {
    const result = getManagerForEmployee(400)

    expect(result).toEqual({
      id: 150,
      name: 'Jamie'
    })
  })
})
