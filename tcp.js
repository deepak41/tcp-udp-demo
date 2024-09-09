const net = require("net")

const server = net.createServer(socket => {
    socket.write("Hello.")
    socket.on("data", data => {
        console.log(data.toString())
    })
})

PORT = 3000
server.listen(PORT)
console.log("Server is running on localhost:" + PORT);
