// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

type cases = [
  Expect<
    Equal<
      Merge<Foo, Bar>,
      {
        a: number
        b: number
        c: boolean
      }
    >
  >
]

// ============= Your Code Here =============
// type Merge2<F, S> = {
//   [K in keyof F | keyof S]: K extends keyof S ? S[K] : F[K]
// }

type Merge<F extends object, S extends object> = {
  [K in keyof F | keyof S]: K extends keyof S
    ? S[K]
    : K extends keyof F
    ? F[K]
    : never
}
