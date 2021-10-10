import { instance } from './api';

export const categoriesApi = {
  getCategories(page) {
    return instance.get(`/categories${page ? `/?${page}` : '/'}`)
      .then(res => res.data)
  },
  createCategories(slug, title) {
    return instance.post(`/categories/`, {slug, title})
      .then(res => res.data)
  },
  getCategory(slug) {
    return instance.get(`/categories/${slug}/`)
      .then(res => res.data)
  },
  editCategory(title, slug) {
    return instance.put(`/categories/`, {
      title,
      slug
    })
  },
  updateCategory(title, slug) {
    return instance.patch(`/categories/`, {
      title,
      slug
    })
  },
  deleteCart(id) {
    return instance.delete(`/categories/${id}`)
  }
}
