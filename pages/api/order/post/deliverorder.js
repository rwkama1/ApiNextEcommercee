import cors from "../../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
 if(req.method==="POST")
  {
    try
    {
        await cors(req, res)
        const {pid} = req.query;
        const getorder=await FactoryLogic.getLUser().getOrder(pid);
        const deliverorder=await FactoryLogic.getLOrder().deliverOrder(getorder);
        return res.send(deliverorder);
    }
    catch (error) {
      return res.status(500).send("Could not close order "+error.message);
    }
  }
}