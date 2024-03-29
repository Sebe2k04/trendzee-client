import { useState } from "react";
import "./Admin.scss";
import axios from 'axios'
const Admin = () => {

  const [name,setName] = useState('')
  const [vendor,setVendor] = useState('TrendZee')
  const [category,setCategory] = useState('shirt')
  const [orgprice,setOrgprice] = useState('')
  const [sellprice,setSellprice] = useState('')
  const [description,setDescription] = useState('')
  const [trend,setTrend] = useState(false)
  const [offer,setOffer] = useState(false)
  const [file,setFile] = useState('')

  console.log(category);

  const handleName = (e) => {
    const {value} = e.target;
    setName(value);
  }
  const handleCategory = (e) => {
    const {value} = e.target;
    setCategory(value);
  }
  const handleDescription = (e) => {
    const {value} = e.target;
    setDescription(value);
  }
  const handleVendor = (e) => {
    const {value} = e.target;
    setVendor(value);
  }
  const handleOrgprice = (e) => {
    const {value} = e.target;
    setOrgprice(value);
  }
  const handleSellprice = (e) => {
    const {value} = e.target;
    setSellprice(value);
  }
  const handleFile = (e) => {
    setFile(e.target.files[0])
  }

  const handleTrend = (e) => {
    setTrend(e.target.checked)
  }

  const handleOffer = (e) => {
    setOffer(e.target.checked)
    
  }



  const addProductData = async(e) => {
    // e.preventDefault();

    var formData = new FormData();
    formData.append("name",name)
    formData.append("category",category)
    formData.append("description",description)
    formData.append("vendor",vendor)
    formData.append("orgprice",orgprice)
    formData.append("sellprice",sellprice)
    formData.append("photo",file)
    formData.append("trend",trend)
    formData.append("offer",offer)

    const config ={
      headers:{
        "Content-Type":"multipart/form-data"
      }
    }

    //const res = await axios.post("http://localhost:5555/register",formData,config)
    const res = await axios.post("https://trendzee-server.vercel.app/register",formData,config)

     if(res.data.status === 401 || !res.data){
       console.log("error")
     }else{
       console.log(res)
     }
  }



  return (
    <div>
      <div className="">
        <h1 className="text-6xl text-center dancing-script p-5 text-yellow-400">
          Admin Dashboard
        </h1>
      </div>
      <div className="p-[100px] flex justify-center">
        <form action="" onSubmit={addProductData}>
          <label htmlFor="category">Category : </label><br />
          <select name="category" id="category" onChange={handleCategory}>
            <option value="shirt">Shirt</option>
            <option value="hoodie">Hoodie</option>
            <option value="pant">Pant</option>
            <option value="watch">Watch</option>
            <option value="shoe">Shoes</option>
            <option value="accessories">Accessories</option>
          </select><br />
          <label htmlFor="name">Name</label><br />
          <input type="text" name="name" id="name" required onChange={handleName} /><br />
          <label htmlFor="vendor">Vendor</label><br />
          <input type="text" name="vendor" id="vendor" defaultValue={"Trendzee"} required onChange={handleVendor} /><br />
          <label htmlFor="orgprice">Original Price</label><br />
          <input type="text" name="orgprice" id="orgprice" required onChange={handleOrgprice} /><br />
          <label htmlFor="sellprice">Selling Price</label><br />
          <input type="text" name="sellprice" id="sellprice" required onChange={handleSellprice} /><br /><br />
          {/* <label htmlFor="pqr">pqr</label><br />
          <input type="text" name="pqr" id="pqr" /><br /> */}
          <label htmlFor="description">Description</label><br />
          <textarea name="description" id="description" cols="30" rows="10" onChange={handleDescription} ></textarea><br />
          <input type="checkbox" className="check" name="trend" id="trend" onChange={handleTrend} />
          <label htmlFor="trending">Trending</label><br /><br />
          <input type="checkbox" className="check" name="offer" id="offer" onChange={handleOffer} />
          <label htmlFor="offer">Offer</label>
          <br /><br /><br />
          <input type="file" name="photo" id="photo" onChange={handleFile} />
          <br /><br />
          <input type="submit" value="submit"/>
        </form>
      </div>
    </div>
  );
};

export default Admin;
