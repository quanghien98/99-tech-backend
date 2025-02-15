import Resource from "./../models/resource";

export class ResourceService {
  static async createResource(data: Omit<Resource, 'id'>) {
    return await Resource.create(data);
  }

  static async getAllResources() {
    return await Resource.findAll();
  }

  static async getResourceById(id: number) {
    return await Resource.findByPk(id);
  }

  static async updateResource(id: number, data: Partial<Resource>) {
    const resource = await Resource.findByPk(id);
    if (!resource) throw new Error(`Resource ${id} not found`);
    return await resource.update(data);
  }

  static async deleteResource(id: number) {
    return await Resource.destroy({ where: { id } });
  }
}

export default ResourceService;
