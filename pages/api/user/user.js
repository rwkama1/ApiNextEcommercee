import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
  if(req.method==="GET")
  {
    try
    {
        await cors(req, res)
        const {pidcard} = req.query;
        const getadmin=await FactoryLogic.getLUser().getUser(pidcard);
        return res.send(getadmin);
    }
    catch (error) {
      return res.status(500).send("Could not search user "+error.message);
    }
  }
  if(req.method==="POST")
  {
    await cors(req, res)
    try
    {
     const {pusername,ppassword} = req.query;
        const getadmin=await FactoryLogic.getLUser().loginUser(pusername,ppassword);
        if(getadmin===null)
        {
         return res.send("null"); 
        }
        else
        {
          return res.send(getadmin); 
        }
   
    }
    catch (error) {
      return res.status(500).send("Could not login user: "+error.message);    
      
    }
  }

}