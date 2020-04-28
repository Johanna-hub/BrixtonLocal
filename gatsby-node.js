const axios = require("axios")
const path = require("path")
const _ = require("lodash")
require("dotenv").config()

// Resolve .web.js before .js – for universal/cross-platform rendering
const resolvableExtensions = () => ['.web.js', '.web.jsx', '.web.ts', '.web.tsx', '.js', '.jsx', '.ts', '.tsx'];

exports.resolvableExtensions = resolvableExtensions;

exports.onCreateWebpackConfig = ({
  // stage,
  getConfig,
  // rules,
  // loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        ...getConfig().resolve.alias,
        '#components': path.resolve(__dirname, './components'),
        react: path.resolve(__dirname, './node_modules/react/'),
        'styled-components': path.resolve(__dirname, './components/styled'),
        'styled-system': path.resolve(__dirname, './node_modules/styled-system'),
      },
      extensions: [...resolvableExtensions(), ...getConfig().resolve.extensions],
    },
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allGoogleSheetValue {
        edges {
          node {          
            Name  
            Tags
            Category_1        
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const businessNames = result.data.allGoogleSheetValue.edges  
    
    if (anyDuplicateBusinessNames(businessNames)) {
      throw new Error('One or more businesses have duplicate names, please correct in spreadsheet')      
    }

    businessNames.forEach(edge => {
      const { Name } = edge.node
      const businessPath = `/business/${_.kebabCase(Name)}/`

      createPage({
        path: businessPath,
        component: path.resolve(`src/templates/SingleBusiness.js`),
        context: {
          Name: Name,
        },
      })
    })

    let tagNames = result.data.allGoogleSheetValue.edges;

    tagNames.forEach(item => {
      let { Tags } = item.node
      TagsArray = Tags.split(",").map(tag => tag.trim());

     
      TagsArray.forEach(tag=> {
        const tagPath = `/tag/${_.kebabCase(tag)}/`;
        const regTag = tag.replace(/\+/g, "\\+");
        createPage({
          path: tagPath,
          component: path.resolve(`src/templates/SingleTag.js`),
          context: {
            TagRegex: `/${regTag}/i`,
            TagTitle: {tag}
          },
        })
      })

      const allCategories = result.data.allGoogleSheetValue.edges 

      allCategories.forEach(edge => {
        const { Category_1 } = edge.node
        const categoryPath = `/category/${_.kebabCase(Category_1)}/`

        createPage({
          path: categoryPath,
          component: path.resolve(`src/templates/SingleCategory.js`),
          context: {
            Category_1,
          },
        })
      }) 
    })
  })
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  try {
    const response = await fetchGoogleSheetsData()
    const rawValues = response.data.valueRanges[0].values

    const formattedValues = formatValues(rawValues)

    formattedValues.forEach((gSheetValue, i) => {
      const valueNode = {
        id: createNodeId(`${i}`),
        parent: `__SOURCE__`,
        internal: {
          type: `googleSheetValue`, // name of the graphQL query --> allItem {}
          contentDigest: createContentDigest(gSheetValue),
        },
        children: [],
        ...gSheetValue,
      }

      createNode(valueNode)
    })
  } catch(e) {
    throw e
  }
}

const formatValues = rawValues => {
  const formattedValues = []
  const businessDetailHeadings = rawValues.shift()

  rawValues.forEach(row => {
    const validatedRow = ensureRowHasAllValues(row, businessDetailHeadings)

    if(doesRowContainName(row)) {
      const formattedRow = validatedRow.reduce((formattedRow, value, i) => {
        formattedRow[businessDetailHeadings[i]] = value
        return formattedRow
      }, {})

      formattedValues.push(formattedRow)
    }
  })

  return formattedValues
}

const doesRowContainName = row => row[0] !== ""

const ensureRowHasAllValues = (row, businessDetailHeadings) => {
  let missingValues = businessDetailHeadings.length - row.length

  while (missingValues > 0) {
    row.push("")
    missingValues--
  }

  return row
}

const fetchGoogleSheetsData = () =>
  axios.get(
    `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GOOGLE_SHEET_ID}/values:batchGet?ranges=B3:Q&majorDimension=ROWS&key=${process.env.GOOGLE_API_KEY}`
  )

const anyDuplicateBusinessNames = businessNames => 
  new Set(businessNames.map(edge => edge.node.Name)).size !== businessNames.length
