import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";
export default async function (req, res) {
    if(req.method==="GET")
    {
      try
       {
         await cors(req, res)
         const {pname} = req.query;
          const getarticles=await FactoryLogic.getLArticle().filterArticlesbyCategory(pname);
          return res.send(getarticles);
        }
        catch (error) {
          return res.status(500).send("Could not list articles "+error.message);
        }
     }
}