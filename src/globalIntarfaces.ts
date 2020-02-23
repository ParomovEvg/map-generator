export interface Event{
    type:string,
    data:any
}

export interface EventEmitter{
    addListener(listener:EventListener):void,
    removeListener(listener:EventListener):void
}

export interface EventListener {
    dispatch(event:Event):void
}


