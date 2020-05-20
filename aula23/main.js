axios.get('https://api.github.com/users/victor3r')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.warn(error);
  });