// eslint-disable-next-line max-classes-per-file
import { EventEmitter, EventListener, Event } from '../globalIntarfaces';
import { Domain } from './Domain';


export class DomainOutput implements EventEmitter{
    private listeners = new Set<EventListener>();

    addListener(listener: EventListener): void {
        this.listeners.add(listener);
    }

    removeListener(listener: EventListener): void {
        this.listeners.delete(listener);
    }


}

export class DomainInput implements EventListener {

    // eslint-disable-next-line no-useless-constructor
    constructor(
        private domain: Domain
    ){}

    // eslint-disable-next-line class-methods-use-this,@typescript-eslint/no-empty-function
    dispatch(event: Event): void {
    }


}
