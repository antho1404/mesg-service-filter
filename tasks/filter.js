module.exports = (data, predicate, value) => {
  const res = {
    eq: (data, value) => data === value,
    neq: (data, value) => data !== value,
    gt: (data, value) => data > value,
    gte: (data, value) => data >= value,
    lt: (data, value) => data < value,
    lte: (data, value) => data <= value,
    cont: (data, value) => data.indexOf(value) >= 0
  }[predicate](data, value)
  return res ? 'TRUE' : 'FALSE'
}
