import cors from "../../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
 if(req.method==="POST")
  {
    try
    {
        await cors(req, res)
        const {pidcard} = req.query;
        const getcustomer=await FactoryLogic.getLUser().getUser(pidcard);
        const saveOrder=await FactoryLogic.getLOrder().saveOrder(getcustomer);
        return res.send(saveOrder);
    }
    catch (error) {
      return res.status(500).send("Could not save order "+error.message);
    }
  }
}