export function setIdtoTable(data) {
  return data.map((item, index) => ({ id: index + 1, ...item }));
}
export function setOperationTable(data) {
  return data.map((item) => ({ operation: "", ...item }));
}
