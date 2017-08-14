# Solution Branch 1

## Setup

You will need to setup the project dependecies using yarn, so first run
`yarn insall`

## Runnign the solution

To run the solution to see if expected results are printed out run
`npm start`

To run the tests to the solution
`npm test`

Code coverage can be viewed with `npm run test:coverage`
# Description

Below is employee data of a small company.

| Employee Name | Id  | Manager Id |
|---------------|-----|------------|
| Alan          | 100 | 150        |
| Martin        | 220 | 100        |
| Jamie         | 150 |            |
| Alex          | 275 | 100        |
| Steve         | 400 | 150        |
| David         | 190 | 400        |

It represents the hierarchical relationship among employees. CEO of the company doesn't
have a manager.


Design a suitable representation of this data. Feel free to choose any database (RDBMS, inmemory
database etc), file system or even a data structure like List or Map. Then write code
(in any language and framework) that displays the organisation hierarchy as below:

|       |       |        |
|-------|-------|--------|
| Jamie |       |        |
|       |       |        |
|       | Alan  |        |
|       |       | Martin |
|       |       | Alex   |
|       | Steve |        |
|       |       | David  |


The result can be simply displayed on the console, or HTML page or even a file; whatever
suits you.

Try to cover all the possible scenarios, for example an employee with no manager, a
manager who is not valid employee; etc.

Pay more attention on writing the actual logic of representing the employee tabular data into
the hierarchical format.
