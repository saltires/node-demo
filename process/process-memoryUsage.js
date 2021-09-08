/**
 * process 全局变量暴露的关于内存的相关信息
 */
console.log(process.memoryUsage())

/**
 * 
 {
  rss: 28307456, // 本地常驻内存
  heapTotal: 4468736, // 当前脚本在执行之处申请的总内存大小
  heapUsed: 2616192, // 当前脚本在实际执行过程中消耗的内存
  external: 856863, // builtin 模块占据的内存空间大小
  arrayBuffers: 10898 // 一片独立的内存空间，和v8占据的内存空间互相区分开，可以认为其代表当前脚本所使用的全部buffer缓冲区的总内存大小
 }
 */