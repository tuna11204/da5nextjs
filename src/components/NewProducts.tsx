import React from 'react'
import ProductCard from './ProductCard';
const productsData = [
    {
        img:"/image.webp",
        title:"Watches",
        desc:"Pocket Watch Leather Pouch",
        rating:4,
        price:"120.00",
    },
    {
        img:"/image-1.webp",
        title:"Watches",
        desc:"Pocket Watch Leather Pouch",
        rating:4,
        price:"120.00",
    },
    {
        img:"/image-2.webp",
        title:"Watches",
        desc:"Pocket Watch Leather Pouch",
        rating:4,
        price:"120.00",
    },
    {
        img:"/image-3.webp",
        title:"Watches",
        desc:"Pocket Watch Leather Pouch",
        rating:4,
        price:"120.00",
    },
    {
        img:"/image-4.webp",
        title:"Watches",
        desc:"Pocket Watch Leather Pouch",
        rating:4,
        price:"120.00",
    },
    {
        img:"/image-5.webp",
        title:"Watches",
        desc:"Pocket Watch Leather Pouch",
        rating:4,
        price:"120.00",
    },
    {
        img:"/image-6.webp",
        title: "Watches",
        desc: "Pocket Watch Leather Pouch",
        rating: 4,
        price: "120.00",
    },
    
];
const NewProducts = () => {
    return (
        <div>
            <div className='container pt-16'>
                <h2 className='font-medium text-2xl pb-4'>New Products</h2>
                <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-20 xl:gap-y-10'>{productsData.map((item,index)=>
                <ProductCard key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price} />)}</div>
            </div>
        </div>
    )
}

export default NewProducts