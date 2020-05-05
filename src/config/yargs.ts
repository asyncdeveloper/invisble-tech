import yargs = require('yargs');

const argv: object = yargs
    .usage("Usage: -d <name>")
    .options({
        address: {
            alias: 'd',
            desc: 'List of address',
            type: 'string',
            demand: true,
        }
    })
    .version()
    .help()
    .argv;

export default argv;
