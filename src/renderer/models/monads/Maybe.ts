const empty = Symbol('never');

export class Maybe<T> {
    // eslint-disable-next-line no-useless-constructor
    private constructor(private value: T | typeof empty) {}

    static just<U>(value: U) {
        return new Maybe<U>(value);
    }

    static nothing<U>() {
        return new Maybe<U>(empty);
    }

    static merge<T1, T2>(...mbArr: [Maybe<T1>, Maybe<T2>]): Maybe<[T1, T2]>;

    static merge<T1, T2, T3>(
        ...mbArr: [Maybe<T1>, Maybe<T2>, Maybe<T3>]
    ): Maybe<[T1, T2, T3]>;

    static merge<T1, T2, T3, T4>(
        ...mbArr: [Maybe<T1>, Maybe<T2>, Maybe<T3>, Maybe<T4>]
    ): Maybe<[T1, T2, T3, T4]>;

    static merge<T1, T2, T3, T4, T5>(
        ...mbArr: [Maybe<T1>, Maybe<T2>, Maybe<T3>, Maybe<T4>, Maybe<T5>]
    ): Maybe<[T1, T2, T3, T4, T5]>;

    static merge<T1, T2, T3, T4, T5, T6>(
        ...mbArr: [
            Maybe<T1>,
            Maybe<T2>,
            Maybe<T3>,
            Maybe<T4>,
            Maybe<T5>,
            Maybe<T6>
        ]
    ): Maybe<[T1, T2, T3, T4, T5, T6]>;

    static merge<T1, T2, T3, T4, T5, T6, T7>(
        ...mbArr: [
            Maybe<T1>,
            Maybe<T2>,
            Maybe<T3>,
            Maybe<T4>,
            Maybe<T5>,
            Maybe<T6>,
            Maybe<T7>
        ]
    ): Maybe<[T1, T2, T3, T4, T5, T6, T7]>;

    static merge(...mbArr: any[]) {
        const values = mbArr.map(value => value.rowUnWrap());
        if (values.every(val => val !== empty)) {
            return Maybe.just(values);
        }
            return Maybe.nothing();

    }

    // eslint-disable-next-line class-methods-use-this
    private isValue(value: T | typeof empty): value is T {
        return value !== empty;
    }

    protected rowUnWrap() {
        return this.value;
    }

    unWrap(): T | null;

    unWrap<U>(def: U): T | U;

    unWrap(def?: any): any {
        if (this.isValue(this.value)) {
            return this.value;
        } if (def === undefined) {
            return null;
        }
            return def;

    }

    isJust() {
        return this.isValue(this.value);
    }

    isNothing(){
        return !this.isValue(this.value);
    }

    map<U>(f: (value: T) => U): Maybe<U> {
        const value = this.rowUnWrap();
        if (this.isValue(value)) {
            return Maybe.just<U>(f(value));
        }
            return Maybe.nothing<U>();

    }

    join<U>(this: Maybe<Maybe<U>>): Maybe<U> {
        const value = this.rowUnWrap();
        if (this.isValue(value)) {
            return value;
        }
            return Maybe.nothing<U>();

    }

    chain<U>(f: (value: T) => Maybe<U>): Maybe<U> {
        const value = this.rowUnWrap();
        if (this.isValue(value)) {
            return f(value);
        }
            return Maybe.nothing<U>();

    }

    ifJust(effect: (value: T) => any): this {
        const value = this.rowUnWrap();
        if (this.isValue(value)) {
            effect(value);
        }
        return this;
    }

    ifNothing(effect: () => any): this {
        const value = this.rowUnWrap();
        if (!this.isValue(value)) {
            effect();
        }
        return this;
    }

    caseOf<U,I>(params:{Just:(value:T) => U, Nothing:() => I}): U | I {
        const value = this.rowUnWrap();
        if (this.isValue(value)) {
            return params.Just(value);
        }
        return params.Nothing();

    }
}
