/***
 * process 全局变量暴露的关于cpu的相关信息
 */
console.log(process.cpuUsage())

/**
 { 
  user: 46000, // 当前脚本在执行过程中，脚本所占用的时间片段
  system: 31000  // 当前脚本在执行过程中，操作系统所占用的时间片段
 }
 */