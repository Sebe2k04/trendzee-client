import { useEffect, useState } from 'react';
import './TrendZone.scss'
import axios from 'axios';
import ProductCard from '../../Components/ProductCard/ProductCard';
import Loader from '../../Components/Loader/Loader';

const TrendZone = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(data);
  useEffect(() => {
    setLoading(true)
    getProductData();
  }, []);

  const getProductData = async () => {
    const res = await axios.get("https://trendzee-server.onrender.com/products", {
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
  return (
    <div>
      {
        loading ? (<Loader/>) : (
          <div className="">
        <div className="">
        <h1 className="text-6xl pt-[75px] pb-[50px] text-yellow-400 text-center dancing-script ">
            Trend Zone
          </h1>
        </div>
        <div className="flex justify-center">
          <div >
            <ProductCard data={data} />
          </div>
        </div>
      </div>
        )
      }
    </div>
  )
}

export default TrendZone