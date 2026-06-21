const noteModel = require("../models/noteModel");

const noteByTag = async (req, res) => {

    const { tag } = req.params;

    const result =
    await noteModel.aggregate([

        {
            $match:{
                tags: tag
            }
        }

    ]);

    res.status(200).json({
        success:true,
        result
    });

}

module.exports = {noteByTag}