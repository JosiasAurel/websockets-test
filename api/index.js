const WebSocket = require("ws")

const wss = new WebSocket.Server({port: 8000})

wss.on("connection", (ws) => {
	ws.on('message', (msg) => {
		ws.send(`You sent: ${msg}`)
	})
})


