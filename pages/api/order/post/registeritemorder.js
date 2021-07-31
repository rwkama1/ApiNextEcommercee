import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
 if(req.method==="POST")
  {
    try
    {
        await cors(req, res)
        const data = req.body;
        const registeritem=await FactoryLogic.getLOrder().registerItemonOrder(data.barcode,data.quantity);
        return res.send(registeritem);
    }
    catch (error) {
      return res.status(500).send("Could not register order "+error.message);
    }
  }
}