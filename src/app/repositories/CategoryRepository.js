const db = require('../../database/index')

class CategoryRepository {
  async findAll(){
    const row = await db.query(`SELECT *  FROM categories ORDER BY name`)

    return row;
  }

  async create({name}){
    const [row] = await db.query(`INSERT INTO categories (name)
    VALUES  ($1)
    RETURNING *
    `, [name])

    return row;
  }

  async delete({id}){
    const [row] = await db.query(`DELETE FROM categories WHERE id = $1`, [id])

    return row;
  }
}




module.exports = new CategoryRepository();
