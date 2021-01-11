console.log('Hello World!');

const form = document.getElementById('form')

let msg = document.getElementById('msg')

let resp = document.getElementById('res')

let ws = new WebSocket("ws://websockets-testv.vercel.app/api/")

ws.onopen = alert("Connected")

form.addEventListener('submit', function(e) {
  e.preventDefault()
  
  
  let msg = document.getElementById('msg')

  ws.send(msg.value)
  
  ws.onmessage = function(data) {
    let resp = document.getElementById('res')
    resp.innerText = data.data
  }
})
