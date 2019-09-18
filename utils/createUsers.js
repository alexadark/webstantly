const path = require(`path`)
const userTemplate = path.resolve(`./src/templates/users/singleUser.js`)

module.exports = async ({ actions, graphql }, options) => {
  const GET_USERS = `
      query GET_USERS($first: Int) {
        wpgraphql {
          users(first: $first) {
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
  const allUsers = []
  const fetchUsers = async variables =>
    await graphql(GET_USERS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          users: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      nodes.map(tag => {
        allUsers.push(tag)
      })
      if (hasNextPage) {
        return fetchUsers({ first: 100, after: endCursor })
      }
      return allUsers
    })

  await fetchUsers({ first: 100, after: null }).then(allUsers => {
    allUsers.map(tag => {
      console.log(`create tag: ${tag.slug}`)

      createPage({
        path: `/author/${tag.slug}`,
        component: userTemplate,
        context: {
          id: tag.id,
          options,
        },
      })
    })
  })
}
