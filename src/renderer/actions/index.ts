import { CounterAction } from './paramsActions';

export type RootActions = CounterAction[keyof CounterAction];
