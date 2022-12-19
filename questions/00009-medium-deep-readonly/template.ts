type DeepReadonly<T> = {
    readonly [key in keyof T]:
    T[key] extends object
        ? T[key] extends Function
            ? T[key]
            : DeepReadonly<T[key]>
        : T[key]
}
