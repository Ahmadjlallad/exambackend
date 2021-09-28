const axios = require("axios");
const FruitModel = require("./FruiteModel");
const getAllFruit = async (req, res) => {
  try {
    const allFruit = await axios.get(
      `https://fruit-api-301.herokuapp.com/getFruit`
    );
    res.send(allFruit.data);
  } catch (e) {
    res.send(e);
  }
};
const GetUserFruit = async (req, res) => {
  console.log(req.query.email);
  try {
    const userFruit = await FruitModel.find({ email: req.query.email });

    res.send(userFruit);
  } catch (e) {
    res.send(e);
  }
};
const createUserFruit = async (req, res) => {
  try {
    await FruitModel.create(req.body);
    res.send("Fruit Created");
  } catch (e) {
    res.send(e);
  }
};
const deleteUserFruit = async (req, res) => {
  try {
    await FruitModel.findByIdAndRemove(req.params.id);
    res.send("Fruit deleted");
  } catch (e) {
    res.send(e);
  }
};
const updateUserFruit = async (req, res) => {
  try {
    await FruitModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("Fruit Updated");
  } catch (e) {
    res.send(e);
  }
};

module.exports = {
  getAllFruit,
  GetUserFruit,
  createUserFruit,
  deleteUserFruit,
  updateUserFruit,
};
