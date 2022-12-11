import {Application} from "@infra/socketio/Application";

export const buildEventsSocket = (socketServer: Application) => {
    socketServer.getServer().then(io => {
        console.log('Socket.IO events built')
        io.on('connection', (socket) => {
            console.log('some user has been connected!')

            socket.on('join-room', (data: unknown) => {
                console.log(data)
            })

        })
    })
}