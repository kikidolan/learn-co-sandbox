const API_Key = 'Gafga3uOF3HGeKGwKW3xEo0rZP3DN32A'

document.addEventListener('DOMContentLoaded', (event) => {
  document.addEventListener('submit', (event) => {
    const input = document.getElementById('ticketmaster-search')
    const value = input.value
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${value}&apikey=${API_Key}`)
    .then(response => response.json())
    .then(responseJson = console.log(responseJson))
  })
})