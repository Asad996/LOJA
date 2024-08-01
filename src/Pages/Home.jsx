import CollageLeft from "../Components/Home/CollageLeft";
import Categories from "../Components/Home/Categories";
import Seller from "../Components/Home/Seller";
import Gallery from "../Components/Home/Gallery";
import banner1 from "../assets/collageRight/2_20240626_000348_0001.png";
const Home = () => {
  return (
    <div>
      <div className="2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-16 lg:px-14 px-12">
        <CollageLeft />
      </div>
      <Gallery />
      <div className="2xl:px-28 xl-custom:px-24 xl:px-20 lg-custom:px-16 lg:px-14 px-12">
        <Categories />
        <Seller />
      </div>
      <div className=" mb-24">
        <img src={banner1} alt="Daily style" />
      </div>
    </div>
  );
};

export default Home;
