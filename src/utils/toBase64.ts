export const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      let encoded = reader.result?.toString().split(',')[1] || ''
      resolve(encoded)
    }
    reader.onerror = (error) => reject(error)
  })
