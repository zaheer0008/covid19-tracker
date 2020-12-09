function wrapPromise(promise) {
    let status = 'pending'
    let response
  
    const suspender = promise.then(
      (res) => {
        status = 'success'
        response = res
      },
      (err) => {
        status = 'error'
        response = err
      },
    );

    const read = () => {
        switch (status) {
          case 'pending':
            throw suspender
            break
          case 'error':
            throw response
            break
          default:
            return response
        }
      }
    
      return { read }
    }
    
    export default wrapPromise