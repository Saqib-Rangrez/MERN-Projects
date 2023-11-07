// import the model
const Todo = require("../models/Todo");

// define route handler 
exports.deleteTodo = async (req, res) => {
    try {
        // fetching id from request url
        // Method - 1
        // const id = req.params.id;
        // Method - 2 
        const { id } = req.params;

        const todo = await Todo.findByIdAndDelete({_id:id});

        res.status(200).json({
            success : true,
            message : "Todo Deleted Successfully",
        })

    }
    catch (error) {
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success : false,
            data : "internal server error",
            message : error.message,
        })
    }
}