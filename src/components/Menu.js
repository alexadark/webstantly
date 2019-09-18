/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, useStaticQuery, Link } from "gatsby"
import { createLocalLink } from "../utils"

const MENU_QUERY = graphql`
  fragment MenuFields on WPGraphQL_MenuItem {
    id
    label
    url
    target
    connectedObject {
      __typename
    }
  }

  query GET_MENU_ITEMS {
    wpgraphql {
      menuItems(where: { location: MENU_1 }) {
        nodes {
          ...MenuFields
          childItems {
            nodes {
              ...MenuFields
            }
          }
        }
      }
    }
  }
`

const renderLink = (menuItem, wordPressUrl) =>
  menuItem.connectedObject.__typename === "WPGraphQL_MenuItem" ? (
    menuItem.url === `/blog` ? (
      <Link to={`/blog`}> {menuItem.label}</Link>
    ) : menuItem.url === `#` ? (
      menuItem.label
    ) : (
      <a href={menuItem.url} target="_blank" rel="noopener noreferrer">
        {menuItem.label}
      </a>
    )
  ) : createLocalLink(menuItem.url, wordPressUrl) ? (
    menuItem.url === wordPressUrl ? (
      <Link to="/"> {menuItem.label}</Link>
    ) : (
      <Link to={createLocalLink(menuItem.url, wordPressUrl)}>
        {menuItem.label}
      </Link>
    )
  ) : (
    menuItem.label
  )

const renderMenuItem = (menuItem, wordPressUrl) => {
  if (menuItem.childItems && menuItem.childItems.nodes.length) {
    return renderSubMenu(menuItem, wordPressUrl)
  } else {
    return (
      <li className="menu-item" key={menuItem.id}>
        {renderLink(menuItem, wordPressUrl)}
      </li>
    )
  }
}

const renderSubMenu = (menuItem, wordPressUrl) => {
  return (
    <li className="has-subMenu menu-item" key={menuItem.id}>
      {renderLink(menuItem, wordPressUrl)}

      <ul className="menuItemGroup sub-menu">
        {menuItem.childItems.nodes.map(item =>
          renderMenuItem(item, wordPressUrl)
        )}
      </ul>
    </li>
  )
}

const Menu = ({ wordPressUrl }) => {
  const data = useStaticQuery(MENU_QUERY)

  if (data.wpgraphql.menuItems) {
    return (
      <nav aria-label="main">
        <ul role="menu">
          {data.wpgraphql.menuItems.nodes.map(menuItem => {
            if (menuItem.childItems.nodes.length) {
              return renderSubMenu(menuItem, wordPressUrl)
            } else {
              return renderMenuItem(menuItem, wordPressUrl)
            }
          })}
        </ul>
      </nav>
    )
  } else {
    return null
  }
}

export default Menu
