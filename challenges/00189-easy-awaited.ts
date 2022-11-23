// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>
]

// @ts-expect-error
type error = MyAwaited<number>

// ============= Your Code Here =============
type Thenable<K> = Pick<Promise<K>, "then">

type MyAwaited<T extends Thenable<any>> = T extends Thenable<infer R>
  ? R extends Thenable<any>
    ? MyAwaited<R>
    : R
  : false
