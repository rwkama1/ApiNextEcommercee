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
        let id=Number(pid);
        const getorder=await FactoryLogic.getLOrder().getOrder(id);
        const deliverorder=await FactoryLogic.getLOrder().deliverOrder(getorder);
        return res.send(deliverorder);
    }
    catch (error) {
      return res.status(500).send("Could not deliver order "+error.message);
    }
  }
}