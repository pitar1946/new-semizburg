// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/Codepool/Desktop/new-semizburg/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/Codepool/Desktop/new-semizburg/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/Codepool/Desktop/new-semizburg/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/Codepool/Desktop/new-semizburg/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/Codepool/Desktop/new-semizburg/src/pages/blog.js")),
  "component---src-pages-howitsmade-js": preferDefault(require("/Users/Codepool/Desktop/new-semizburg/src/pages/howitsmade.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/Codepool/Desktop/new-semizburg/src/pages/index.js")),
  "component---src-pages-ourbeers-js": preferDefault(require("/Users/Codepool/Desktop/new-semizburg/src/pages/ourbeers.js")),
  "component---src-pages-shop-js": preferDefault(require("/Users/Codepool/Desktop/new-semizburg/src/pages/shop.js")),
  "component---src-pages-story-js": preferDefault(require("/Users/Codepool/Desktop/new-semizburg/src/pages/story.js"))
}

