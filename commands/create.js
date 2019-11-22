const fs = require('fs-extra');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const Spinner = require('clui').Spinner;

const { depPackages, devDepPackages } = require('../packages/create');

const npmCommand = os.platform() === 'win32' ? 'npm.cmd' : 'npm';

const execute = ({ name }) => {
    const cwd = path.resolve(process.cwd(), name);

    if (fs.existsSync(cwd)) {
        console.log('Folder already exists !');
        process.exit(0);
    } else {
        fs.mkdirSync(cwd);
        runInit(cwd);
    }
};

const runInit = (cwd) => {
    const init = spawn(npmCommand, ['init', '-y'], {
        cwd: cwd
    });

    init.stdout.on('data', (data) => {
        console.log(`${data}`);
    });

    init.stdout.on('end', () => {
        runInstall(cwd);
    });
};

const runInstall = (cwd) => {
    const spinner = new Spinner('Installing npm dependencies.');
    spinner.start();

    const install = spawn(npmCommand, depPackages, {
        cwd: cwd
    });

    install.stdout.on('data', (data) => {
        spinner.stop();
        console.log(`${data}`);
        spinner.start();
    });

    install.stdout.on('end', () => {
        spinner.stop();
        runInstallDev(cwd);
    });
};

const runInstallDev = (cwd) => {
    const spinner = new Spinner('Installing npm dev dependencies.');
    spinner.start();

    const installDev = spawn(npmCommand, devDepPackages, {
        cwd: cwd
    });

    installDev.stdout.on('data', (data) => {
        spinner.stop();
        console.log(`${data}`);
        spinner.start();
    });

    installDev.stdout.on('end', () => {
        spinner.stop();
        copyTemplate(cwd);
    });
};

const copyTemplate = (cwd) => {
    fs.copySync(path.resolve(__dirname, '../templates/create'), cwd);

    addScripts(cwd);
};

const addScripts = (cwd) => {
    const packageJson =  fs.readJSONSync(path.resolve(cwd, 'package.json'));

    packageJson.scripts = {
        start: 'webpack',
        dev: 'webpack-dev-server --progress --port 8080',
        test: 'jest',
        coverage: 'jest --coverage'
    };

    fs.writeJSONSync(path.resolve(cwd, 'package.json'), packageJson, { EOL: '\n', spaces: 2 });
};

module.exports = {
    execute
};
