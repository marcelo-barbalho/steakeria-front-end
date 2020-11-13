import http from '../config/config'

const getProducts = (data) => http.get('/product')

const getCategory = (data) => http.get('/category')
const deleteCategory = (id) => http.delete(`/category/${id}`)
const postCategory = (data) => http.post('/category', data)
const patchCategory = (id, data) => http.patch(`/category/${id}`, data)

export {
    getProducts,
    getCategory,
    deleteCategory,
    postCategory,
    patchCategory
}