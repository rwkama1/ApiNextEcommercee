import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";
export default async function (req, res) {
    if(req.method==="GET")
    {
            try
            {
         await cors(req, res)
        
          const getcategory=await FactoryLogic.getLCategory().getCategories();
          return res.send(getcategory);
        }
        catch (error) {
          return res.status(500).send("Could not list categories "+error.message);
        }
     }
}