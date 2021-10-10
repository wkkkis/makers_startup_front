import { instance } from './api';

export const cartApi = {
  getCarts(page) {
    return instance.get(`/cart/?${page}`)
      .then(res => res.data)
  },
  getCart(id) {
    return instance.get(`/cart/${id}`)
      .then(res => res.data)
  },
  updateCart(id, items) {
    return instance.patch(`/cart/${id}`, items)
      .then(res => res.data)
  },
  editCart(id) {
    return instance.get(`/cart/`, id)
      .then(res => res.data)
  },
  deleteCart(id) {
    return instance.delete(`/cart/${id}`)
  }
}
