import React from "react"
import { graphql } from "gatsby"
import PostEntry from "../../components/PostEntry"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const SinglePost = ({ data }) => {
  const { title, excerpt } = data.wpgraphql.post

  return (
    <Layout>
      <SEO title={title} description={excerpt} />
      <PostEntry post={data.wpgraphql.post} location="single" />
    </Layout>
  )
}

export default SinglePost

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        content
        ...PostTemplateFragment
      }
    }
  }
`
