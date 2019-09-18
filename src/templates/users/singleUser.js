/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

import { graphql } from "gatsby"
import { Flex } from "theme-ui"
import PostEntry from "../../components/PostEntry"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const User = ({ data, pageContext }) => {
  const { name, posts, avatar } = data.wpgraphql.user
  const { postsPrefix } = pageContext.options

  return (
    <Layout>
      <SEO title={name} description={`Posts from ${name}`} />
      <Flex>
        <img src={avatar.url} alt={`avatar for ${name}`} />

        <Styled.h2 as="h1" s>
          {name}
        </Styled.h2>
      </Flex>

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

export default User

export const pageQuery = graphql`
  query GET_USER($id: ID!) {
    wpgraphql {
      user(id: $id) {
        name
        slug
        id
        description
        avatar {
          url
        }
        posts(first: 100) {
          nodes {
            ...PostTemplateFragment
          }
        }
      }
    }
  }
`
