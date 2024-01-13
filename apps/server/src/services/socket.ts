import {Server} from 'socket.io'

class SocketService {
    private _io: Server;

    constructor(){
        console.log('Init Socket Server...');
        this._io = new Server({
            cors: {
                allowedHeaders: ['*'],
                origin: '*'
            }
        })
    }


    public initListener(){

        const io = this.io;
        console.log("Init Socker Listeners....")
        io.on("connect", (socket)=>{
            console.log(`New Socket Connected`, socket.id);
            socket.on('event: message', async ({message}: {message: string}) => {
                console.log("New Message Rec.", message)

            })
        })
    }

    get io(){
        return this._io
    }
}


export default SocketService;