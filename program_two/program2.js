const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

app.listen(port, () => {
    console.log(Server running at http://localhost:${port});
});


app.get('/categories/:categoryname/products', (request, response) => {

    const { categoryname } = request.params;
    const { top, minPrice, maxPrice, sort, page } = request.query;


    const products = FETCHTOPPROD(categoryname, top, minPrice, maxPrice, sort, page);

    response.json(products);
});

app.get('/categories/:categoryname/products', (request, response) => {
    
    const { categoryname, productid } = request.params;

    const product = FETCHPROid(categoryname, productid);

    response.json(product);
});





function FETCHTOPPROD(categoryname, top, minPrice, maxPrice, sort, page) {
    
    const dUMMYresponse = [
        {
            productName: 'Product 1',
            price: 100,
            rating: 4.5,
            discount: 10,
            availability: 'yes',
            productId: 'unique-id-1'
        },
    ];

    return dUMMYresponse;
}


function FETCHPROid(categoryname, productid) {

    const dummyProduct = {
        productName: 'Product 1',
        price: 100,
        rating: 4.5,
        discount: 10,
        availability: 'yes',
        productId: productid 
    };

    return dummyProduct;
}