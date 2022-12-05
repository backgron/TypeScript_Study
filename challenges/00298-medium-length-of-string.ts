// ============= Test Cases =============
import type { Equal, Expect } from "./test-utils"

type cases = [
  Expect<Equal<LengthOfString<"">, 0>>,
  Expect<Equal<LengthOfString<"kumiko">, 6>>,
  Expect<Equal<LengthOfString<"reina">, 5>>,
  Expect<Equal<LengthOfString<"Sound! Euphonium">, 16>>
]

// ============= Your Code Here =============

type SplitStr<S> = S extends `${infer L}${infer R}` ? [L, ...SplitStr<R>] : []

type LengthOfString<S extends string> = SplitStr<S>["length"]

type A = LengthOfString<"kumiko">
