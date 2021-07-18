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
// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({"name":"D"});

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("localhost:3000/api/article/getarticlesbyname", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));