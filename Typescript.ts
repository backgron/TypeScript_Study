// extends 产生 三元表达式的条件、遍历联合类型

// keyof 接口的签名数组 类似Object.keys

// in 接口的值，类似for in

// infer 暂定类型变量，类似var

// 数组类型可以直接取值 T[0] 和 长度 T['length'] 还可以用... [inferT, ...infer R],

// 可以递归type T<U extends any[], K> = U extends K
//   ? true
//   : T<U[0], K> extends true
//   ? true
//   : false
