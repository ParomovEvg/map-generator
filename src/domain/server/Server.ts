import * as WebSocket from 'ws';
import { Message } from './Message';
import { Maybe } from '../../renderer/models/monads/Maybe';

export interface ServerInterface {
    listen(PORT: number): void;
    close(): void;
}

/**
 * run listen to create ws server
 * run close to close ws server
 */
export class Server implements ServerInterface {
    private ws: Maybe<WebSocket> = Maybe.nothing();

    private wss: Maybe<WebSocket.Server> = Maybe.nothing();

    public listen(PORT: number): void {
        const wss: WebSocket.Server = new WebSocket.Server({ port: PORT });
        wss.on('connection', (ws: WebSocket) => {
            ws.on('message', this.messageHandle);
            this.ws = Maybe.just(ws);
        });
        this.wss = Maybe.just(wss);
    }

    public close(): void {
        Maybe.merge(this.ws, this.wss).ifJust(([ws, wss]) => {
            wss.close();
            ws.close();
        });
    }

    public send(mess: Message): void {
        this.ws
            .ifJust(ws => {
                ws.send(mess.toJSON());
            })
            .ifNothing(() => {
                console.log('Нет ws');
            });
    }

    // eslint-disable-next-line class-methods-use-this
    private messageHandle(mess: ArrayBuffer): void {
        // tslint:disable-next-line:no-console
        console.dir(mess);
    }
}
