import http from '../config/config'

const getProducts = (data) => http.get('/product')

const getCategory = (data) => http.get('/category')
const deleteCategory = (id) => http.delete(`/category/${id}`)

export {
    getProducts,
    getCategory,
    deleteCategory
}