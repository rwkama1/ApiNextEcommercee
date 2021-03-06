import cors from "../../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";


export default async function (req, res) 
{
 if(req.method==="POST")
  {
    
    try
    {
        await cors(req, res)
        const data = req.body;
        let date1=new Date(data.datei);
        let date2=new Date(data.datef);
        const getOrder=await FactoryLogic.getLOrder().getOrdersbyDates(date1,date2);
        return res.send(getOrder);
    }
    catch (error) {
      return res.status(500).send("Could not list orders "+error.message);
    }
  }
}