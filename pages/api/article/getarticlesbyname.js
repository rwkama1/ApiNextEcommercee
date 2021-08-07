import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";
export default async function (req, res) {
    if(req.method==="GET")
    {
        const {pname} = req.query;
     
      try
       {
         await cors(req, res)
          const getarticles=await FactoryLogic.getLArticle().getArticlesByNameLetter(pname);
          return res.send(getarticles);
        }
        catch (error) {
          return res.status(500).send("Could not list articles "+error.message);
        }
     }
}
