window.juu = {
  showError: function(response) {
    var msj = ''
    if (typeof(response) === 'object') {
      msj = response.data
    } else {
      msj = response
    }
    window.alert(msj)
    if (response.status === 401) { //Permission Deny "Unauthorized"
      window.alert('hi')
      window.location = '#!'
    }
  },
  showMessage: function(msj) {
    window.alert(msj)
  }
}
