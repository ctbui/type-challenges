type Chainable<options = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<Omit<options, K> & { [S in K]: V}>,
  get(): options
}
