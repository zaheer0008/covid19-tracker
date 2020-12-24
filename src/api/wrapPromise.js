function wrapPromise(promise) {
  let status = "pending"
  let response

  const suspender = promise.then(
    (res) => {
      status = "success"
      response = res
    },
    (err) => {
      status = "error"
      response = err
    },
  );

  const read = () => {
    switch (status) {
      case "pending":
        console.log("status: pending, thrown suspender");
        throw suspender
      case "error":
        console.log(response)
        throw response
      case "success":
        console.log(response)
        return response
      default:
        console.log(response)
        return response
    }
  }

  return { read }
}

export default wrapPromise