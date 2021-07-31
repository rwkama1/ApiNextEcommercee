import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
 if(req.method==="POST")
  {
    try
    {
        await cors(req, res)
        const cancelorder=await FactoryLogic.getLOrder().cancelOrder();
        return res.send(cancelorder);
    }
    catch (error) {
      return res.status(500).send("Could not cancel order "+error.message);
    }
  }
}