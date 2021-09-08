/**
 * process 全局变量暴露的关于当前脚本运行环境的相关信息
 */

// 1 当前脚本的工作目录
console.log(process.cwd()) // E:\project\owner\node-demo\process
console.log(__dirname) // E:\project\owner\node-demo\process

// 2 node 版本
console.log(process.version) // v14.16.1


// versions 对象下包含了更细的内部库版本，包括node使用的v8,、libuv、zlib等等
console.log(process.versions)
/** console.log(process.versions)
 {
  node: '14.16.1',
  v8: '8.4.371.19-node.18',
  uv: '1.40.0',
  zlib: '1.2.11',
  brotli: '1.0.9',
  ares: '1.16.1',
  modules: '83',
  nghttp2: '1.41.0',
  napi: '7',
  llhttp: '2.1.3',
  openssl: '1.1.1k',
  cldr: '37.0',
  icu: '67.1',
  tz: '2020a',
  unicode: '13.0'
 }
 */

 // 3 获取计算机的cpu架构
 console.log(process.arch) // x64

 // 4 process.env 存储着更详细的关于计算机的环境信息（例如系统主目录，通常是c盘/用户名、系统临时目录、系统环境变量PATH）
console.log(process.env)
/** console.log(process.env)
 {
  ALLUSERSPROFILE: 'C:\\ProgramData',
  APPDATA: 'C:\\Users\\hspcadmin\\AppData\\Roaming',
  CHROME_CRASHPAD_PIPE_NAME: '\\\\.\\pipe\\crashpad_8620_KAUJMMELAWKUMFNI',
  CommonProgramFiles: 'C:\\Program Files\\Common Files',
  'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
  CommonProgramW6432: 'C:\\Program Files\\Common Files',
  COMPUTERNAME: 'WINDOWS-6FMKCOQ',
  ComSpec: 'C:\\Windows\\system32\\cmd.exe',
  DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
  FPS_BROWSER_APP_PROFILE_STRING: 'Internet Explorer',
  FPS_BROWSER_USER_PROFILE_STRING: 'Default',
  HOMEDRIVE: 'C:',
  HOMEPATH: '\\Users\\hspcadmin',
  'IntelliJ IDEA': 'D:\\Programs\\IntelliJ IDEA 2021.1.2\\bin;',
  JAVA_HOME: 'C:\\Program Files\\Java\\jdk1.8.0_291\\',
  LDMS_LOCAL_DIR: 'C:\\Program Files (x86)\\LANDesk\\LDClient\\Data',
  LOCALAPPDATA: 'C:\\Users\\hspcadmin\\AppData\\Local',
  LOGONSERVER: '\\\\WINDOWS-6FMKCOQ',
  NUMBER_OF_PROCESSORS: '8',
  ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
  OS: 'Windows_NT',
  Path: 'C:\\Program Files (x86)\\Common Files\\Oracle\\Java\\javapath;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files\\Git\\cmd;C:\\Program Files\\nodejs\\;C:\\Program Files\\TortoiseSVN\\bin;C:\\Program Files\\Java\\jdk1.8.0_291\\\\bin;C:\\Users\\hspcadmin\\AppData\\Local\\Programs\\Python\\Python38\\Scripts\\;C:\\Users\\hspcadmin\\AppData\\Local\\Programs\\Python\\Python38\\;C:\\Users\\hspcadmin\\AppData\\Local\\Programs\\Python\\Python37-32\\Scripts\\;C:\\Users\\hspcadmin\\AppData\\Local\\Programs\\Python\\Python37-32\\;C:\\Users\\hspcadmin\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\hspcadmin\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\hspcadmin\\AppData\\Roaming\\npm;C:\\Program Files\\Java\\jdk1.8.0_291\\\\bin;;D:\\Programs\\IntelliJ IDEA 2021.1.2\\bin;',
  PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL',
  PROCESSOR_ARCHITECTURE: 'AMD64',
  PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 142 Stepping 12, GenuineIntel',
  PROCESSOR_LEVEL: '6',
  PROCESSOR_REVISION: '8e0c',
  ProgramData: 'C:\\ProgramData',
  ProgramFiles: 'C:\\Program Files',
  'ProgramFiles(x86)': 'C:\\Program Files (x86)',
  ProgramW6432: 'C:\\Program Files',
  PSModulePath: 'C:\\Users\\hspcadmin\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules',
  PUBLIC: 'C:\\Users\\Public',
  SESSIONNAME: 'Console',
  SystemDrive: 'C:',
  SystemRoot: 'C:\\Windows',
  TEMP: 'C:\\Users\\HSPCAD~1\\AppData\\Local\\Temp',
  TMP: 'C:\\Users\\HSPCAD~1\\AppData\\Local\\Temp',
  USERDOMAIN: 'WINDOWS-6FMKCOQ',
  USERDOMAIN_ROAMINGPROFILE: 'WINDOWS-6FMKCOQ',
  USERNAME: 'hspcadmin',
  USERPROFILE: 'C:\\Users\\hspcadmin',
  windir: 'C:\\Windows',
  TERM_PROGRAM: 'vscode',
  TERM_PROGRAM_VERSION: '1.60.0',
  LANG: 'zh_CN.UTF-8',
  COLORTERM: 'truecolor',
  VSCODE_GIT_IPC_HANDLE: '\\\\.\\pipe\\vscode-git-1d890163dd-sock',
  GIT_ASKPASS: 'c:\\Users\\hspcadmin\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh',
  VSCODE_GIT_ASKPASS_NODE: 'C:\\Users\\hspcadmin\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe',
  VSCODE_GIT_ASKPASS_MAIN: 'c:\\Users\\hspcadmin\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js' 
 }
 */