const path = require(`path`)
const tagTemplate = path.resolve(`./src/templates/tags/singleTag.js`)

module.exports = async ({ actions, graphql }, options) => {
  const GET_TAGS = `
      query GET_TAGS($first: Int) {
        wpgraphql {
          tags(first: $first) {
            pageInfo {
              hasNextPage
              endCursor
            }
            nodes {
              id
             slug
            }
          }
        }
      }
    `
  const { createPage } = actions
  const allTags = []
  const fetchTags = async variables =>
    await graphql(GET_TAGS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          tags: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      nodes.map(tag => {
        allTags.push(tag)
      })
      if (hasNextPage) {
        return fetchTags({ first: 100, after: endCursor })
      }
      return allTags
    })

  await fetchTags({ first: 100, after: null }).then(allTags => {
    allTags.map(tag => {
      console.log(`create tag: ${tag.slug}`)

      createPage({
        path: `/tag/${tag.slug}`,
        component: tagTemplate,
        context: {
          id: tag.id,
          options,
        },
      })
    })
  })
}
