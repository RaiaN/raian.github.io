const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const { createRedirect } = actions

  createRedirect({
    fromPath: `/blog`,
    isPermanent: true,
    redirectInBrowser: true,
    toPath: `/`,
  });

  const blogPostTemplate = path.resolve(`./src/templates/blogPost.js`)
  const result = await graphql(
    `
      query {
        allMdx(sort: {frontmatter: {date: DESC}}, limit: 1000) {
          nodes {
            frontmatter {
              slug
              date
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors);
  }

  const posts = result.data.allMdx.nodes;
  
  // Create blog posts pages.
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.frontmatter.slug,
      component: `${blogPostTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id,
        previous: previous,
        next: next
      },
    })
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => 
{
  const { createNodeField } = actions

  // We only want to operate on `Mdx` nodes. If we had content from a
  // remote CMS we could also check to see if the parent node was a
  // `File` node here

  if (node.internal.type === `Mdx`) 
  {
    const value = createFilePath({ node, getNode });
    console.log(`CREATING NODE FOR MDX: ${value}`);
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`
    });
  }
}
