if (window.location.pathname !== '/') {
    // NOTE: use /your-repo-name
    page.base('/gh-plus-page-test')
}

page('/', () => console.log('home'))
page('/foo', () => console.log('foo'))
page('/bar/baz', () => console.log('bar/baz'))

page.start()

$('button').on('click', (event) => {
    page($(event.target).data('path'))
})
