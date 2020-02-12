/**
 * Message
 */
export enum GET_MESS_TYPE {
    SET_IMG = 'SET_IMG',
    OPEN_MESS = 'OPEN_MESS'
}

export enum SEND_MESS_TYPE {
    SET_PARAMS = 'SET_PARAMS',
    OPEN_MESS = 'OPEN_MESS'
}

/**
 * Create messageObjects
 */
export class Message {
    private readonly messType : SEND_MESS_TYPE;
    private readonly data : any;
    constructor(
        messType: SEND_MESS_TYPE,
        data: any
    ) {
        this.messType = messType;
        this.data = data;
    }

    public toJSON(): string {
        return JSON.stringify({
            type: this.messType,
            data: this.data
        });
    }
}
