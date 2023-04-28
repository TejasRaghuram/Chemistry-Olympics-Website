import './Energy3.css';
import Cover from "./Images/GeoCover.jpg"
import Chem from "./Images/GeoChem.png"
import What from "./Images/GeoWhat.png"
import Benefits from "./Images/GeoBenefits.png"
import Limit from "./Images/GeoLimit.png"
import Hexagon from "./Images/Hexagon.png"

function Energy3() {
  return (
    <div class="energy_page">
    
      <div class="energy_subsection_1" id="energy3_1">
        <div class="home_titles">
          <p class="home_hollow_title">Geothermal</p>
          <br></br>
          <p class="home_full_title">Energy</p>
          <p class="home_subtitle" style={{color: 'lightgray'}}>Making use of Earth's natural heat</p>
        </div>
        <div class="home_slant_container">
          <img class="home_slant_image" id="solar_header" alt="" src={Cover} style={{objectFit: 'cover'}} />
        </div>
      </div>

      <div class="energy_subsection_2">
        <div class="energy_subsection_1_trans" id="energy3_2"></div>
        <p class="energy_subsection_header">What is Geothermal Energy?</p>
        <p class="energy_subsection_body">Geothermal energy is the thermal energy found in the crust of the Earth and is a byproduct of both planetary formation and radioactive material decay. Some rocks melt under the intense pressure and heat of the Earth's interior, while the solid mantle exhibits plastic behavior. As a result, since the mantle is lighter than the surrounding rock, some of it convects upward. Hot water from geothermal sources may contain trace levels of harmful compounds such mercury, arsenic, boron, antimony, and salt in addition to dissolved gasses. As the water cools, these chemicals fall out of solution and, if discharged, might harm the ecosystem. Restoring geothermal fluids to the Earth in order to boost production has the added benefit of lowering environmental risk.</p>
        <img class="energy_subsection_image" src={What} style={{objectFit: 'scale-down'}} alt=""></img>
      </div>

      <div class="energy_subsection">
        <p class="energy_subsection_header">What are its benefits?</p>
        <p class="energy_subsection_body">Geothermal plants are beneficial as they can provide baseload power, which means they can operate continuously, providing a constant and reliable source of energy. It will never run out and constantly replenishes itself. Also, geothermal energy plants often operate where they are needed, reducing the need for long distance transmission lines, unlike other high octane power plants. Furthermore, geothermal energy can be used for more than just generating electricity. They can also be used for heating and cooling buildings, industrial processes, and even agricultural applications such as greenhouse heating. A popular example of a geothermal process providing energy is the geysers in California, the largest geothermal power complex. It has been in operation since the 1960s and produces over 900 megawatts of electricity, enough to power 600,000 homes. To create steam, geothermal power plants pump liquids from subsurface reservoirs to the surface. The steam is then used to power electricity-producing turbines. The three main geothermal power plant technologies are binary cycle, dry steam, and flash steam. The design of the power plant includes a conversion type that is often based on the temperature and state of the subsurface fluid (steam or water).</p>
        <img class="energy_subsection_image" src={Benefits} style={{objectFit: 'scale-down'}} alt=""></img>
      </div>

      <div class="energy_subsection">
        <p class="energy_subsection_header">What are its limitations and shortcomings?</p>
        <p class="energy_subsection_body">While geothermal plants are very useful, they are limited in that they cannot be used anywhere. Locations for geothermal plants are limited to where there is sufficient heat and underground water sources. To add, there is a high upfront cost as the cost of drilling and buying the necessary equipment is often high. Earthquakes or other natural disasters can curb the usefulness of geothermal plants. So, builders have to take into consideration the tradeoff between price and risk of building a plant, compared to its possible benefits. The Blue Mountain project in Nevada was abandoned due to geological risks and the cost of drilling, coming to over $200 million. Furthermore, geothermal plants are very water intensive, requiring a significant amount of water(between 1,700 and 4,000 gallons of water per megawatt-hour)</p>
        <img class="energy_subsection_image" src={Limit} style={{objectFit: 'scale-down'}} alt=""></img>
      </div>

      <div class="energy_subsection">
        <p class="energy_subsection_header">What is the chemistry behind it?</p>
        <p class="energy_subsection_body">Hydrothermal systems (or geothermal reservoirs, or fields) are traditionally classified as water-dominated or vapor-dominated - the latter having a higher energy content per unit fluid mass. As with the water-soluble constituents, geothermal gasses can be conveniently divided into two groups: reactive glasses (H2O, CO2, H2S, NH3, N2, H2, and CH4) which take part in the chemical equilibria and provide information on the subsurface conditions such as temperature; and inert gasses(noble gasses, hydrocarbons other than methane), which do not take part in chemical reactions. Inert gasses can be used to provide information on the source of the gasses.</p>
        <img class="energy_subsection_image" src={Chem} style={{objectFit: 'scale-down'}} alt=""></img>
      </div>

      <div class="energy_pattern_position" style={{position: 'relative'}}>
        <img class="energy_pattern" src={Hexagon} style={{height: '85.5vw'}} alt=""></img>
      </div>

    </div>
  );
}

export default Energy3;