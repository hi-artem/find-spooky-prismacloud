'use strict';

const fs = require('fs');
let { getAllImages } = require('./images');

let main = async () => {
  let images = await getAllImages()
  let out = []

  images.forEach(image => {
    image['packages'].forEach(packageClass => {
      packageClass['pkgs'].forEach(pkg => {
        if (pkg.name.includes('openssl') && pkg.version.startsWith('3')) {
          out.push(image)
        }
        else if (pkg.name.includes('nodejs') && (
          pkg.version.startsWith('17')
          || pkg.version.startsWith('18')
          || pkg.version.startsWith('19'))) {
          out.push(image)
        }
      })
    })
  });


  fs.writeFile('report.json', JSON.stringify(out), function (err) {
    if (err) return console.log(err);
    console.log('report generated!');
  });
}

main()
