# Test
 
## Dish API
### Description:
Dish API is a REST API which can operate basic GET, POST, PUT, DELETE operations to Create, Read, Update and Delete (CRUD) on MongoDB Server.

### Setup:
To run this project, install it locally using npm:
```
$ npm install
$ npm start
```

### EndPoints:

* /dishes (GET, POST, DELETE)
* /dishes/:dishId (GET, PUT, DELETE)
* /dishes/:dishId/comments (GET, POST, DELETE)
* /dishes/:dishId/comments/:commentId (GET, PUT, DELETE)

### JSON Schema

```
${
$    "name": "Pizza",
$    "description": "An Italian Dish",
$    "image": "http://dishbackend.com/pizza.jpg",
$    "category": "Fast Food",
$    "label": "Delicious",
$    "price": "12",
$    "comments": [
$        {
$            "rating": "4.7",
$            "comment": "Delicious",
$            "author": "Ragnar Lothbrok"
$        },
$        {
$            "rating": "4.8",
$            "comment": "Delicious",
$            "author": "Jon Snow"
$        }
$    ]
$}
```