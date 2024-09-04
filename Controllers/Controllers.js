const generateUniqueId = require("generate-unique-id");
const Data = require('../Models/Transaction');

let dataStorage = [];

const DefaultController = async (req, res) => {

    console.log("DEFAULT CONTROLLER");

    const data = await Data.find();

    res.render('index', { Datas: data });

}


const AddDataController = async (req, res) => {

    console.log("ADD DATA CONTROLLER");

    let uniqueId = generateUniqueId({
        length: 4,
        useLetters: false
    })

    console.log("UNIQUE ID : ", uniqueId);

    const dataObj = {
        id: uniqueId,
        type: req.body.type,
        category: req.body.category,
        amount: req.body.amount,
        description: req.body.description,
        date: req.body.date
    }

    console.log("DATA OBJ : ", dataObj);

    const addData = new Data(dataObj);
    await addData.save();
    res.redirect('/');

}

const EditDataController = async (req, res) => {

    console.log("EDIT DATA CONTROLLER");

    console.log("REQ ID : ", req.params.id);

    let {id} = req.params;

    const SingleRecordData = await Data.findOne({_id: id});

    console.log("SINGLE DATA : ", SingleRecordData);

    res.render('editData', SingleRecordData);

}

const UpdatetDataController = async (req, res) => {

    console.log("UPDATE DATA CONTROLLER");

    console.log("REQ ID : ", req.params.id);

    let {id} = req.params;
    let {type} = req.body;
    let {category} = req.body;
    let {amount} = req.body;
    let {description} = req.body;
    let {date} = req.body;

    const UpadateData = await Data.findByIdAndUpdate({_id: id}, {type, category, amount, description, date}, {new: true});

    console.log("UPDATE DATA : ", UpadateData);

    res.redirect('/');

}

const DeleteDataController = async (req,res) => {

    console.log("DELETE DATA CONTROLER");

    console.log("REQ ID : ", req.params.id);

    let { id } = req.params;

    const data = await Data.findByIdAndDelete({_id: id});
    
    console.log("DATA DATA : ", data);
    
    res.redirect('/');

}

module.exports = {DefaultController, AddDataController, EditDataController, UpdatetDataController, DeleteDataController};








