import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res,session) 
{
  
  if(req.method==="POST")
  {
    await cors(req, res)
    try
    {
        req.session.destroy();
        res.send("Logged out");; 
    }
    catch (error) {
      return res.status(500).send("Could not logout user: "+error.message);    
      
    }
  }

}