const SingleProduct = ({product, handleCart}) => {
  // console.log(product)
  return (
        <div className="">
         <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full"
                src={product.photo}
              />
            </figure>
            <div className="card-body text-center">
              <h2 className="card-title ">{product.name}</h2>
              <p>{product.description.slice(0,90)}</p>

              <div className="card-actions justify-center">
                <p className="text-center">{product.price} $</p>
                <button onClick={() => handleCart (product)} className="btn btn-primary w-[250px]">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
  );
};

export default SingleProduct;
