/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'

import { graphql } from 'gatsby'
import PostEntry from '../../components/PostEntry'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'

const Tag = ({ data, pageContext }) => {
  const { name, posts } = data.wpgraphql.tag
  const { postsPrefix } = pageContext.options

  return (
    <Layout>
      <SEO title={name} description={`Posts for ${name} tag`} />
      <Styled.h2 as="h1">Tag {name}</Styled.h2>
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

export default Tag

export const pageQuery = graphql`
  query GET_TAG($id: ID!) {
    wpgraphql {
      tag(id: $id) {
        name
        slug
        id
        posts(first: 100) {
          nodes {
            ...PostTemplateFragment
          }
        }
      }
    }
  }
`
