import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


// import { createStore } from 'vuex'
// import axios from 'axios'
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
// import { getFirestore, collection, doc, getDocs, setDoc, addDoc, deleteDoc } from 'firebase/firestore'
// import router from '../router'

// export default createStore({
//   state: {
//     comments: [],
//     descriptions: [],
//     selectedProduct: 1,
//     userMail: null,
//     user: null,
//     docs: [],
//     selectedTab: 'description',
//     selectedPage: 'home',
//     registerMail: '',
//     registerPassword: '',
//     loginMail: '',
//     loginPassword: '',
//     filteredProducts: [],
//     cart: [],
//     userCarts: [],
//     products: []
//     /* {
//         id: 0,
//         imgSrc: require('@/assets/products/main.jpg'),
//         altimgSrc: require('@/assets/products/alt.jpg'),
//         productName: 'ürün 1',
//         description: 'KZ ZSN Pro 1BA+1DD Dengeli Armatür ve Dinamik Sürücü Hibrit, HD Mikrofonlu, Gürültü Azaltıcı Kulak İçi Kulaklık',
//         category: 'kulaklik',
//         stars: 5,
//         originalPrice: 100,
//         discountedPrice: 90
//       },
//       {
//         id: 1,
//         imgSrc: require('@/assets/products/alt.jpg'),
//         altimgSrc: require('@/assets/products/main.jpg'),
//         productName: 'ürün 2',
//         description: '*2 KZ ZSN Pro 1BA+1DD Dengeli Armatür ve Dinamik Sürücü Hibrit, HD Mikrofonlu, Gürültü Azaltıcı Kulak İçi Kulaklık',
//         category: 'kablo',
//         stars: 2.5,
//         originalPrice: 200,
//         discountedPrice: 180
//       } */
//   },
//   mutations: {
//     setSelectedProduct (state, id) {
//       state.selectedProduct = id
//     },

//     setSelectedPage (state, page) {
//       state.selectedPage = page
//     },

//     setSelectedTab (state, tab) {
//       state.selectedTab = tab
//     },

//     setCart (state, filteredCart) {
//       state.cart = filteredCart
//     },

//     increaseCount (state, id) {
//       state.cart[id].count++
//     },

//     decreaseCount (state, id) {
//       state.cart[id].count--
//     },

//     setFilteredProducts (state, products) {
//       state.filteredProducts = products
//     },

//     setProducts (state, data) {
//       state.products = data
//     },

//     setComments (state, data) {
//       state.comments = data
//     },

//     setDescriptions (state, data) {
//       state.descriptions = data
//     }
//   },
//   actions: {
//     async getCarts (context) {
//       var db = getFirestore()
//       var querySnapshot = await getDocs(collection(db, 'carts'))
//       var data = []
//       var docs = []
//       querySnapshot.forEach((doc) => {
//         docs.push({ docid: doc.id, uid: doc.data().uid })
//         data.push({ uid: doc.data().uid, cart: doc.data().cart })
//       })
//       context.state.userCarts = data
//       context.state.docs = docs
//     },

//     setUserCart (context) {
//       if (context.state.user === null) {
//         return
//       }
//       var carts = context.state.userCarts
//       var uid = context.state.user.uid
//       var search = carts.find(c => c.uid === uid)

//       if (search !== undefined) {
//         context.state.cart = search.cart
//       }
//     },

//     async updateUserCart (context) {
//       if (context.state.user === null) {
//         return
//       }
//       var cart = context.state.cart
//       var userCarts = context.state.userCarts
//       var uid = context.state.user.uid

//       if (userCarts.filter(c => c.uid === uid).length === 0) {
//         userCarts.push({ uid: uid, cart: cart })
//       } else {
//         var cartIndex = userCarts.findIndex(c => c.uid === uid)
//         userCarts[cartIndex].cart = cart
//       }
//       await context.dispatch('updateFirebaseCart')
//     },

//     async updateFirebaseCart (context) {
//       if (context.state.user === null) {
//         return
//       }
//       var cart = context.state.cart
//       var uid = context.state.user.uid
//       var document = context.state.docs.find(d => d.uid === uid)
//       var db = getFirestore()

//       if (cart.length === 0) {
//         await deleteDoc(doc(db, 'carts', document.docid))
//         return
//       }

//       try {
//         if (document === undefined) {
//           await addDoc(collection(db, 'carts'), {
//             uid: uid,
//             cart: cart
//           })
//         } else {
//           await setDoc(doc(db, 'carts', document.docid), {
//             uid: uid,
//             cart: cart
//           })
//         }
//         await context.dispatch('getCarts')
//       } catch (e) {
//         console.error('hata: ' + e)
//       }
//     },

//     addToCart (context, iCount) {
//       var cart = context.state.cart
//       var selectedProduct = context.state.selectedProduct
//       var productInCart = cart.filter(a => a.id === selectedProduct)
//       if (productInCart.length === 0) {
//         cart.push({ id: selectedProduct, count: iCount })
//       } else {
//         var index = cart.findIndex(listing => listing.id === selectedProduct)
//         cart[index].count += iCount
//       }
//       context.dispatch('updateUserCart')
//     },

//     removeFromCart (context, id) {
//       var cart = context.state.cart
//       var filteredCart = cart.filter(c => c.id !== id)
//       context.commit('setCart', filteredCart)
//       context.dispatch('updateUserCart')
//     },

