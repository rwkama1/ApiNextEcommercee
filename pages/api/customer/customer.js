import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";
import { Client } from "e-commercee/ECommerce/dist/shared/entity/Client";

export default async function (req, res) 
{
  if(req.method==="GET")
  {
    try
    {
        await cors(req, res)
        const getClients=await FactoryLogic.getLUser().getClients();
        return res.send(getClients);
    }
    catch (error) {
      return res.status(500).send("Could not list client "+error.message);
    }
  }
  if(req.method==="POST")
  {
    await cors(req, res)
    try
    {
    const data = req.body;
    var client=new Client(data.idcard,data.name,data.password,data.username,data.address,data.creditcard);
    await FactoryLogic.getLUser().addUser(client);
    return res.status(200).send("Success");   
    }
    catch (error) {
      return res.status(500).send("Could not add client: "+error.message);    
      
    }
  }
  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
    const data = req.body;
    var client=new Client(data.idcard,data.name,data.password,data.username,data.address,data.creditcard);
    await FactoryLogic.getLUser().updateUser(client);
    return res.status(200).send("Success");   
    }
    catch (error) {
      return res.status(500).send("Could not update client: "+error.message);    
      
    }
  }
  if(req.method==="DELETE")
  {
    try
    {
    await cors(req, res)
    const data = req.body;
    const client=new Client(data.idcard,"","","","","");
    await FactoryLogic.getLUser().deleteUser(client);
    return res.status(200).send("Success");
    }
    catch (error) {
      return res.status(500).send("Could not delete client: "+error.message);
    }
  }
}