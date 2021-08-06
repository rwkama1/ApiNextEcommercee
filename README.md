# APIREST NextJS E-commerce

## Usage

### ADMIN

#### GET

 https://api-next-ecommercee.vercel.app/api/admin/admin

#### POST

https://api-next-ecommercee.vercel.app/api/admin/admin

Body-raw-JSON

{

    "idcard":"457852",

    "name":"name",

    "password":"password",

    "username":"username",

    "position":"position"

}

#### PUT

https://api-next-ecommercee.vercel.app/api/admin/admin

Body-raw-JSON

{
    
    "idcard":"457852",

    "name":"name",

    "password":"password",

    "username":"username",

    "position":"position"
}


#### DELETE

 https://api-next-ecommercee.vercel.app/api/admin/admin

Body-raw-JSON

{  

    "idcard":"457852"

}

### ARTICLE  

#### GET

https://api-next-ecommercee.vercel.app/api/article/article?pbarcode=12345678909898

#### POST

https://api-next-ecommercee.vercel.app/api/article/article

Body-raw-JSON

{

    "categoryname":"categorynameexist",

    "barcode":"1568789",

    "name":"name",

    "price":80,

    "stock":20,

    "description":"description",

    "img":"imgurl"

}

#### PUT

https://api-next-ecommercee.vercel.app/api/article/article

Body-raw-JSON

{

    "categoryname":"categorynameexist",

    "barcode":"1568789",

    "name":"name",

    "price":80,

    "stock":20,

    "description":"description",

    "img":"imgurl"

}

#### DELETE

 https://api-next-ecommercee.vercel.app/api/article/article

Body-raw-JSON

{  

    "barcode":"1568789"

}

