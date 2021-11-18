export const text: string = "test endpoint"

export const get = () => {
  return{
    body: {
      x: text
    }
  }
}