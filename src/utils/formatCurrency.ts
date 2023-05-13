export const formatVND = (x: number) => {
  return x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
}
