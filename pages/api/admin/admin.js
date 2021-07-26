import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";
import { Administrator } from "e-commercee/ECommerce/dist/shared/entity/Administrator";

export default async function (req, res) 
{
  if(req.method==="GET")
  {
    try
    {
        await cors(req, res)
        const getadmin=await FactoryLogic.getLUser().getAdmins();
        return res.send(getadmin);
    }
    catch (error) {
      return res.status(500).send("Could not list admin "+error.message);
    }
  }
  if(req.method==="POST")
  {
    await cors(req, res)
    try
    {
    const data = req.body;
    var admin=new Administrator(data.idcard,data.name,data.password,data.username,data.position);
    await FactoryLogic.getLUser().addUser(admin);
    return res.status(200).send("Success");   
    }
    catch (error) {
      return res.status(500).send("Could not add admin: "+error.message);    
      
    }
  }
  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
    const data = req.body;
    var admin=new Administrator(data.idcard,data.name,data.password,data.username,data.position);
    await FactoryLogic.getLUser().updateUser(admin);
    return res.status(200).send("Success");   
    }
    catch (error) {
      return res.status(500).send("Could not update admin: "+error.message);    
      
    }
  }
  if(req.method==="DELETE")
  {
    try
    {
    await cors(req, res)
    const data = req.body;
    const admin=new Administrator(data.idcard,"","","","");
    await FactoryLogic.getLUser().deleteUser(admin);
    return res.status(200).send("Success");
    }
    catch (error) {
      return res.status(500).send("Could not delete admin: "+error.message);
    }
  }
}