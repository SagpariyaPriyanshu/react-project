import btnCompo from '../model/btnCompo-schema.js';


export const post_btncompo = async (request,response)=>{ 
    const newbtnComp = new btnCompo({
       btnCompo:request.body.btnCompo
   })
   newbtnComp.save(function (error) {
       if(!error){
           response.send("record inserted successfully!!")
       }else{
           response.send(error); 
       }
   })
}

export const get_btncompo = async (request,response)=>{ 
    btnCompo.find(function(error,foundbtnCompo){
        if(!error){
            response.send(foundbtnCompo);
        }
        else{
            response.send("No data found !!")
        }
    });  
}

export const delete_btncompoById = async (req, res)=>{
    try {
        const deletedItem = await btnCompo.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
          return res.status(404).send({ message: 'Item not found' });
        }
        res.send(deletedItem);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
}