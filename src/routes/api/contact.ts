export const post = (request: any) => {
  const formBody = JSON.parse(request.body)
  const name = formBody.name
  const email = formBody.email
  return {
    body: {
      name, email
    }
  }
}