import { instance } from './api';

export const productsApi = {
  getProducts(page) {
    return instance.get(`/products${page ? `/?page=${page}` : '/'}`)
      .then(res => res.data)
  },
  createProduct(title, description, price, amount, status, category) {
    return instance.post(`/categories/`, {
      title,
      description,
      price,
      amount,
      status,
      category
    })
      .then(res => res.data)
  },
  getProduct(id) {
    return instance.get(`/products/${id}/`)
      .then(res => res.data)
  },
  editCategory(id, title, description, price, amount, status, category) {
    return instance.put(`/products/${id}/`, {
      title,
      description,
      price,
      amount,
      status,
      category
    })
  },
  updateCategory(id, title, description, price, amount, status, category) {
    return instance.patch(`/products/${id}/`, {
      title,
      description,
      price,
      amount,
      status,
      category
    })
  },
  deleteCart(id) {
    return instance.delete(`/categories/${id}/`)
  }
}
