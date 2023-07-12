const ContactsRepositoty = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepositoty.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepositoty.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: 'User not  found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExist = await ContactsRepositoty.findByEmail(email);

    if (contactExist) {
      return response.status(400).json({ error: 'Contact already exists' });
    }

    const contact = await ContactsRepositoty.create({
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
    //criar novo registro
  }

  async update(request, response) {
    const { id } = request.params;
    const { name, email, phone, category_id } = request.body;

    const contactExist = await ContactsRepositoty.findById(id);

    if (!contactExist) {
      return response.status(404).json({ error: 'User not found' });
    }

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const emailExist = await ContactsRepositoty.findByEmail(email);

    if (emailExist && emailExist.id !== id) {
      return response.status(400).json({ error: 'Contact already exists' });
    }

    const contact = await ContactsRepositoty.update(id, {
      name,
      email,
      phone,
      category_id,
    });

    response.json(contact);
  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepositoty.findById(id);

    if (!contact) {
      // 404: Not Found
      return response.status(404).json({ error: 'User not  found' });
    }

    await ContactsRepositoty.delete(id);

    // 204: No content

    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