//     selectProduct (context, id) {
//       context.commit('setSelectedProduct', id)
//     },

//     selectPage (context, page) {
//       context.commit('setSelectedPage', page)
//     },

//     selectTab (context, tab) {
//       context.commit('setSelectedTab', tab)
//     },

//     increaseCount (context, id) {
//       var index = context.state.cart.findIndex(item => item.id === id)
//       context.commit('increaseCount', index)
//       context.dispatch('updateUserCart')
//     },

//     decreaseCount (context, id) {
//       var index = context.state.cart.findIndex(item => item.id === id)
//       if (context.state.cart[index].count > 1) {
//         context.commit('decreaseCount', index)
//         context.dispatch('updateUserCart')
//       }
//     },

//     filterProducts (context, category) {
//       var temp = []
//       if (category === 'all') {
//         temp = context.state.products
//       } else {
//         temp = context.state.products.filter(p => p.category === category)
//       }
//       context.commit('setFilteredProducts', temp)
//     },

//     async fetchData (context) {
//       // var products = await axios.get('http://localhost:3000/products')
//       // var comments = await axios.get('http://localhost:3000/comments')
//       // var descriptions = await axios.get('http://localhost:3000/descriptions')

//       var products = await axios({
//         method: 'POST',
//         url: 'http://localhost:5050/graphql',
//         data: {
//           query: `
//             {
//               products {
//                 id,
//                 imgSrc,
//                 altimgSrc,
//                 productName,
//                 description,
//                 category,
//                 stars,
//                 originalPrice,
//                 discountedPrice
//               }
//             }
//           `
//         }
//       }).then(data => { return data.data.data.products })

//       var comments = await axios({
//         method: 'POST',
//         url: 'http://localhost:5050/graphql',
//         data: {
//           query: `
//              {
//                comments {
//                  id,
//                  username,
//                  commnetDate,
//                  comment,
//                  star
//                }
//              }
//            `
//         }
//       }).then(data => { return data.data.data.comments })

//       var descriptions = await axios({
//         method: 'POST',
//         url: 'http://localhost:5050/graphql',
//         data: {
//           query: `
//              {
//                descriptions {
//                  id,
//                  descriptionTitle,
//                  descriptionText,
//                  descriptionList,
//                  boxIncluded,
//                  specs
//                }
//              }
//            `
//         }
//       }).then(data => { return data.data.data.descriptions })

//       context.commit('setProducts', products)
//       context.commit('setComments', comments)
//       context.commit('setDescriptions', descriptions)
//     },

//     register (context) {
//       const auth = getAuth()
//       createUserWithEmailAndPassword(auth, context.state.registerMail, context.state.registerPassword)
//         .then((userCredential) => {
//           // Giriş yapıldı
//           const user = userCredential.user
//           context.state.userMail = context.state.registerMail
//           context.dispatch('onLogin', user)
//         })
//         .catch((error) => {
//           const errorMessage = error.message
//           alert(errorMessage)
//         })
//     },

//     login (context) {
//       const auth = getAuth()
//       signInWithEmailAndPassword(auth, context.state.loginMail, context.state.loginPassword)
//         .then((userCredential) => {
//           // Giriş Yapıldı
//           const user = userCredential.user
//           context.state.userMail = context.state.loginMail
//           context.dispatch('onLogin', user)
//         })
//         .catch((error) => {
//           const errorMessage = error.message
//           alert(errorMessage)
//         })
//     },

//     onLogin (context, user) {
//       context.state.cart = []
//       context.state.user = user
//       context.dispatch('setUserCart')
//       context.dispatch('selectPage', 'home')
//       router.push('/')
//     }
//   },
//   getters: {
//     listingTotal: (state) => (id) => {
//       if (state.cart.find(listing => listing.id === id) !== undefined ) {
//         // return state.cart.filter(c => c.id === id)[0].count * state.products.filter(p => p.id === id)[0].discountedPrice
//         return state.cart.find(c => c.id === id).count * state.products.find(p => p.id === id).discountedPrice
//       }
//       return -1
//     },
//     cartTotal: state => {
//       var total = 0
//       state.cart.forEach(listing => {
//         total += listing.count * state.products.find(p => p.id === listing.id).discountedPrice
//       })
//       return total
//     },

//     returnProductName: (state) => (id) => {
//       return state.products.find(p => p.id === id).productName
//     },

//     selectedProduct: state => {
//       return state.products.find(p => p.id === state.selectedProduct)
//     },

//     reviewCount: state => {
//       return state.comments.filter(c => c.id === state.selectedProduct).length
//     },

//     currentReviews: state => {
//       return state.comments.filter(c => c.id === state.selectedProduct)
//     },

//     currentDescription: state => {
//       return state.descriptions.find(d => d.id === state.selectedProduct)
//     },

//     productsInCart: state => {
//       var products = []
//       var cart = state.cart
//       cart.forEach(listing => {
//         var id = listing.id
//         products.push({ product: state.products.find(p => p.id === id), count: listing.count })
//       })
//       return products
//     },

//     cartEmpty: state => {
//       var cart = state.cart
//       if (cart.length === 0) {
//         return true
//       } else {
//         return false
//       }
//     }
//   },
//   modules: {
//   }
// })
