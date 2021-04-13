const { promisify } = require('util')
const spawn = promisify(require('child_process').spawn)

async function lsExample() {
    const { stdout, stderr } = await spawn('ls', ['-lh', '/usr'])
    console.log('stdout:', stdout);
    console.error('stderr:', stderr);
}
lsExample();