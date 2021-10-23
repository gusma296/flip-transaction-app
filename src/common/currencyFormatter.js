export function currencyFormatter(input, norp) {
  if (input !== null && typeof input !== 'undefined') {
    return norp
      ? input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      : 'Rp' + input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return '';
}
