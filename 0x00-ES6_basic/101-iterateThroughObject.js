export default function iterateThroughObject(reportWithIterator) {
  const result = [];
  let employee = reportWithIterator.next();

  while (!employee.done) {
    result.push(employee.value);
    employee = reportWithIterator.next();
  }

  return result.join('|');
}
