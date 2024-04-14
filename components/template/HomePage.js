import Attributes from "../module/Attributes";
import Banner from "../module/Banner";
import Companies from "../module/Companies";
import Definition from "../module/Definition";
import Instruction from "../module/Instruction";
import Guide from "../module/Guide";
import Restrictions from "../module/Restrictions";

function HomePage() {
  return (
    <div>
      <Banner />
      <Attributes />
      <Definition />
      <Companies />
      <div className="flex items-start justify-between">
        <Instruction />
        <Restrictions />
      </div>
      <Guide />
    </div>
  );
}

export default HomePage;
