import cors from "../../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
  if(req.method==="OPTIONS")
  {
    try
    {
        return res.status(200).send("OK")
    }
    catch (error) {
      return res.status(500).send("Could not  "+error.message);
    }
  }
 if(req.method==="POST")
  {
    try
    {
        await cors(req, res)
        const data = req.body;
        const removeitem=await FactoryLogic.getLOrder().removeItemonOrder(data.barcode);
        return res.send(removeitem);
    }
    catch (error) {
      return res.status(500).send("Could not remove item  order "+error.message);
    }
  }
}