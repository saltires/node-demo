const through2 = require('through2')
const vfs = require('vinyl-fs')
const { join, extname } = require('path')
const { transform } = require('@babel/core')

const cwd = process.cwd()
const srcDir = [join(cwd, '**/*.js'), join(cwd, '**/*.ts'), `!${join(cwd, 'node_modules/**/*')}`]
const libDir = join(cwd, './lib')


function getBabelConfig(isBrowser) {
  const targets = isBrowser ? { browsers: ['last 2 versions', 'IE 10'] } : { node: 6 };
  return {
    presets: [
      [require.resolve('@babel/preset-typescript'), {}],
      [
        require.resolve('@babel/preset-env'),
        {
          targets,
          ...(isBrowser ? { modules: false } : {}),
        },
      ],
    ],
    plugins: [
      require.resolve('@babel/plugin-proposal-export-default-from'),
      require.resolve('@babel/plugin-proposal-do-expressions'),
      require.resolve('@babel/plugin-proposal-class-properties'),
    ],
  };
}

/**
 * @description 下面的代码使用 vinyl-fs 读取当前文件夹下的js和ts文件，将其转为stream后交给我们利用through2.obj建立的自定义转换流处理，
 * 在这个流中，我们使用babel/core提供的transform方法将读取的源代码使用babel编译了下，并返回了编译后的内容，最后利用 vinyl-fs 将处理后的结果写入
 * 到当前目录的lib子目录下
 * 要想理解这个脚本，必须对vinyl-fs、through2、转换流、babel的编译等有所了解
 */
vfs.src(srcDir, {
  allowEmpty: true,
}).pipe(through2.obj(function (chunk, en, cb) {
  const babelConfig = getBabelConfig(true)
  const { code } = transform(chunk.contents, {
    ...babelConfig,
    filename: chunk.path,
  })
  chunk.contents = Buffer.from(code)
  chunk.path = chunk.path.replace(extname(chunk.path), '.js');
  cb(null, chunk)
})).pipe(vfs.dest(libDir))
