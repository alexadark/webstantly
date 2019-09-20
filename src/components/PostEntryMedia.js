/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"

const WithLink = ({ post, location, children }) =>
  location === "single" ? (
    children
  ) : (
    <Link to={`/posts/${post.uri}`} aria-label="View the entire post">
      {children}
    </Link>
  )

const PostEntryMedia = ({ post, location }) => {
  const img = post.featuredImage

  return (
    <>
      {img && (
        <WithLink location={location} post={post}>
          <div className="entry-media" />
        </WithLink>
      )}
    </>
  )
}

export default PostEntryMedia
