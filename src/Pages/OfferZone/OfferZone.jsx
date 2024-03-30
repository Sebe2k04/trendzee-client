import { useEffect, useState } from "react";
import "./OfferZone.scss"
import axios from "axios";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Loader from "../../Components/Loader/Loader";
const OfferZone = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading] = useState(false)
  console.log(data);
  useEffect(() => {
    setLoading(true);
    getProductData();
  }, []);

  const getProductData = async () => {
    //const res = await axios.get("http://localhost:5555/offerzone", {
    const res = await axios.get("https://trendzee-server.onrender.com/offerzone", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("error");
    } else {
      setLoading(false);
      setData(res.data.getProducts);
    }
  };
  return (
    <div>
      {
        loading ? (<Loader/>) : (<div className="">
        <div className="">
        <h1 className="text-6xl pt-[75px] pb-[50px] text-yellow-400 text-center dancing-script ">
            Offer Zone
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="md:grid md:grid-cols-2 lg:grid-cols-4 ">
            <ProductCard data={data} />
          </div>
        </div>
      </div>)
      }
    </div>
  )
}

export default OfferZone