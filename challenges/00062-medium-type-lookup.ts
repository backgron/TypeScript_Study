// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

interface Cat {
  type: "cat"
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal"
}

interface Dog {
  type: "dog"
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer"
  color: "brown" | "white" | "black"
}

type Animal = Cat | Dog

type cases = [
  Expect<Equal<LookUp<Animal, "dog">, Dog>>,
  Expect<Equal<LookUp<Animal, "cat">, Cat>>
]

// ============= Your Code Here =============
// type LookUp<U, T> = Extract<U, {type: T}>

type LookUp<U extends { type: string }, T> = U extends any
  ? U["type"] extends T
    ? U
    : never
  : never
