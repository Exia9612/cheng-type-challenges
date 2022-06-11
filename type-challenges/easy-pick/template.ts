type MyPick<T, K> = {
  [key in (keyof T & K)]: T[key] 
}
