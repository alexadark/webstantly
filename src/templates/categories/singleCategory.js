/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { graphql } from 'gatsby'
import PostEntry from '../../components/PostEntry'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'

const Category = ({ data, pageContext }) => {
  const { name, posts } = data.wpgraphql.category
  const { postsPrefix } = pageContext.options

  return (
    <Layout>
      <SEO title={name} description={`Posts for ${name} category`} />
      <Styled.h2 as="h1">{name} Category</Styled.h2>
      {posts.nodes &&
        posts.nodes.map(post => (
          <PostEntry
            key={post.id}
            location="archive"
            post={post}
            postsPrefix={postsPrefix}
          />
        ))}
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query GET_CATEGORY($id: ID!) {
    wpgraphql {
      category(id: $id) {
        name
        slug
        posts(first: 100) {
          nodes {
            ...PostTemplateFragment
          }
        }
      }
    }
  }
`
