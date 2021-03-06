import http from '../config/config'


const getProducts = (data) => http.get('/product')
const deleteProducts = (id) => http.delete(`/product/${id}`)
const postProducts = (data, config = {}) => http.post('/product', data, config)
const patchProducts = (id, data, config = {}) => http.patch(`/product/${id}`, data, config)

// Category verbs
const getCategory = (data) => http.get('/category')
const deleteCategory = (id) => http.delete(`/category/${id}`)
const postCategory = (data) => http.post('/category', data)
const patchCategory = (id, data) => http.patch(`/category/${id}`, data)

export {
    getProducts,
    getCategory,
    deleteCategory,
    postCategory,
    patchCategory,
    deleteProducts,
    postProducts,
    patchProducts
}