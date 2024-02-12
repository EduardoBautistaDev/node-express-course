const express = require('express');
const app = express();
const {products} = require('./data.js')

app.get('/',(req,res)=>{
    res.send('<h1>home page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req,res) => {
    const newProducts = products.map((product)=>{
        const {id, name, image} = product;
        return {id, name, image}
    })

    res.json(products)
})

app.get('/api/products/:productID', (req,res) => {
    const {productID} = req.params
    const singleProduct = products.find((product)=>product.id === Number(productID));
    if(!singleProduct){
        return res.send('Product does not exist')
    }
    return res.json(singleProduct)

})
app.listen(5001,()=>{
    console.log('listening in port 5001')
})