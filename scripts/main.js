import {getTopLevelManagers,
  getEmployeesByMangerId,
  getEmployeesByIdRange} from './utils/utils'

const firstQuery = getTopLevelManagers()
firstQuery.map(employee => console.log(employee.name))

console.log('------------')

const secondQuery = getEmployeesByMangerId(150)
secondQuery.map(employee => console.log(employee.name))

console.log('------------')

const thirdQuery = getEmployeesByIdRange(190, 300)
thirdQuery.map(employee => console.log(employee.name))

console.log('------------')
