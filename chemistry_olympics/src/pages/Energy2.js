import './Energy2.css';
import Cover from "./Images/BioCover.jpg"
import Chem from "./Images/BioChem.png"
import What from "./Images/BioWhat.png"
import Benefits from "./Images/BioBenefits.jpg"
import Limit from "./Images/BioLimit.jpg"
import Hexagon from "./Images/Hexagon.png"

function Energy2() {
  return (
    <div class="energy_page">
    
      <div class="energy_subsection_1" id="energy2_1">
        <div class="home_titles">
          <p class="home_hollow_title">Bio</p>
          <br></br>
          <p class="home_full_title">Energy</p>
          <p class="home_subtitle" style={{color: 'lightgray'}}>America's Leading Renewable Energy</p>
        </div>
        <div class="home_slant_container">
          <img class="home_slant_image" id="solar_header" alt="" src={Cover} style={{objectFit: 'scale-down'}} />
        </div>
      </div>

      <div class="energy_subsection_2">
        <div class="energy_subsection_1_trans" id="energy2_2"></div>
        <p class="energy_subsection_header">What is Bio Energy?</p>
        <p class="energy_subsection_body">Bioenergy is a renewable energy that comes from biomass, which consists of now dead, but recently living, organisms, mainly plants. Some common types of biofuels are wood, food crops, and waste from forests and farms. Thermal conversion processes use heat to convert biomass into fuel, with torrefaction, pyrolysis, and gasification being different types of the conversion, differentiated by the extent to which chemical reactions are allowed to proceed. Bioenergy is primarily used by: Armenia, Austria, Brazil, China, Colombia, Costa Rica, India, Kazakhstan, Turkey, and Ukraine.</p>
        <img class="energy_subsection_image" src={What} style={{objectFit: 'scale-down'}} alt=""></img>
      </div>

      <div class="energy_subsection">
        <p class="energy_subsection_header">What are its benefits?</p>
        <p class="energy_subsection_body">Bioenergy provides various benefits. Bioenergy can be made by a variety of sources, including wood chips and agricultural residues, which can be found locally, reducing dependence on foreign powers. For example, these facilities use anaerobic digestion to convert organic waste into biogas, as gaseous fuel, which can be used to generate electricity. Furthermore, bioenergy provides economic opportunities by fostering job growth and stimulating economic growth in poor areas. For example, farmers in poorer areas can grow crops specifically for bioenergy production. An instance of this is ethanol production, which is a biofuel made from crops like corn and sugarcane. This ethanol can be blended with gasoline to reduce transportation emissions. Another benefit of bioenergy is that it uses organic waste that would otherwise be sent to a landfill, reducing the amount of waste in landfills. This growing of crops can also improve soil health in local regions. Finally, bioenergy is an effective way to provide energy to rural communities who are not connected to the grids powering metropolitan areas. </p>
        <img class="energy_subsection_image" src={Benefits} style={{objectFit: 'cover'}} alt=""></img>
      </div>

      <div class="energy_subsection">
        <p class="energy_subsection_header">What are its limitations and shortcomings?</p>
        <p class="energy_subsection_body">While bioenergy has many benefits like its fostering of economic growth, it does have some negatives with regards to production. Bioenergy production uses a fair amount of land, competing with other land uses such as food production, conservation, and urban development. Often, governments may elect these uses of land as a higher priority, leading to less use of biofuel plants. Furthermore, the cost of bioenergy production is high for certain technologies, like cellulosic ethanol. So, in areas where fossil fuels are significantly cheaper, bioenergy is rarely used. Another downside to bioenergy is that, sometimes, depending on the geography, like the climate and soil, it is not possible to create biomass. This limits the geographical regions where bioenergy can be utilized. Also, biomass has a lower energy density than other traditional forms of energy, meaning that a lot of biomass is required to create similar amounts of energy. Even though bioenergy does have some plusses on the soil, it can have non greenhouse gas emissions and negative effects on society like: deforestation, soil erosion, and water pollution. Overall though, biomass energy is a clean way of harvesting energy from society. </p>
        <img class="energy_subsection_image" src={Limit} style={{objectFit: 'cover'}} alt=""></img>
      </div>

      <div class="energy_subsection">
        <p class="energy_subsection_header">What is the chemistry behind it?</p>
        <p class="energy_subsection_body">4 different processes are used in converting biomass to energy. Combustion is a chemical reaction that rapidly oxidizes organic matter in the presence of oxygen, producing heat and light. Biomass plants use combustion to generate electricity. Through fermentation, microorganisms break down organic matter into simpler substances, producing energy in the form of ATP. This is commonly used when creating ethanol or biodiesel. Gasification is a thermochemical process by which heated organic matter in the presence of gas, like air, oxygen, or steam. Through this process, biomasses are converted to syngas, which can be used to generate electricity. Pyrolysis is a thermal process that heats organic matter in the absence of oxygen to produce gasses.  </p>
        <img class="energy_subsection_image" src={Chem} style={{objectFit: 'scale-down'}} alt=""></img>
      </div>

      <div class="energy_pattern_position" style={{position: 'relative'}}>
        <img class="energy_pattern" src={Hexagon} style={{height: '96.5vw'}} alt=""></img>
      </div>

    </div>
  );
}

export default Energy2;