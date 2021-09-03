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
        const {pid} = req.query;
        let id=Number(pid);
        const getOrder=await FactoryLogic.getLOrder().getOrder(id);
        const personalorder=await FactoryLogic.getLOrder().personalOrder(getOrder);
        return res.send(personalorder);
    }
    catch (error) {
      return res.status(500).send("Could not deliver order "+error.message);
    }
  }
}