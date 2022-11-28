// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [Expect<Equal<DeepReadonly<X>, Expected>>]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: "string"
        }
        k: "hello"
      }
      l: [
        "hi",
        {
          m: ["hey"]
        }
      ]
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: "string"
        }
        readonly k: "hello"
      }
      readonly l: readonly [
        "hi",
        {
          readonly m: readonly ["hey"]
        }
      ]
    }
  }
}

// ============= Your Code Here =============
// type DeepReadonly<T> = {
//   readonly [K in keyof T]: keyof T[K] extends never ? T[K] : DeepReadonly<T[K]>
// }

// type DeepReadonly<T> = {
//   readonly [K in keyof T]: T[K] extends object ? T[K] : DeepReadonly<T[K]>
// }

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Function
    ? T[K]
    : T[K] extends object
    ? DeepReadonly<T[K]>
    : T[K]
}

// type DeepReadonly1<T> = {
//   readonly [K in keyof T]: T[K] extends object ? DeepReadonly1<T[K]> : T[K]
// }
