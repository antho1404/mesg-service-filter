module.exports = ({ data, predicate, value, state }) => {
  const res = {
    eq: (data, value) => {
      if (typeof data === 'string' && typeof value === 'string') {
        return data.toLowerCase() === value.toLowerCase()
      } else {
        return data === value
      }
    },
    neq: (data, value) => data !== value,
    gt: (data, value) => data > value,
    gte: (data, value) => data >= value,
    lt: (data, value) => data < value,
    lte: (data, value) => data <= value,
    cont: (data, value) => data.indexOf(value) >= 0
  }[predicate](data, value)
  return {
    match: res ? 'TRUE' : 'FALSE',
    data: state
  }
}
