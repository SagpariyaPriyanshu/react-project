import mongoose from 'mongoose';

const checkboxCompoSchema = new mongoose.Schema({
    checkboxCompo: {type:String},
});

const checkboxCompo = mongoose.model('checkboxcompo', checkboxCompoSchema);

export default checkboxCompo;