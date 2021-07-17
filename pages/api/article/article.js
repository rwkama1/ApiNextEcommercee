 import cors from "../cors";
 import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";
 import { Article } from "e-commercee/ECommerce/dist/shared/entity/Article";
 
export default async function (req, res) {
    if(req.method==="GET")
    {
        try
        {
     await cors(req, res)
     const {pbarcode} = req.query;
     
      const getArticle=await FactoryLogic.getLArticle().getArticle(pbarcode);
      return res.send(getArticle);
    }
    catch (error) {
      return res.status(500).send("Could not search article "+error.message);
    }
    }
    if(req.method==="POST")
    {
      await cors(req, res)
      try
      {
      const data = req.body;
      const getcategory=await FactoryLogic.getLCategory().getCategory(data.categoryname);
      var article=new Article(data.barcode,data.name,data.price,data.stock,data.description,data.img,getcategory);
      await FactoryLogic.getLArticle().addArticle(article);
      return res.status(200).send("Success");   
      }
      catch (error) {
        return res.status(500).send("Could not add article: "+error.message);    
        
      }
    }
     if(req.method==="PUT")
        {
            await cors(req, res)
            try
            {
            const data = req.body;
            const getcategory=await FactoryLogic.getLCategory().getCategory(data.categoryname);
            var article=new Article(data.barcode,data.name,data.price,data.stock,data.description,data.img,getcategory);
            await FactoryLogic.getLArticle().updateArticle(article);
            return res.status(200).send("Success");   
            }
            catch (error) {
              return res.status(500).send("Could not update article: "+error.message);    
              
            }
        }
    if(req.method==="DELETE")
        {
                await cors(req, res);
                const data = req.body;
                try
                {
                var article=new Article(data.barcode,"",0,0,"","",null);
                await FactoryLogic.getLArticle().deleteArticle(article);
                return res.status(200).send("Success");   
            }
            catch (error) {
            return res.status(500).send("Could not DELETE article: "+error.message);    
            
            }   
        }
}

