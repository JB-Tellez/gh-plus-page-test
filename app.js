if (window.location.pathname !== '/') {
    page.base(window.location.pathname + '/')
}

page('/', () => console.log('home'))
page('/foo', () => console.log('foo'))
page('/bar/baz', () => console.log('bar/baz'))

page.start()