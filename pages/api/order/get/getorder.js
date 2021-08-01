import cors from "../../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
    if(req.method==="GET")
  {
    try
    {

        await cors(req, res)
        const {pid} = req.query;
        let id=Number(pid);
        const getOrder=await FactoryLogic.getLOrder().getOrder(id);
        return res.send(getOrder);
    }
    catch (error) {
      return res.status(500).send("Could not search orders "+error.message);
    }
  }
}