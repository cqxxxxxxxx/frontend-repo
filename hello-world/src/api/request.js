import axios from 'axios'

const http = {
  get: function(url, headers, params, callback) {
    axios.get(url)
      .then(function(response) {
        // handle success
        console.log(response)
        callback(response)
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
      .finally(function() {
        // always executed
      })
  },
  post: function(url, headers, body, callback) {
    axios.post(url)
      .then(function(response) {
        // handle success
        console.log(response)
        callback(response)
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
      .finally(function() {
        // always executed
      })
  }
}

// axios.get('/lessons/' + lessonId + '/comments')
//   .then(function (response) {
//     vm.comments = response.data;
//   })
//   .catch(function (error) {
//     swal_error_msg(error);
//   });
export default http

