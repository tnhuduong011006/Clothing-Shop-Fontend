import createApiClient from "./api.service";

class TypeService {
    constructor(baseUrl = "/api/types") {
        this.api = createApiClient(baseUrl);
    } 
    async getAll() {
      const response = await this.api.get("/")
      return response.data;
    } 
    async create(data) {
        return (await this.api.post("/", data)).data;
    } 
    async deleteAll() {
        return (await this.api.delete("/")).data;
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

export default new TypeService();