/**
 * Model of websocket server
 */
import {Message} from '@models/server/Message';
import * as WebSocket from 'ws';

export interface IServer {
    listen(PORT: number): void;
    close(): void;
}

/**
 * run listen to create ws server
 * run close to close ws server
 */
export class Server implements IServer {
    private ws : WebSocket;
    private wss : WebSocket.Server;

    public listen(PORT: number): void {
        this.wss = new WebSocket.Server({ port: PORT });
        this.wss.on('connection', (ws: WebSocket) => {
            this.ws = ws;
            ws.on('message', this.messageHandle);
        });

    }

    public close(): void {
        if (this.wss && this.ws) {
            this.wss.close();
            this.ws.close();
        }
    }

    public send(mess: Message): void {
        if (this.ws !== undefined) {
            this.ws.send(mess.toJSON());
        } else {
            console.log('Нет ws')
        }
    }

    private messageHandle(mess: ArrayBuffer): void {
        // tslint:disable-next-line:no-console
        console.dir(mess);
    }

}
