console.log('Hello World!');

const send = document.getElementById('send')

let msg = document.getElementById('msg')

let resp = document.getElementById('res')

let ws = new WebSocket("ws://localhost:8000")

ws.onopen = alert("Connected")

send.addEventListener('click', function(e) {
  e.preventDefault()
  
  
  let msg = document.getElementById('msg')

  ws.send(msg.value)
  
  ws.onmessage = function(data) {
    let resp = document.getElementById('res')
    resp.innerText = data.data
  }
})
