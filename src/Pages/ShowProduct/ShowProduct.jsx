import { useEffect, useState } from "react";
import "./ShowProduct.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Loader from "../../Components/Loader/Loader";

const ShowProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setLoading(true)
    getProductData();
  }, []);

  const getProductData = async () => {
    const res = await axios.get(`https://trendzee-server.onrender.com/products/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("error");
    } else {
      setData(res.data.getProducts);
      setLoading(false);
    }
  };
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  return (
    <div className="">
        {
            loading ? (<Loader/>) : (
                <div>
      {data.length > 0
        ? data.map((el) => {
            return (
              <div key={el._id} className=" pt-[50px]">
                <div className="ml-5">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link to={"/products"}>Products</Link>
                  <Link to={`/products/${el.category}`}>{capitalize(el.category)}</Link>
                  <p>{el.name}</p>
                </Breadcrumbs>
                </div>
                <div className="md:grid grid-cols-2">
                  <div className="">
                    <img
                      src={el.imgpath}
                      alt=""
                      className="w-[500px]  m-auto p-5"
                    />
                  </div>
                  <div className="m-10 md:m-auto lato-regular">
                    <h1 className="text-6xl ">{el.name}</h1>
                    <p className="mt-2 text-gray-600">{capitalize(el.category)}</p>
                    <p>{capitalize(el.description)}</p>
                    <p>{el.vendor}</p>
                    <div className="mt-2 flex justify-center">
                      {el.offer ? (
                        <p className="m-5 text-xl dancing-script pt-2 pb-2 pl-5 pr-5 shadow-lg rounded-3xl bg-yellow-200">
                          Offer available!!
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="mt-2 flex justify-center">
                      {el.trend ? (
                        <p className="m-5 text-xl dancing-script pt-2 pb-2 pl-5 pr-5 shadow-lg rounded-3xl bg-yellow-200">
                          Trending product
                        </p>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex justify-around">
                      <div className="">
                        <p className="text-center mb-3">MRP:</p>
                        <del className=" pt-2 pb-2 pl-5 pr-5 shadow-xl rounded-2xl bg-yellow-400">
                          {el.orgprice}
                        </del>
                      </div>
                      <div className="">
                        <p className="text-center mb-2">Sell Price:</p>
                        <p className=" pt-2 pb-2 pl-5 pr-5 shadow-xl rounded-2xl bg-yellow-400">
                          {el.sellprice}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : ""}
    </div>
            )
        }
    </div>

  );
};

export default ShowProduct;
