const { User, Address } = require("../../database/models/index");

const updateAddress = async (req, res) => {
  try {
    await Address.update(
      {
        Province: req.body.Province,
        District: req.body.District,
        Cell: req.body.Cell,
        Street: req.body.Street,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.status(200).send("Address Updated")
  } catch (error) {
    return res.status(400).send(error);
  }
};

export default updateAddress