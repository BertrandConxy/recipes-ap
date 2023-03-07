import Random from "../components/Random/Random";
import Veggie from "../components/Veggie/Veggie";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div>
      <Random />
      <Veggie />
    </motion.div>
  );
};

export default Home;
