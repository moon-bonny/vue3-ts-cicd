/*
 * @Author Moon
 * @Date 2022-05-02 18:24:40
 * @LastEditTime 2022-05-03 11:16:27
 * @LastEditors Moon lanyj123@163.com
 */

declare let num: number

// 定义类型
type T1 = number

// 声明全局变量方法 1
declare let userId: string // 可不带window使用userId，但需重复声明

interface Window {
  userId: string
}

// 声明全局变量方法2
declare var age: number

// 声明全局变量方法3，但使用export后其他声明会失效
/* export {}
declare global {
  interface Window {
    // 使用foo全局变量时得带window
    foo: string
  }
  var age: number
} */
