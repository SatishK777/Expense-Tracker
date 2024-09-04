
const mongoose = require('mongoose');

const dataSchema = mongoose.Schema({
    type:{ 
        type: String, 
        required: true 
    },
    category:{ 
        type: String,
        required: true 
    },
    amount:{ 
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{ 
        type: Date, 
        default: Date.now,
        required: true
    },
  }
)

const Data = mongoose.model("Data", dataSchema);

module.exports = Data;








