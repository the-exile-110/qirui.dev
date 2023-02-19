import rss from './rss.mjs'
import sitemap from './sitemap.mjs'
import search from './search.mjs'

async function postBuild() {
    await Promise.all([rss(), sitemap(), search()])
}

postBuild().then(r => console.log('Postbuild complete!', r))
