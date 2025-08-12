import Item from '../models/Item.js';

// GET all items
export const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST add new item
export const addItem = async (req, res) => {
  console.log("POST /items body:", req.body);
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const getItemsByCase = async (req, res) => {
  const caseId = parseInt(req.params.caseId);
  if (isNaN(caseId)) {
    return res.status(400).json({ error: 'Invalid case ID' });
  }
  try {
    const items = await Item.find({ case: caseId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




// PUT update item by ID
export const updateItem = async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE item by ID
export const deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
