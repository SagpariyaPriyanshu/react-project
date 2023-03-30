import mongoose from 'mongoose';

const btnCompoSchema = new mongoose.Schema({
    btnCompo: {type:String},
});

const btnCompo = mongoose.model('btncompo', btnCompoSchema);

export default btnCompo;