import "./Home.scss";
import { Link } from "react-router-dom";
// import panda from "../../assets/Images/panda.png";
import ybg from "../../assets/Images/trendzeeposter.png";
import picman from "../../assets/Images/picman.png";
import shirt from "../../assets/Images/shirt.png";
import hoodies from "../../assets/Images/hoodie.png";
import pant from "../../assets/Images/pant.png";
import watch from "../../assets/Images/watch.png";
import shoes from "../../assets/Images/shoes.png";
import goggles from "../../assets/Images/goggles.png";
import offer1 from "../../assets/Images/offer1.png";
import offer2 from "../../assets/Images/offer2.png";
import trend1 from "../../assets/Images/trend1.png";
import trend2 from "../../assets/Images/trend2.png";
import trend3 from "../../assets/Images/trend3.png";
import trend4 from "../../assets/Images/trend4.png";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";

const Home = () => {
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000);
  },[])

  setTimeout(() => {
    console.log("Hello, World!");
  }, 2000);

  return (
    <div className="">
      {loading ? (<Loader/>) :  (
        <div className="home">
        <main className="mb-[100px]">
          <div className="flex justify-center">
            <div className="gridArea lg:grid grid-cols-2 justify-evenly pt-10">
              <div className="flex justify-center">
                <div className="dancing-script m-auto">
                  <p className="trendzeetxt text-[80px] md:text-[140px]">
                    TrendZee
                  </p>
                  <p className="mt-[-30px] text-center text-2xl">Ecommerce</p>
                </div>
              </div>
              <div className="m-auto">
                <img src={ybg} alt="" className="mainImg w-auto h-[500px]" />
              </div>
              {/* <div className="g3 m-auto">
                <p className="text-justify pr-10">
                  Welcome to our digital haven, where dreams find their way into
                  your hands, and desires dance in the realm of the click. Here,
                  amidst the pixels and pathways, we craft a tapestry of
                  enchantment, weaving threads of joy into every transaction.
                  Step into our digital sanctuary, where moments become memories
                  and wishes take flight on the wings of possibility. Here, in
                  the boundless expanse of cyberspace, let us embark on a
                  journey together, where every click is a heartbeat, and every
                  purchase, a whispered promise of fulfillment. In this realm of
                  endless discovery, let your soul wander freely, for here, in
                  the sanctuary of our ecommerce sanctuary, magic awaits at
                  every turn.
                </p>
              </div> */}
            </div>
          </div>
        </main>
        <div className="info bg-yellow-300 flex justify-center">
          <div className="p-10 md:grid grid-cols-4 gap-10 text-3xl tracking-wide text-white dancing-script ">
            <div className="m-auto p-5">
              <img src={picman} alt="" className="w-[150px]" />
            </div>
            <div className="m-auto p-5">
              <p>1000+</p>
              <p>Products</p>
            </div>
            <div className="m-auto p-5">
              <p>50K+</p>
              <p>Clients</p>
            </div>
            <div className="m-auto p-5">
              <p>100K+</p>
              <p>Deliveries</p>
            </div>
          </div>
        </div>
        <div className="homeproducts p-10">
          <div className="flex justify-center">
            <div className="">
              <div className="">
                <h1 className="text-6xl pt-[75px] pb-[50px] text-yellow-400 text-center dancing-script ">
                  Products
                </h1>
              </div>
              <div className="md:grid md:grid-cols-2  lg:grid-cols-3 gap-10">
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
        <div className="bg-yellow-300 offerzone p-10">
          <div className="pt-10">
            <div className="">
              <h1 className=" dancing-script text-6xl text-center">
                Offer Zone
              </h1>
            </div>
            <div className="mt-10">
              <div className="flex justify-center ">
                <div className="border-white border-2 rounded-full z-20 backdrop-blur-xl hover:bg-white">
                  <img src={offer1} alt="" className="w-[200px] z-20 " />
                </div>
                <div className="mt-auto mb-auto">
                  <div className="flex justify-center border-2 border-white rounded-xl w-[200px] md:w-[400px] z-10 md:ml-[-100px] ml-[-40px] h-[150px]">
                    <div className="m-auto pl-12">
                      <p>Low price products available...</p>
                      <p>Limited only !!!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="mt-auto mb-auto">
                  <div className="flex justify-center border-2 border-white rounded-xl pl-4 w-[200px] md:w-[400px] z-10 md:mr-[-100px] mr-[-40px] h-[150px]">
                    <div className="m-auto pr-12">
                      <p>Products offer update Everyday...</p>
                      <p>Grab it on Time !!!</p>
                    </div>
                  </div>
                </div>
                <div className="border-white border-2 rounded-full z-20 backdrop-blur-xl hover:bg-white">
                  <img src={offer2} alt="" className="w-[200px] z-20 " />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <div className="flex justify-center">
                <Link
                  to="/offerzone"
                  className="border-2 border-white bg-white shadow-xl shadow-white rounded-2xl pl-5 pr-5 pt-2 pb-2"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="trendingzone p-10">
          <div className="pt-10">
            <div className="">
              <h1 className="dancing-script text-6xl text-center">
                Trending Zone
              </h1>
            </div>
            <div className="flex justify-center pt-[80px]">
              <div className="md:flex justify-around gap-5">
                <div className="">
                  <img
                    src={trend1}
                    alt=""
                    className="hover:bg-yellow-400 hover:shadow-2xl shadow-yellow-400 p-2 border-2 rounded-full mb-5 md:mb-0 border-yellow-400  shadow-md w-[200px] "
                  />
                </div>
                <div className="">
                  <img
                    src={trend2}
                    alt=""
                    className="hover:bg-yellow-400 hover:shadow-2xl shadow-yellow-400 p-2 border-2 rounded-full mb-5 md:mb-0 border-yellow-400  shadow-md w-[200px] "
                  />
                </div>
                <div className="">
                  <img
                    src={trend3}
                    alt=""
                    className="hover:bg-yellow-400 hover:shadow-2xl shadow-yellow-400 p-2 border-2 rounded-full mb-5 md:mb-0 border-yellow-400  shadow-md w-[200px] "
                  />
                </div>
                <div className="">
                  <img
                    src={trend4}
                    alt=""
                    className="hover:bg-yellow-400 hover:shadow-2xl shadow-yellow-400 p-2 border-2 rounded-full mb-5 md:mb-0 border-yellow-400  shadow-md w-[200px] "
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-10">
              <div className="text-center">
                <p>All types of trending fashions are available</p>
                <p>Trending products are Limited </p>
                <p>...Grab them soon...</p>
              </div>
            </div>
            <div className="mt-10 mb-10">
              <div className="flex justify-center">
                <Link
                  to="/trendzone"
                  className="border-2 border-yellow-400 bg-yellow-300 shadow-xl shadow-yellow-200 rounded-2xl pl-5 pr-5 pt-2 pb-2"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Home;
