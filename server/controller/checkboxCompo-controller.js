import checkboxCompo from "../model/checkboxCompo-schema.js";

export const post_checkboxcompo = async (request, response) => {
  const newcheckboxComp = new checkboxCompo({
    checkboxCompo: request.body.checkboxCompo,
  });
  newcheckboxComp.save(function (error) {
    if (!error) {
      response.send("record inserted successfully!!");
    } else {
      response.send(error);
    }
  });
};

export const get_checkboxcompo = async (request, response) => {
  checkboxCompo.find(function (error, foundbtnCompo) {
    if (!error) {
      response.send(foundbtnCompo);
    } else {
      response.send("No data found !!");
    }
  });
};

export const delete_checkboxcompoById = async (req, res) => {
  try {
    const deletedItem = await checkboxCompo.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).send({ message: "Item not found" });
    }
    res.send(deletedItem);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
