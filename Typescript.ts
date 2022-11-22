type A = string
type B = number

type C = A extends B ? Array<string> : Array<number>
