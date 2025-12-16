import React, {useEffect, useState} from 'react';
import SecondProductBox from "../../ProductBox/SecondProductBox.jsx";
import ProductSkeleton from "../../Skeleton/ProductSkeleton.jsx";

function FavoriteProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://karin-shop-db.onrender.com/products").then(res => res.json()).then(data => setProducts(data)).catch((err) => console.log(err));
    }, [])

    return (
        <div className="">
            {/* ! ================== ! Section TItle ! ================== ! */}
            <h2 className="flex items-center gap-x-1 text-zinc-900 dark:text-zinc-100 md:text-lg font-Dana-DemiBold">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-red-500">
                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>

                محصولات مورد علاقه من:
            </h2>
            {/* ! ================== ! Product Wrapper ! ================== ! */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
                {products.slice(0,4).map(product => (
                    <SecondProductBox key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
}

export default FavoriteProducts;