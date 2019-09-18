const path = require(`path`)
const pageTemplate = path.resolve(`./src/templates/pages/singlePage.js`)

const GET_PAGES = `
  # Define our query variables
  query GET_PAGES($first:Int $after:String) {
    wpgraphql {
      # Ask for pages
      pages(
          # Ask for the first XX number of pages
          first: $first

          # A Cursor to where in the dataset our query should start
          # and get items _after_ that point
          after:$after
      ) {
          # In response, we'll want pageInfo so we know if we need
          # to fetch more pages or not.
          pageInfo {
              # If true, we need to ask for more data.
              hasNextPage

              # This cursor will be used for the value for $after
              # if we need to ask for more data
              endCursor
          }
          nodes {
            id
            uri
            pageId
          }
      }
    }
  }
  `
/**
 * Array to store allpagess. We make paginated requests
 * to WordPress to get allpagess, and once we have all pages,
 * then we iterate over them to create pages.
 *
 * @type {Array}
 */
const allPages = []

/**
 * This is the export which Gatbsy will use to process.
 *
 * @param { actions, graphql }
 * @returns {Promise<void>}
 */

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions
  const allPages = []
  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(({ data }) => {
      const {
        wpgraphql: {
          pages: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      nodes.map(page => {
        allPages.push(page)
      })
      if (hasNextPage) {
        return fetchPages({ first: variables.first, after: endCursor })
      }
      return allPages
    })

  await fetchPages({ first: 100, after: null }).then(allPages => {
    allPages.map(page => {
      const path = page.uri === "home" ? `/` : `/${page.uri}`
      console.log(`create page: ${page.uri}`)
      createPage({
        path,
        component: pageTemplate,
        context: page,
      })
    })
  })
}
