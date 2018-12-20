module.exports = {
  siteMetadata: {
    title: 'Semizburg',
    description: 'Pivo je sa ljudima dugo koliko i pismo a craft ga je uveo u dvadeset prvi vijek',
    author: 'codepool'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
       resolve: 'gatsby-source-filesystem',
       options: {
         path: `${__dirname}/src/pages`,
         name: 'pages'
       }
    },
    'gatsby-transformer-remark'
  ]
}
