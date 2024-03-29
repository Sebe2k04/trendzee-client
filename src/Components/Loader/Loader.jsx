import './Loader.scss'

const Loader = () => {
  return (
    <div className="flex justify-center h-[90vh] ">
      <div className="wrapper m-auto">
      
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Loader;
