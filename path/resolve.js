const path = require('path')

/**
 * 使用 path.resolve 可以生成绝对路径
 * @expect /Users/mac/project/owner/node-demo/path/hihi
 */
// console.log(path.resolve('hihi'));

/**
 * path.basename 可以用于获取一段路径中的文件名
 * @see {@link{https://www.cnblogs.com/fly_dragon/p/8715438.html API介绍}}
 * @expect quux.html
 */
// console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
/** @expect quux */
// console.log(path.basename('/foo/bar/baz/asdf/quux'));
/** @expect asdf */
// console.log(path.basename('/foo/bar/baz/asdf/'));

/**
 * path.dirname 用于获取一个 path 的目录名
 * @see {@link{https://www.cnblogs.com/fly_dragon/p/8715438.html API介绍}}
 * @expect /foo/bar/baz/asdf
 */
// console.log(path.dirname('/foo/bar/baz/asdf/quux'));
/** @expect /foo/bar/baz/asdf */
// console.log(path.dirname('/foo/bar/baz/asdf/quux.html'));

/**
 * path.extname 方法返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。
 * 如果 path 的最后一部分没有 . 或 path 的文件名的第一个字符是 .，则返回一个空字符串。
 * @expect .html
 */
// console.log(path.extname('/etc/a/index.html'));


/**
 * path.format() 方法会从一个对象返回一个路径字符串
 * @expect '/home/user/dir/file.txt'
 */
// console.log(path.format({
//     dir: '/home/user/dir',
//     base: 'file.txt'
// }))

/**
 * path.parse() 方法返回一个对象，对象的属性表示 path 的元素。
 * @expect {
 *  root: '/',
 *  dir: '/users/home/aicoder',
 *  base: 'a.html',
 *  ext: '.html',
 *  name: 'a'
 * }
 */
// let pathObj = path.parse('/users/home/aicoder/a.html');
// console.dir(pathObj);

/**
 * path.join() 方法使用平台特定的分隔符把全部给定的 path 片段连接到一起，并规范化生成的路径
 * @expect /foo/bar/baz/asdf
 */
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

/**
 * path.relative() 方法返回从 from 到 to 的相对路径（基于当前工作目录）。
 * 如果 from 和 to 各自解析到同一路径（调用 path.resolve()），则返回一个长度为零的字符串。
 * 如果 from 或 to 传入了一个长度为零的字符串，则当前工作目录会被用于代替长度为零的字符串。
 * 语法： path.relative(from, to)
 * @expect '../../impl/bbb'
 */

//  const relative = path.relative('/data/orandea/test', '/data/orandea/impl/bbb')
//  console.log(path.join('/data/orandea/test', relative));

/**
 * path.isAbsolute(path)此方法接受一个字符串，返回boolean类型
 */
/** @expect true */
console.log(path.isAbsolute('/foo/bar'))
/** @expect false */
console.log(path.isAbsolute('qux/'))