/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const Pagination = ({ pageNumber, hasNextPage, allPosts, itemsPerPage }) => {
  const isLast = pageNumber === allPosts / itemsPerPage
  return (
    <div>
      {pageNumber > 1 && (
        <div>
          {pageNumber !== 1 ? (
            <Link to={pageNumber > 2 ? `blog/${pageNumber - 1}` : `/`}>
              ← Prev
            </Link>
          ) : (
            <>
              <div> ← Prev</div>
            </>
          )}
        </div>
      )}
      <div>
        <nav role="navigation" aria-label="Pagination Navigation">
          <ul>
            {Array.from({ length: allPosts.length / itemsPerPage }, (_, i) => (
              <li>
                <Link
                  key={`pagination-number${i + 1}`}
                  to={i === 0 ? `blog/` : `blog/${i + 1}`}
                >
                  {i + 1}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {hasNextPage && (
        <div>
          {!isLast ? (
            <Link to={`blog/${pageNumber + 1}`}>Next →</Link>
          ) : (
            <div> Next →</div>
          )}
        </div>
      )}
    </div>
  )
}

export default Pagination
