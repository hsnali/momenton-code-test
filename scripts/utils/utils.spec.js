import { getEmployeeById,
  getManagerForEmployee,
  getEmployeesByMangerId,
  getEmployeesByIdRange,
  getTopLevelManagers } from './utils'

describe('getting an employee by id', () => {

  test('if no employee found return undefined', () => {
    const result = getEmployeeById()

    expect(result).toBe()
  })

  test('returns the first found employee by id', () => {
    const result = getEmployeeById(100)

    expect(result).toEqual({
      id: 100,
      managerId: 150,
      name: 'Alan'
    })
  })
})

describe('getting an employees manager', () => {

  test('if no employee found returns undefined', () => {
    const result = getManagerForEmployee()

    expect(result).toBe(undefined)
  })

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

describe('getting all employees under a manager', () => {
  test('if no employees found for a manager id, return empty array', () => {
    const result = getEmployeesByMangerId()
    expect(result).toEqual([])
  })

  test('returns all employees with the requested manager id', () => {
    const result = getEmployeesByMangerId(400)

    expect(result).toEqual([
      {
        id: 190,
        managerId: 400,
        name: 'David'
      }
    ])
  })
})

describe('get all employees with id in a given range', () => {
  test('if no employees found in id range, return empty array', () => {
    const result = getEmployeesByIdRange()
    expect(result).toEqual([])
  })

  test('returns all employees with id in min max range', () => {
    const result = getEmployeesByIdRange(0, 100)
    expect(result).toEqual([
      {
        id: 100,
        managerId: 150,
        name: 'Alan'
      }
    ])
  })
})

describe('get all employees with no manager (top level employees)', () => {
  test('returns an array of employees with no manager id', () => {
    const result = getTopLevelManagers()

    expect(result[0].managerId).toBe(undefined)
  })
})
