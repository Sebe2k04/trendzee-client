import { useEffect, useState } from "react";
import "./ProductCategory.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Loader from "../../Components/Loader/Loader";

const ProductCategory = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)
  const { category } = useParams();
  useEffect(() => {
    setLoading(true)
    getProductData();
  }, []);

  const getProductData = async () => {
    const res = await axios.get(`https://trendzee-server.onrender.com/products/${category}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("error");
    } else {
      setData(res.data.getProducts);
      setLoading(false)
    }
  };

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  return (
    <div>
      {
        loading ? (<Loader />) : (
          <div className="">
        <div className="">
          <h1 className="text-6xl pt-[75px] pb-[50px] text-yellow-400 text-center dancing-script ">
            {capitalize(category)}
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 ">
            <ProductCard data={data} />
          </div>
        </div>
      </div>
        )
      }
    </div>
  );
};

export default ProductCategory;
