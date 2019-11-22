#!/usr/bin/env node

const yargs = require('yargs');

const CreateCommand = require('./commands/create');

yargs
    .usage('Usage: $0 <command> [options]')
    .help('h')
    .alias('h', 'help');

yargs
    .command('create [name]', 'Create a new project')
    .example('$0 create [name]', 'Create a new project')
    .alias('n', 'name')
    .nargs('name', 1)
    .describe('n', 'Project name')
    .demandOption(['name']);

yargs  // TODO
    .command('generate component [name]', 'Create a new component')
    .example('$0 generate component [name]', 'Create a new component')
    .alias('g', 'generate')
    .alias('c', 'component')
    // .nargs('name', 1)
    // .describe('n', 'Project name')
    .demandOption(['name']);

const argv = yargs.argv;

const { _: command } = argv;

switch (command['0']) {
    case 'create':
        CreateCommand.execute(argv);
        break;
    case 'delete':
        CreateCommand.execute();
        break;
    default:
        console.log('Bad command.');
}
