import { PythonShell } from 'python-shell';
const pythonScript = 'script.py';
const pytest = async (req, res) => {
    var options = {
        mode: 'text',
        encoding: 'utf8',
        pythonOptions: ['-u'],
        scriptPath: './',
        args: ["Mateus", "Felipe"]
    };
    var test = PythonShell.run('script.py', options).then(message => {
        // results is an array consisting of messages collected during execution
        console.log('results: %j', message);
        return message;
    })
    // test.on('m', function (message) {
    //     console.log(message);
    // })
    res.send(test);
}

export { pytest }