import createApiClient from "./api.service";

class ProductService {
    constructor(baseUrl = "/api/products") {
        this.api = createApiClient(baseUrl);
    } 
    async getAll() {
      const response = await this.api.get("/")
      return response.data;
    }
    async getByName(name) {
      const response = await this.api.get(`?name=${name}`)
      return response.data;
    }
    async getIndex(name) {
      // find by index
      const response = await this.api.get(`?textsearch=${name}`)
      return response.data;
    }
    async getByTypeID(typeid) {
      const response = await this.api.get(`?typeid=${typeid}`)
      return response.data;
    }  
    async create(data) {
        return (await this.api.post("/", data)).data;
    } 
    async deleteAllByType(typeid) {
        return (await this.api.delete(`?typeid=${typeid}`)).data;
    } 
    async get(id) {
        return (await this.api.get(`/${id}`)).data;
    } 
    async update(id, data) {
        return (await this.api.post(`/${id}`, data)).data;
    } 
    async delete(id) {
        return (await this.api.delete(`/${id}`)).data;
    }
}

export default new ProductService();