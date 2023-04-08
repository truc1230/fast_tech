const config = {
  prefix: 'BUILDER365',
  accessToken: 'ACCESS_TOKEN',
  refreshToken: 'REFRESH_TOKEN',
  csrfToken: 'csrftoken'
} as const

/**
 * Saving data to localStorage.
 */
const saveToLocalStorage = (name: string, value: unknown) => {
  if (typeof window === 'undefined' || !window.localStorage) return
  localStorage.setItem(`${config.prefix}:${name}`, JSON.stringify(value))
}

/**
 * Load data from localStorage.
 */
const loadFromLocalStorage = (name: string) => {
  if (typeof window === 'undefined' || !window.localStorage) return null
  const serialized = localStorage.getItem(`${config.prefix}:${name}`)
  if (serialized === null) return null
  return JSON.parse(serialized) as string
}
function deleteCookie(name: string) {
  document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
}

/**
 * Remove data from localStorage.
 */
const removeFromLocalStorage = (name: string) => {
  if (typeof window === 'undefined' || !window.localStorage) return
  localStorage.removeItem(`${config.prefix}:${name}`)
}

export const saveAccessToken = (accessToken: string) =>
  saveToLocalStorage(config.accessToken, accessToken)
export const loadAccessToken = () => loadFromLocalStorage(config.accessToken)
export const clearAccessToken = () => removeFromLocalStorage(config.accessToken)
export const clearCsrfToken = () => deleteCookie(config.csrfToken)
export const saveRefreshToken = (refeshToken: string) =>
  saveToLocalStorage(config.refreshToken, refeshToken)
export const loadRefreshToken = () => loadFromLocalStorage(config.refreshToken)
export const clearRefreshToken = () => removeFromLocalStorage(config.refreshToken)
export const saveDataToLocalStorage = (name: string, value: unknown) =>
  saveToLocalStorage(name, value)
export const getDataFromLocalStorage = (name: string) => loadFromLocalStorage(name)
export const removeDataFromLocalStorage = (name: string) => removeFromLocalStorage(name)
