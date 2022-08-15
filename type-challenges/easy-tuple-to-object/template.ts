// V in T遍历出数组索引
// V in T[number]遍历数组中的值
// 对象的键只能是string | number | symbol
type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [V in T[number]]: V  
}
