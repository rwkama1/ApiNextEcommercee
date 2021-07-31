import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
 if(req.method==="POST")
  {
    try
    {
        await cors(req, res)
        
        const closeorder=await FactoryLogic.getLOrder().closeOrder();
        return res.send(closeorder);
    }
    catch (error) {
      return res.status(500).send("Could not close order "+error.message);
    }
  }
}