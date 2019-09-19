/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"
import {
  ButtonBlock,
  FeaturesBlock,
  ContentBlock,
  HeadingBlock,
  ImageBlock,
  ProjectsBlock,
  TeamBlock,
} from "../../components/AcfBlocks"

const Page = ({ data }) => {
  const {
    title,
    content,
    excerpt,
    flexLayouts: { flexibleLayouts },
  } = data.wpgraphql.page
  return (
    <Layout>
      <SEO title={title} description={excerpt} />

      {content && (
        <div className="content">
          <Styled.root dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      )}
      {flexibleLayouts.length > 0 &&
        flexibleLayouts.map(block => {
          switch (block.__typename) {
            case "WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ContentBlock":
              return (
                <ContentBlock
                  cssclass={block.cssclass}
                  anchor={block.anchor}
                  content={block.content}
                />
              )

              break
            case "WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ImageBlock":
              return <ImageBlock />

              break

            case "WPGraphQL_Page_Flexlayouts_FlexibleLayouts_HeadingBlock":
              return (
                <HeadingBlock
                  cssclass={block.cssclass}
                  anchor={block.anchor}
                  type={block.type}
                  heading={block.heading}
                  centered={block.centered}
                />
              )

              break
            case "WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ButtonBlock":
              return (
                <ButtonBlock
                  cssclass={block.cssclass}
                  anchor={block.anchor}
                  button={block.button}
                  variant={block.variant}
                  position={block.position}
                />
              )

              break
            case "WPGraphQL_Page_Flexlayouts_FlexibleLayouts_FeaturesBlock":
              return (
                <FeaturesBlock
                  cssclass={block.cssclass}
                  anchor={block.anchor}
                  content={block.content}
                  title={block.title}
                  cards={block.cards}
                />
              )

              break
            case "WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ProjectsBlock":
              return (
                <ProjectsBlock
                  cssclass={block.cssclass}
                  anchor={block.anchor}
                  content={block.content}
                  title={block.title}
                  subtitle={block.subtitle}
                  projects={block.projects}
                />
              )

              break
            case "WPGraphQL_Page_Flexlayouts_FlexibleLayouts_TeamBlock":
              return <TeamBlock />

              break
          }
        })}
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        excerpt
        uri
        flexLayouts {
          flexibleLayouts {
            ... on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ContentBlock {
              content
              cssclass
              anchor
            }
            ... on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ProjectsBlock {
              subtitle
              title
              content
              cssclass
              anchor
              projects {
                ... on WPGraphQL_Project {
                  id
                  featuredImage {
                    ...GatsbyImageQuery
                  }
                  slug
                  title
                  uri
                  projectFields {
                    projectUrl
                  }
                }
              }
            }
            ... on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ImageBlock {
              cssclass
              anchor
              image {
                ...GatsbyImageQuery
              }
            }
            ... on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_HeadingBlock {
              heading
              type
              cssclass
              anchor
              centered
            }
            ... on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_ButtonBlock {
              variant
              cssclass
              anchor
              position
              button {
                target
                title
                url
              }
            }
            ... on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_FeaturesBlock {
              content
              title
              cssclass
              anchor
              cards {
                content
                title
                icon {
                  ...GatsbyImageQuery
                }
              }
            }

            ... on WPGraphQL_Page_Flexlayouts_FlexibleLayouts_TeamBlock {
              content
              title
              cssclass
              anchor
              teamMember {
                bio
                fieldGroupName
                intro
                linkedin
                twitter
                name
                picture {
                  ...GatsbyImageQuery
                }
              }
            }
          }
        }
      }
    }
  }
`
