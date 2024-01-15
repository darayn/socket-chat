import {Server} from 'socket.io'
import { Redis } from 'ioredis';


const pub = new Redis();
const sub = new Redis();
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
        console.log("Init Socket Listeners....")
        io.on("connect", (socket)=>{
            console.log(`New Socket Connected`, socket.id);
            socket.on('event: message', async ({message}: {message: string}) => {
                console.log("New Message Rec.", message)

                // Publish message to redis


            })
        })
    }

    get io(){
        return this._io
    }
}


export default SocketService;