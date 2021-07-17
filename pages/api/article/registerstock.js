import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";
export default async function (req, res) 
{
    if(req.method==="POST")
    {
      await cors(req, res)
      try
      {
      const data = req.body;
     await FactoryLogic.getLArticle().registerStock(data.barcode,data.stock);
      return res.status(200).send("Success");   
      }
      catch (error) {
        return res.status(500).send("Could not register stock: "+error.message);    
        
      }
    }
}