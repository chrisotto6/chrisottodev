require('dotenv').config()
const fs = require('fs')
const glob = require('glob')
const tinify = require('tinify')

const fileName = 'util/registry.json'
tinify.key = process.env.TINIFY_API_KEY

const registrar = (array) => {
  let registry = JSON.parse(fs.readFileSync(fileName))

  array.forEach((item) => {
    if (!registry.done.includes(item)) {
      const source = tinify.fromFile(item)
      source.toFile(item)
      registry.done.push(item)
    }
  })

  fs.writeFileSync(fileName, JSON.stringify(registry, null, 2))
}

glob('content/**/*(*.png|*.jpg)', function (er, images) {
  if (er) {
    throw new Error(er)
  }
  if (images) {
    registrar(images)
  }
})

glob('static/**/*(*.png|*.jpg)', function (er, images) {
  if (er) {
    throw new Error(er)
  }
  if (images) {
    registrar(images)
  }
})

glob('src/**/*(*.png|*.jpg)', function (er, images) {
  if (er) {
    throw new Error(er)
  }
  if (images) {
    registrar(images)
  }
})
