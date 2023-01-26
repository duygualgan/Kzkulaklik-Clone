const axios = require('axios')
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLList
} = require('graphql')

const ProductType = new GraphQLObjectType({
  name: 'product',
  fields: () => ({
    id: { type: GraphQLInt },
    imgSrc: { type: GraphQLString },
    altimgSrc: { type: GraphQLString },
    productName: { type: GraphQLString },
    description: { type: GraphQLString },
    category: { type: GraphQLString },
    stars: { type: GraphQLInt },
    originalPrice: { type: GraphQLFloat },
    discountedPrice: { type: GraphQLFloat }
  })
})

const CommentType = new GraphQLObjectType({
  name: 'comment',
  fields: () => ({
    id: { type: GraphQLInt },
    username: { type: GraphQLString },
    commnetDate: { type: GraphQLString },
    comment: { type: GraphQLString },
    star: { type: GraphQLInt }
  })
})

const DescriptionType = new GraphQLObjectType({
  name: 'description',
  fields: () => ({
    id: { type: GraphQLInt },
    descriptionTitle: { type: GraphQLString },
    descriptionText: { type: GraphQLString },
    descriptionList: { type: new GraphQLList(GraphQLString) },
    boxIncluded: { type: GraphQLString },
    specs: { type: new GraphQLList(GraphQLString) }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLInt } },
      resolve (parent, args) {
        return axios.get('http://localhost:3000/products/' + args.id).then(res => res.data)
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve (parent, args) {
        return axios.get('http://localhost:3000/products/').then(res => res.data)
      }
    },
    comment: {
      type: CommentType,
      args: { id: { type: GraphQLInt } },
      resolve (parent, args) {
        return axios.get('http://localhost:3000/comments/' + args.id).then(res => res.data)
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve (parent, args) {
        return axios.get('http://localhost:3000/comments/').then(res => res.data)
      }
    },
    description: {
      type: DescriptionType,
      args: { id: { type: GraphQLInt } },
      resolve (parent, args) {
        return axios.get('http://localhost:3000/descriptions/' + args.id).then(res => res.data)
      }
    },
    descriptions: {
      type: new GraphQLList(DescriptionType),
      resolve (parent, args) {
        return axios.get('http://localhost:3000/descriptions/').then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
