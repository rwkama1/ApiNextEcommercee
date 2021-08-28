import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
  if(req.method==="GET")
  {
    try
    {
        await cors(req, res)
        const getuser= FactoryLogic.getLUser().getLoginUser();
        if(getuser===null)
        {
          return res.send("null");
        }
        else
        {
          return res.send(getuser);
        }
       
    }
    catch (error) {
      return res.status(500).send("Could not search login user "+error.message);
    }
}
}