const API_Key = 'Gafga3uOF3HGeKGwKW3xEo0rZP3DN32A'

document.addEventListener('DOMContentLoaded', (event) => {
  navigator.geolocation.getCurrentPosition((position) =>
  
  document.addEventListener('submit', (event) => {
    const input = document.getElementById('ticketmaster-search')
    const value = input.value
    fetch(`https://app.ticketmaster.com/discovery/v2/events.json?keyword=${value}&apikey=${API_Key}`)
    .then(response => response.json())
    .then(responseJson = console.log(responseJson))
  })
  })

  function makeEvents(json) {
    const container = document.getElementById('events-container')
    const events = json._embedded.events
    events.forEach((event) => {
      const eventDiv = document.createElement('div')
      const eventH1 = document.createElement('h1')
      const eventDates = document.createElement('p')
      const eventPrices = document.createElement('p')
      eventH1.innerHTML = event.name 
      eventDates.innerHTML = event.dates.start.localDate + " " + event.dates.start.localTime
      eventPrices.innerHTML = event.priceRanges.min + "-" + event.priceRanges.max
      eventDiv.appendChild(eventH1)
      eventDiv.appendChild(eventDates)
      eventDiv.appendChild(eventPrices)
      container.appendChild(eventDiv)
    
    })
  }
