import {Application} from "@infra/socketio/Application";
import {EventHandlerAdapter} from "@infra/socketio/EventHandlerAdapter";
import {JoinRoomEvent} from "@main/events/ChatRoom/JoinRoomEvent";

export const buildEventsSocket = (socketServer: Application) => {
    const eventHandlerAdapter = new EventHandlerAdapter();

    socketServer.getServer().then(io => {
        console.log('Socket.IO events built')
        io.on('connection', (socket) => {
            console.log('some user has been connected!')
            socket.on('join-room', (data: unknown) => eventHandlerAdapter.execute(new JoinRoomEvent(), data))
        })
    })
}