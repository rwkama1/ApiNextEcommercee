import cors from "../cors";
import { FactoryLogic } from "e-commercee/ECommerce/dist/logic/FactoryLogic";
export default async function (req, res) {
    if(req.method==="GET")
    {
            try
            {
         await cors(req, res)
        
          const getarticles=await FactoryLogic.getLArticle().getArticles();
          return res.send(getarticles);
        }
        catch (error) {
          return res.status(500).send("Could not list articles "+error.message);
        }
     }
}
// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };

// fetch("localhost:3000/api/article/getarticlesbyname?pname=D", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));