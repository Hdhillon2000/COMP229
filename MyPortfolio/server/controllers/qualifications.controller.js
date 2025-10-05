const Qualification = require('../models/qualifications.model');

exports.getAll = async (req, res) => {
  const qualifications = await Qualification.find();
  res.json(qualifications);
};

exports.create = async (req, res) => {
  const qualification = new Qualification(req.body);
  await qualification.save();
  res.status(201).json(qualification);
};

exports.getById = async (req, res) => {
  const qualification = await Qualification.findById(req.params.id);
  res.json(qualification);
};

exports.update = async (req, res) => {
  const qualification = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(qualification);
};

exports.remove = async (req, res) => {
  await Qualification.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};

exports.removeAll = async (req, res) => {
  await Qualification.deleteMany();
  res.json({ message: 'All qualifications deleted' });
};
