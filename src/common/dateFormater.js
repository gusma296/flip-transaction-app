export const dateFormatter = value => {
  let date = new Date(value.split(' ')[0]);
  if (date !== undefined && date !== '') {
    var month = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Maei',
      'Juni',
      'July',
      'Augustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ][date.getMonth()];
    var str = date.getDate() + ' ' + month + ' ' + date.getFullYear();
    return str;
  }
  return '';
};
