//const title = document.querySelector('.title');
//const myLocation = document.querySelector('.location');

// async request
/*
let data = fetch('https://api.github.com/users/mirandamon').then((response) => {
  return response.json()
}).then((responseJson) => {
  title.innerHTML = responseJson.login
  myLocation.innerHTML = responseJson.location
})*/

let input = document.querySelector('#search-box')
input.addEventListener('keydown', (event) => {
  // start searching
  let value = input.value
  // fetch
  const configuration = {
    mode: 'no-cors',
    headers: {
      'Authorization': 'token kikidolan:55b516a9c10945216c1353f54814e1054d6d1d11' 
    }
  }
  fetch('https://api.github.com/search/repositories?q=' + value, configuration)
    .then(apiResponse => apiResponse.json())
    .then(responseJson => console.log(responseJson))
})

// search