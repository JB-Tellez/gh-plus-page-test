console.log('.......2')

page.base('/gh-plus-page-test/')

page('/', () => console.log('home'))
page('/foo', () => console.log('foo'))
page('/bar', () => console.log('bar'))
page.start()