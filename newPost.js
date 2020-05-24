const fs = require('fs')
const date = new Date()
const year = date.getFullYear()
const month = ('0' + (date.getMonth() + 1)).slice(-2)
const day = ('0' + date.getDate()).slice(-2)
const name = process.argv[2]

const newPost = `${year}-${month}-${day}--${name}`

fs.mkdirSync(`content/posts/${newPost}`)

let stream = fs.createWriteStream(`content/posts/${newPost}/index.mdx`)

stream.once('open', function (fd) {
  stream.write('---\n')
  stream.write('title: \n')
  stream.write('cover: \n')
  stream.write('author: Chris Otto\n')
  stream.write("tags: ['']\n")
  stream.write('published: false\n')
  stream.write('---\n\n')
  stream.end()
})
