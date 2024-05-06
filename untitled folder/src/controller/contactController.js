const Contact = require('../models/Contact');

exports.addContact = async (req, res) => {
    const { name, phone, email } = req.body;

    try {
        // Check if phone number already exists
        const existingContact = await Contact.findOne({ phone });
        if (existingContact) {
            return res.status(400).json({ error: 'Contact with this phone number already exists' });
        }

        // Create new contact
        const newContact = new Contact({ name, phone, email });
        await newContact.save();

        res.status(201).json({ message: 'Contact added successfully', contact: newContact });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
};
