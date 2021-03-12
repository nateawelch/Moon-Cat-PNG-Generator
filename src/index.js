
const yargs = require('yargs')
const CatTools = require('./CatTools.js')

yargs
    .scriptName("mooncatpnggen")
    .usage('$0 <cmd> [args]')
    .command('png [catId]', 'Generate png of a catId', (yargs) => {
        yargs.positional('catId', {
            type: 'string',
            describe: 'catId to generate image for'
        })
    }, async function (argv) {
        CatTools.generateImage(argv.catId)
    })
    .help()
    .argv
