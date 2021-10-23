export const alpabhetSort = (asc, data) =>
  data.sort((x, y) => {
    let nameX = x.beneficiary_name.toLowerCase();
    let nameY = y.beneficiary_name.toLowerCase();
    return asc
      ? nameX === nameY
        ? 0
        : nameX > nameY
        ? 1
        : -1
      : nameY === nameX
      ? 0
      : nameY > nameX
      ? 1
      : -1;
  });
