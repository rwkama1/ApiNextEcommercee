# APIREST NextJS E-commerce

## Content

1. [Admin](#Admin)
2. [Customer](#Customer)
3. [Category](#Category)
4. [Article](#Article)
4. [User](#User)
5. [Order](#Order)


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



### CUSTOMER

#### GET

 https://api-next-ecommercee.vercel.app/api/customer/customer

#### POST

https://api-next-ecommercee.vercel.app/api/customer/customer

Body-raw-JSON

{

    "idcard":"457852",

    "name":"name",

    "password":"password",

    "username":"username",

    "address":"address",

    "creditcard":"creditcard",

}

#### PUT

https://api-next-ecommercee.vercel.app/api/customer/customer

Body-raw-JSON

{

    "idcard":"457852",

    "name":"name",

    "password":"password",

    "username":"username",

    "address":"address",

    "creditcard":"creditcard",

}

#### DELETE

 https://api-next-ecommercee.vercel.app/api/customer/customer

Body-raw-JSON

{  

    "idcard":"457852"

}


### CATEGORY

#### GET

 https://api-next-ecommercee.vercel.app/api/category/category?pname=Almacenamiento

#### POST

 https://api-next-ecommercee.vercel.app/api/category/category

Body-raw-JSON

{

    "name":"name",

    "description":"description"

}

#### PUT

 https://api-next-ecommercee.vercel.app/api/category/category

Body-raw-JSON

{

    "name":"name",

    "description":"description"

}


#### DELETE

 https://api-next-ecommercee.vercel.app/api/category/category

Body-raw-JSON

{

    "name":"name",

    "description":""

}

#### Get Categories (GET)

https://api-next-ecommercee.vercel.app/api/category/getcategories

#### Get Categories by Name (GET)

https://api-next-ecommercee.vercel.app/api/category/getcategoriesbyname?pname=C

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
 #### Filter Articles by Category (POST)

https://api-next-ecommercee.vercel.app/api/article/filterarticlesbycategory

Body-raw-JSON

{  

 "categoryname":"Monitor"

}

 #### Get Articles (GET)

https://api-next-ecommercee.vercel.app/api/article/getarticles

 #### Get Articles by Name (GET)

https://api-next-ecommercee.vercel.app/api/article/getarticlesbyname?pname=Router


 #### Order Articles by Category (GET)

https://api-next-ecommercee.vercel.app/api/article/orderarticlesbycategory

 #### Order Articles by Price (GET)

https://api-next-ecommercee.vercel.app/api/article/orderarticlesbyprice

 #### Register Stock (POST)

https://api-next-ecommercee.vercel.app/api/article/registerstock

Body-raw-JSON

{  

 "barcode":"1235468",
 "stock":20

}
### USER  

#### GET

https://api-next-ecommercee.vercel.app/api/user/user?pidcard=72289541

#### POST

https://api-next-ecommercee.vercel.app/api/user/user?pusername=Admin3&ppassword=Admin3

### ORDER  

#### Start Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/startorder

#### Register Item Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/registeritemorder

Body-raw-JSON

{

    "barcode":"152345688789546",
    "quantity":1

}
#### Close Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/closeorder

#### Save Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/saveorder?pidcard=72289541

#### Deliver Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/deliverorder?pid=54654654

#### Remove Item Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/removeitemonorder

Body-raw-JSON

{

    "barcode":"152345688789546"
   

}

#### Cancel Order (POST)

https://api-next-ecommercee.vercel.app/api/order/post/cancelorder

#### Get Client Orders (POST)

https://api-next-ecommercee.vercel.app/api/order/get/getclientorders?pidcard=72289541

#### Get Client Orders (GET)

https://api-next-ecommercee.vercel.app/api/order/get/getdeliveredorders

#### Get Order (GET)

https://api-next-ecommercee.vercel.app/api/order/get/getorder?pid=6791169809

#### Get Pending Orders (GET)

https://api-next-ecommercee.vercel.app/api/order/get/getpendingorders

#### Get Orders by Date (POST)

https://api-next-ecommercee.vercel.app/api/order/get/getordersbydate

Body-raw-JSON
{

    "datei": "2021-06-12",
    "datef": "2022-08-22"

}

