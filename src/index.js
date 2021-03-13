#! /usr/bin/env node


const yargs = require('yargs')
const CatTools = require('./CatTools.js')
const fs = require('fs')

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
    console.log(argv.catId+".png" + " generated")

  })
  .command('bulkpng [file]', 'Generate pngs from a file containing catIds', (yargs) => {
    yargs.positional('file', {
      type: 'string',
      describe: 'File with list of catIds to generate pngs for'
    })
  }, async function (argv) {
    fs.readFile(argv.file, 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      let ids = data.split('\n')
      if (ids[ids.length - 1] === undefined) ids.pop()
      process(ids)

    })
  })
  .command('collage [file]', "Generate collage of moon cats from a file containing catIds", (yargs) => {
    yargs.positional('file', {
      type: 'string',
      describe: 'File with list of catIds to generate collage for'
    })
  }, async function (argv) {
    fs.readFile(argv.file, 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return
      }
      let ids = data.split('\n')
      if (ids[ids.length - 1] === undefined) ids.pop()
      CatTools.generateCollage(ids)
      console.log("collage.png generated")
    })
  })
  .help()
  .argv



function process(ids) {
  let id = ids.shift()
  console.log(argv+".png generated")
  CatTools.generateImage(id)
  setTimeout(() => { process(ids) }, 5)
}
