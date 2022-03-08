import BaseHome from "./Home";
import useHome from "./useHome";

const Home = () => {
    const props = useHome()
    
    return <BaseHome {...props} />
}

export default Home;