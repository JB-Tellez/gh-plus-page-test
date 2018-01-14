if (window.location !== '/') {
    page.base('/gh-plus-page-test')
}

page('/', () => console.log('home'))
page('/foo', () => console.log('foo'))
page('/bar/baz', () => console.log('bar/baz'))

page.start()