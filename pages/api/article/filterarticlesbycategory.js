import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";
export default async function (req, res) {
    if(req.method==="POST")
    {
      try
       {
         await cors(req, res)
         const data = req.body;
          const getarticles=await FactoryLogic.getLArticle().filterArticlesbyCategory(data.categoryname);
          return res.send(getarticles);
        }
        catch (error) {
          return res.status(500).send("Could not list articles "+error.message);
        }
     }
}