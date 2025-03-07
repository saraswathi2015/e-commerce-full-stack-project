import foodModel from "../models/foodModel.js";
import fs from "fs";

//add food
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.description,
    image: image_filename,
  });
  try {
    await food.save();
    res.status(200).json({
      success: true,
      message: "Food Added",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

//List food
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.status(200).json({ success: true, count: foods.length, data: foods });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ success: false, message: "Error" });
  }
};

//remove food
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`, () => {});

    await foodModel.findByIdAndDelete(req.body.id);
    res.status(200).json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ success: false, message: "error.message" });
  }
};

export { addFood, listFood, removeFood };
