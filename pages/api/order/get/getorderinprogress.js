import cors from "../../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
    if(req.method==="GET")
  {
    try
    {

        await cors(req, res)
        const getOrder= FactoryLogic.getLOrder().order;
        return res.send(getOrder);
    }
    catch (error) {
      return res.status(500).send("Could not search order "+error.message);
    }
  }
}