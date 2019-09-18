/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const PostEntryContent = ({ post, location }) => {
  const content = location === "single" ? post.content : post.excerpt
  return (
    <Styled.root
      className="entry-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PostEntryContent
