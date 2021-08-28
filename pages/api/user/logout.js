import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
  if(req.method==="POST")
  {
    try
    {
        await cors(req, res)
        const logout= FactoryLogic.getLUser().logout();
        return res.send(logout);
    }
    catch (error) {
      return res.status(500).send("Could not logout "+error.message);
    }
}
}