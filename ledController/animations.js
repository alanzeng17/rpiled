// animation handlers for the router
const { execFile } = require('child_process');
var globals = require('./globals');

exports.rainbow = (req, res, next) => {
    console.log('Starting rainbow animations.');
    if (globals.CURR_ANIMATION_PID != -1) {
        process.kill(globals.CURR_ANIMATION_PID, 'SIGINT');
        console.log('killed the old process' + globals.CURR_ANIMATION_PID);
    }
    let child = execFile('python3', [`${__dirname}/animations/rainbow.py`], (err, stdout, stderr) => {
        console.log(err);
        console.log(stdout);
        console.log(stderr);
    })
    globals.CURR_ANIMATION_PID = child.pid;
    res.status(200).json({
        data: {
            message: 'Successfully started rainbow animation.'
        }
    });
}

exports.strandtest = (req, res, next) => {
    console.log('Starting strand test.');
    if (globals.CURR_ANIMATION_PID != -1) {
        process.kill(globals.CURR_ANIMATION_PID, 'SIGINT');
        console.log('killed the old process');
    }
    let child = execFile('python3', [`${__dirname}/animations/strandtest.py`], (err, stdout, stderr) => {
        console.log(err);
        console.log(stdout);
        console.log(stderr);
    })
    globals.CURR_ANIMATION_PID = child.pid;
    res.status(200).json({
        data: {
            message: 'Successfully started strandtest.'
        }
    });
}
