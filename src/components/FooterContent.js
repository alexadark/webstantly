import React from 'react'

const FooterContent = () => {
  return (
    <>
      © {new Date().getFullYear()} | Built with{` `}
      <a href="https://www.wpgraphql.com">WPGraphQL</a> and{` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </>
  )
}

export default FooterContent
