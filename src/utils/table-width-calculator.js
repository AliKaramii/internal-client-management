export function tableWidthCalculator(clientWidth, columns) {
  const tableMaxWidth = (clientWidth / 100) * 79;
  const eachColWidth = Math.round(tableMaxWidth / columns + 1);
  const ColsCalculatedMinWidth = eachColWidth > 185 ? eachColWidth : 185;

  return ColsCalculatedMinWidth;
}
