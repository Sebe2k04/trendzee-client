import "./Products.scss";
import shirt from "../../assets/Images/shirt.png";
import hoodies from "../../assets/Images/hoodie.png";
import pant from "../../assets/Images/pant.png";
import watch from "../../assets/Images/watch.png";
import shoes from "../../assets/Images/shoes.png";
import goggles from "../../assets/Images/goggles.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Loader from "../../Components/Loader/Loader";

const Products = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getProductData();
  }, []);

  const getProductData = async () => {
    const res = await axios.get("`https://trendzee-server.vercel.app/products", {
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
  return (
    <div>
      {
        loading ? (<Loader/>) : (
          <div className=""><div className="categoryproducts p-10">
        <div className="flex justify-center">
          <div className="">
            <div className="">
              <h1 className="text-6xl pt-[75px] pb-[50px] text-yellow-400 text-center dancing-script ">
                Products
              </h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-10">
            <Link to="/products/shirt">
                  <div className="card">
                    <img src={shirt} alt="" className="cardImg" />
                    <p>Shirts</p>
                  </div>
                </Link>
                <Link to="/products/hoodie">
                  <div className="card">
                    <img src={hoodies} alt="" className="cardImg" />
                    <p>Hoodies</p>
                  </div>
                </Link>
                <Link to="/products/pant">
                  <div className="card">
                    <img src={pant} alt="" className="cardImg" />
                    <p>Bottoms</p>
                  </div>
                </Link>
                <Link to="/products/watch">
                  <div className="card">
                    <img src={watch} alt="" className="cardImg" />
                    <p>Watches</p>
                  </div>
                </Link>
                <Link to="/products/shoes">
                  <div className="card">
                    <img src={shoes} alt="" className="cardImg" />
                    <p>Shoes</p>
                  </div>
                </Link>
                <Link to="/products/accessories">
                  <div className="card">
                    <img src={goggles} alt="" className="cardImg" />
                    <p>Accessories</p>
                  </div>
                </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <h1 className="text-6xl pt-[75px] pb-[50px] text-yellow-400 text-center dancing-script ">
            All Products
          </h1>
        </div>
        <div className="flex justify-center">
            <ProductCard data={data} />
        </div>
      </div></div>
        )
      }
    </div>
  );
};

export default Products;
