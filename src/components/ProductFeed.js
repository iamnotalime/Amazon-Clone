import Product from "./Product";

function ProductFeed({products}) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {products.slice(0,4).map(({id, title, price, description, category, image}) => (
               <Product
                   key={id}
                   id={id}
                   title={title}
                   price={price}
                   description={description}
                   category={category}
                   image={image}
               />
            ))}
            <img className="md:col-span-full" src="https://th.bing.com/th/id/R.7ddf5183259b51308f933abfe742029b?rik=7rMBWseFfNHVug&riu=http%3a%2f%2fwww.petermorscheck.xyz%2fwp-content%2fuploads%2f2016%2f08%2fDigital-Marketing-image.jpg&ehk=%2b9ebERdJZKlPVpj7Z32wfWaXezEXG2911t2Hfm4rHbE%3d&risl=&pid=ImgRaw&r=0" alt="" />
            <div className="md:col-span-2">
                {products.slice(4,5).map(({id, title, price, description, category, image}) => (
                <Product
                    key={id}
                    id={id}
                    title={title}
                    price={price}
                    description={description}
                    category={category}
                    image={image}
                />
                ))}
            </div>

            {products.slice(5, products.length).map(({id, title, price, description, category, image}) => (
               <Product
                   key={id}
                   id={id}
                   title={title}
                   price={price}
                   description={description}
                   category={category}
                   image={image}
               />
            ))}
        </div>
    );
}

export default ProductFeed;

