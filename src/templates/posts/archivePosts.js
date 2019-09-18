/** @jsx jsx */
import { jsx } from "theme-ui"

import Layout from "../../components/Layout"
import { graphql } from "gatsby"
import PostEntry from "../../components/PostEntry"
import Pagination from "../../components/Pagination"
import SEO from "../../components/Seo"

const Blog = ({ data, pageContext }) => {
  const posts = data.wpgraphql.posts.nodes
  const { pageNumber, hasNextPage, postsPerPage, allPosts } = pageContext

  return (
    <Layout>
      <SEO title="blog" description="this is the posts page" />

      {data &&
        data.wpgraphql &&
        posts.map(post => (
          <PostEntry key={post.id} location="archive" post={post} />
        ))}

      <Pagination
        pageNumber={pageNumber}
        hasNextPage={hasNextPage}
        allPosts={allPosts}
        itemsPerPage={postsPerPage}
      />
    </Layout>
  )
}

export default Blog

export const query = graphql`
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    uri
    title
    excerpt
    date
    featuredImage {
      altText
      sourceUrl
    }
    categories {
      nodes {
        id
        slug
        name
      }
    }
    author {
      name
      slug
      avatar {
        url
      }
    }
    tags {
      nodes {
        name
        slug
      }
    }
  }
`

export const pageQuery = graphql`
  query GET_POSTS($ids: [ID], $postsPerPage: Int!) {
    wpgraphql {
      posts(first: $postsPerPage, where: { in: $ids }) {
        nodes {
          ...PostTemplateFragment
        }
      }
    }
  }
`
