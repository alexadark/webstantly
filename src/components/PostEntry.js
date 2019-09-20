/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PostEntryTitle from "./PostEntryTitle"
import PostEntryMedia from "./PostEntryMedia"
import PostEntryContent from "./PostEntryContent"
import PostEntryMeta from "./PostEntryMeta"
import PostEntryInfo from "./PostEntryInfo"
import { Button } from "rebass"

const PostEntry = ({ post, location }) => {
  return (
    <article>
      <PostEntryMedia location={location} post={post} />
      <div className="content">
        <PostEntryTitle location={location} post={post} />
        <PostEntryInfo className="entry-info" post={post} />
        <PostEntryContent location={location} post={post} />
        <div className="entry-footer">
          <PostEntryMeta post={post} />
          {location !== "single" && (
            <Button
              variant="primary"
              mr={2}
              mt={2}
              sx={{ a: { color: `white` } }}
            >
              <Link
                to={`posts/${post.uri}`}
                aria-label="Read More from this post"
              >
                Read More
              </Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  )
}

export default PostEntry
