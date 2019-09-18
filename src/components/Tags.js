/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Tags = ({ post }) => {
  const tags = post.tags.nodes
  return (
    <div>
      {tags.length > 0 && <span>{tags.length > 1 ? "Tags: " : "Tag: "}</span>}
      {tags.map(tag => (
        <button>
          <Link
            aria-label={`visit tag ${tag.name} page`}
            to={`/tag/${tag.slug}`}
            key={tag.id}
          >
            {tag.name}
          </Link>
        </button>
      ))}
    </div>
  )
}

export default Tags
