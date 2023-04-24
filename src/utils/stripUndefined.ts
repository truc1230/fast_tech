export function stripUndefined<T extends Record<string, any>>(obj: T): T {
  const result = {} as T
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      if (value === null || value === undefined || Number.isNaN(value)) {
        continue // Bỏ qua thuộc tính nếu null, undefined hoặc NaN
      }
      if (typeof value === 'object') {
        if (Array.isArray(value)) {
          result[key] = value.map(stripUndefined)
        } else {
          result[key] = stripUndefined(value)
        }
      } else {
        result[key] = value
      }
    }
  }
  return result
}
