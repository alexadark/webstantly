/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

const PostEntryTitle = ({ post, location }) => {
  const { title, uri } = post

  return (
    <>
      {location === "single" ? (
        <Styled.h1
          className="entry-title"
          dangerouslySetInnerHTML={{ __html: title }}
        />
      ) : (
        <Styled.h1 as="h2" className="entry-title">
          <Styled.a
            as={Link}
            to={`posts/${uri}`}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Styled.h1>
      )}
    </>
  )
}

export default PostEntryTitle
