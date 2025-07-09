import Banner from "../../components/home/Banner";
import ChooseEdufy from "../../components/home/ChooseEdufy";
import FeaturesSection from "../../components/home/Features";
import { useGetAllBrandQuery } from "../../redux/api/brand/brandApi";


const Home = () => {
    const {data}= useGetAllBrandQuery()
    console.log(data, "from home")
    return (
        <div>
            <Banner/>
            <FeaturesSection/>
            <ChooseEdufy/>
        </div>
    );
};

export default Home;