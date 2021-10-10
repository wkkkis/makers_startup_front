import { instance } from './api';

export const commentsApi = {
  getComments(page) {
    return instance.get(`/comments/?${page}`)
      .then(res => res.data)
  },
  createComment(body, product) {
    return instance.post(`/comments/`, {
      body,
      product
    })
      .then(res => res.data)
  },
  getComment(id) {
    return instance.get(`/comments/${id}/`)
      .then(res => res.data)
  },
  editComment(id, body, product) {
    return instance.put(`/comments/${id}/`, {
      body,
      product
    })
  },
  updateCategory(id, body, product) {
    return instance.patch(`/comments/${id}/`, {
      body,
      product
    })
  },
  deleteCart(id) {
    return instance.delete(`/comments/${id}/`)
  }
}
