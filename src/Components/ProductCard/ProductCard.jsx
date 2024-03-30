import { Link, Navigate } from "react-router-dom";

const ProductCard = ({data}) => {
  return (
    <div className="md:grid md:grid-cols-2 lg:grid-cols-4 ">
      {data.length > 0
        ? data.map((el) => {
            return (
              <Link key={el._id} to={`/product/${el._id}`}>
              <div
                className="w-[250px] h-[350px] m-5 rounded-xl shadow-xl bg-yellow-300"
                
              >
                <div className="mb-5">
                  <img
                    src={el.imgpath}
                    alt=""
                    className="w-[200px] max-h-[200px] m-auto p-5"
                  />
                </div>
                <div className="p-5 bg-yellow-200 rounded-2xl">
                  <p className="text-2xl">{el.name}</p>
                  <p className="text-sm">{el.category}</p>
                  <div className="flex justify-around mt-5">
                    <p className="text-zinc-400">{el.orgprice}</p>
                    <p>{el.sellprice}</p>
                  </div>
                </div>
              </div>
              </Link>
            );
          })
        : ""}
    </div>
  );
};

export default ProductCard;
