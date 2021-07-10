import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";
import { Category } from "e-commercee/ECommerce/dist/shared/entity/Category";
export default async function (req, res) {
    if(req.method==="GET")
    {
            try
            {
         await cors(req, res)
         const {pname} = req.query;
          const getcategory=await FactoryLogic.getLCategory().getCategory(pname);
          return res.send(getcategory);
        }
        catch (error) {
          return res.status(500).send("Could not search category "+error.message);
        }
     }
     
      if(req.method==="POST")
      {
        await cors(req, res)
        try
        {
        const data = req.body;
        const dtcat=new Category(data.name,data.description);
        await FactoryLogic.getLCategory().addCategory(dtcat);
        return res.status(200).send("Success");
        }
        catch (error) {
          return res.status(500).send("Could not add category: "+error.message);
        }
      }
      if(req.method==="PUT")
      {
        await cors(req, res)
        try
        {
        const data = req.body;
        const dtcat=new Category(data.name,data.description);
        await FactoryLogic.getLCategory().updateCategory(dtcat);
        return res.status(200).send("Success");
        }
        catch (error) {
          return res.status(500).send("Could not update category: "+error.message);
        }
      }
      if(req.method==="DELETE")
      {
        await cors(req, res)
        try
        {
        const data = req.body;
        const dtcat=new Category(data.name,data.description);
        await FactoryLogic.getLCategory().deleteCategory(dtcat);
        return res.status(200).send("Success");
        }
        catch (error) {
          return res.status(500).send("Could not delete category: "+error.message);
        }
      }
}