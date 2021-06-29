/**
 * 1、从 process 全局对象中获取关于内存的使用信息,相关信息如下：
 * 1.1 rss: Resident Set Size，是进程在主内存设备（即总分配内存的一个子集）中占用的空间量，包括所有 C++ 和 JavaScript 对象和代码
 * 1.2 heapTotal 和 heapUsed 指的是 V8 的内存使用情况。
 * 1.3 external 指的是绑定到 V8 管理的 JavaScript 对象的 C++ 对象的内存使用。
 * 1.4 arrayBuffers 是指为 ArrayBuffer 和 SharedArrayBuffer 分配的内存，包括所有 Node.js Buffer。
 */

//  console.log(process.memoryUsage());

/**
 * 2、从 process 全局对象中获取关于内存的使用信息,相关信息如下：
 * 2.1 process.cpuUsage() 方法在具有属性 user 和 system 的对象中返回当前进程的用户和系统 CPU 时间使用情况，其值为微秒值（百万分之一秒）。 这些值分别测量在用户和系统代码中花费的时间，如果多个 CPU 内核为此进程执行工作，则最终可能会大于实际经过的时间。
 */

// console.log(process.cpuUsage())

/**
 * 3、process.version 属性包含 Node.js 版本字符串。
 * 3.1 process.versions 属性返回对象，其中列出了 Node.js 的版本字符串及其依赖项。 
 *     process.versions.modules 表示当前的 ABI 版本，每当 C++ API 更改时都会增加。 Node.js 将拒绝加载针对不同模块 ABI 版本编译的模块。
 *     process.versions.uv 表示当前的 libuv 库版本
 *     其他的字段暂时不清楚含义
 */

// console.log(process.version)
// console.log(process.versions)

/**
 * 4、process.cwd() 方法返回 Node.js 进程的当前工作目录
 */
// console.log(process.cwd())

/**
 * 5、process.env 属性返回包含用户环境的对象。
 */

console.log(process.env);