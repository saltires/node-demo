const { exec, spawn } = require('child_process')

// exec('ls -al', (err, stdout, stderr) => {
//     if (err) {
//         console.log(err);
//         return
//     }
//     console.log(stdout.toString());
// })

const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});