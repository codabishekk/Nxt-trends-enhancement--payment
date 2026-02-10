// Controller logic for handling requests
exports.getExample = (req, res) => {
  res.status(200).json({message: 'Example controller response'})
}
