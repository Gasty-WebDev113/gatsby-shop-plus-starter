/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct(sort: { fields: [title] }) {
        edges {
          node {
            title
            images {
              originalSrc
            }
            shopifyId
            handle
            description
            availableForSale
            priceRange {
              maxVariantPrice {
                amount
              }
              minVariantPrice {
                amount
              }
            }
          }
        }
      }
      allShopifyArticle(sort: { fields: [shopifyId] }) {
        edges {
          node {
            shopifyId
            contentHtml
            content
            publishedAt(fromNow: true)
            tags
            title
            image {
              id
              src
            }
          }
        }
      }
    }
  `)

  //Products

  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `/products/${node.handle}`,
      component: path.resolve(`./src/templates/product.js`),
      context: {
        product: node,
      },
    })
  })

  //Blogs

  result.data.allShopifyArticle.edges.forEach(({ node }) => {
    createPage({
      path: `/blogs/${node.shopifyId}`,
      component: path.resolve(`./src/templates/blogdetail.js`),
      context: {
        blog: node,
      },
    })
  })
}