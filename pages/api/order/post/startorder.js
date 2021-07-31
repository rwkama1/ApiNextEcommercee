import cors from "../../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
 if(req.method==="POST")
  {
    try
    {
        await cors(req, res)
        const startorder=await FactoryLogic.getLOrder().startOrder();
        return res.send(startorder);
    }
    catch (error) {
      return res.status(500).send("Could not start order "+error.message);
    }
  }
}