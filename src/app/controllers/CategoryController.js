const CategoryRepository = require('../repositories/CategoryRepository')

class CategoryController{
  async index(request, response){

    const category = await CategoryRepository.findAll()

    response.json(category);
  }

 async store(request, response){
    const {name} = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoryRepository.create({name})

    response.status(200).json(category);
  }

  async delete(request, response){
    const {id} = request.params;

    const category = await CategoryRepository.delete({id})

    response.status(200).json(category);
  }
}

module.exports = new CategoryController();
