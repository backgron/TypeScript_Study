/**
 * 可以用做签名的类型
 */
type AliasType = number | string | symbol

/**
 * 非空数组
 */
type NotEmptyArray<T> = [T, ...T[]]
