import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <div className="flex justify-center">
      <div className="flex">
        <div className="w-2 h-2 m-auto rounded-full navCircle bg-yellow-300"></div>
        <div className="w-5 h-5 m-auto rounded-full navCircle bg-yellow-300"></div>
        <div className="w-9 h-9 m-auto rounded-full navCircle bg-yellow-300"></div>
        <div className="bg-yellow-300 min-w-[250px] md:min-w-[800px] rounded-[40px] m-3 shadow-xl p-3">
          <div className="flex justify-around lato-regular   ">
            <div className="dancing-script text-3xl ">
              <h1>TrendZee</h1>
            </div>
            <div className="hidden md:flex">
              <div className="flex gap-5 mt-auto mb-auto  text-[18px]">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/offerzone">OfferZone</Link>
                <Link to="/trendzone">TrendZone</Link>
                
              </div>
            </div>
            <div className="ham-menu flex md:hidden ">
              <button onClick={toggleDrawer(true)} className="">
                <svg
                  className=""
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6H20M4 12H14M4 18H9"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="w-9 h-9 m-auto rounded-full navCircle bg-yellow-300"></div>
        <div className="w-5 h-5 m-auto rounded-full navCircle bg-yellow-300"></div>
        <div className="w-2 h-2 m-auto rounded-full navCircle bg-yellow-300"></div>
      </div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <motion.div
          className="drawer"
          initial={{ opacity: 0, scale: 0.7, x: -50 }}
          whileInView={{ opacity: 1, scale: 0.9, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg
            width="40px"
            height="40px"
            onClick={toggleDrawer(false)}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="closeIcon"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
              fill="#000000"
            />
          </svg>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleDrawer(false)}>Products</Link>
          </li>
          <li>
          <Link to="/offerzone" onClick={toggleDrawer(false)}>OfferZone</Link>
          </li>
          <li>
          <Link to="/trendzone" onClick={toggleDrawer(false)}>TrendZone</Link>
          </li>
          <li>
            <a href="" onClick={toggleDrawer(false)}>
              Contact
            </a>
          </li>
        </motion.div>
        <div className="flex justify-center pb-20 opacity-55">
          <img src="" alt="" className="w-[60px]" />
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
