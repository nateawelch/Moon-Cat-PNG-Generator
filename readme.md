# MoonCatImageGenerator

A tool for generating PNGs of moon cats. Forked from the official MoonCatRescue parser https://github.com/nateawelch/mooncatparser

## Instructions

`yarn install`

### Generate single pngs

`yarn start png 0x1111111111`

Will output a png of catId 0x1111111111 into current working directory

### Bulk generate pngs

`yarn start bulkpng fileName`

Will read fileName as a \n delineated list of catIds and output them all to the current working directory

Files for allCats, regularCats, and genesisCats included at the root of this repo

### Generate collage

`yarn start collage filename`

Will read filename as a \n delineated list of catIds and output them into a single 96 image wide collage png in the current working directory

Files for allCats, regularCats, and genesisCats included at the root of this repo
