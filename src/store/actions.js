import ProductService from "@/services/product.service";

export function searchProductByType({ commit }, keyword) {
  ProductService.getByTypeName(keyword.value)
    .then(({ data }) => {
      debugger;
      commit('setsearchProductByType', data)
    })
}