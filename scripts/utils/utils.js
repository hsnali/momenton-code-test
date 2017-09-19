import store from '../store/store'

export const getEmployeeById = (id) => {
  return store.find(employee => employee.id === id)
}

export const getManagerForEmployee = (id) => {
  const employee = getEmployeeById(id)
  const managerId = employee && employee.managerId ? employee.managerId : id
  return managerId === id ? employee : getEmployeeById(managerId)
}

export const getEmployeesByMangerId = (id) => {
  return store.filter(employee => employee.managerId && employee.managerId === id)
}

export const getEmployeesByIdRange = (min, max) => {
  return store.filter(employee => employee.id >= min && employee.id <= max)
}

export const getCEO = () => {
  return store.filter(employee => !employee.managerId)
}

export const getEmployeesFor = (person) => {
  const employees = getEmployeesByMangerId(person.id)

  if (employees.length) {
    const suborg = {}
    suborg[person.name] = employees.map(employee => getEmployeesFor(employee))
    return suborg
  }

  return person.name
}

export const getOrganisationHeirarchy = () => {
  const CEO = getCEO()[0]
  return getEmployeesFor(CEO)
}
