import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <div className="bg-yellow-300 p-10">
      <div className="flex justify-center">
        <div className="">
        <div className="grid grid-cols-2 gap-[100px]">
          <div className="">
            <p className='text-4xl'>Trend Zee</p>
            <p className='text-2xl'>Fashion</p>
          </div>
          <div className="text-center">
            <Link className='hover:text-white duration-500' to="/">Home</Link><br />
            <Link className='hover:text-white duration-500' to="/products">Products</Link><br />
            <Link className='hover:text-white duration-500' to="/offerzone">OfferZone</Link><br />
            <Link className='hover:text-white duration-500' to="/trendzone">TrendZone</Link>
          </div>
        </div>
        <div className="pt-10">
        <a href='https://sebe2k04.vercel.app/' target="_blank" className=" text-center" >
          <p>Sebe &copy;{date} || All Rights Reserved</p>
        </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer