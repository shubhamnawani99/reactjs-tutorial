import express from 'express';

const app = express();

const products = [
    {
        id: 1,
        name: 'Airpods Wireless Bluetooth Headphones',
        price: 89.99,
        image: 'https://res.cloudinary.com/dk88/image/upload/v1608582431/airpods_x9vq3k.jpg',
    },
    {
        id: 2,
        name: 'iPhone 11 Pro 256GB Memory',
        price: 599.99,
        image: 'https://res.cloudinary.com/dk88/image/upload/v1608582431/iphone11_xk2z1p.jpg',
    },
    {
        id: 3,
        name: 'Canon EOS 80D DSLR Camera',
        price: 929.99,
        image: 'https://res.cloudinary.com/dk88/image/upload/v1608582431/camera_eyxv6k.jpg',
    },
    {
        id: 4,
        name: 'Sony Playstation 4 Pro White Version',
        price: 399.99,
        image: 'https://res.cloudinary.com/dk88/image/upload/v1608582431/playstation_x9vq3k.jpg',
    }
]

app.get('/api/products', (req, res) => {    

    // how to handle query params
    if (req.query.search) {
        res.send(products.filter((product) => product.name.toLowerCase().includes(req.query.search.toLowerCase())));
        return;
    }
    setTimeout(() => {
        res.send(products);
    }, 2000);
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});