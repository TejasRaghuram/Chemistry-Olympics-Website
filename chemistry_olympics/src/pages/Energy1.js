import './Energy1.css';
import Cover from "./Images/SolarCover.png"
import Chem from "./Images/SolarChem.png"
import What from "./Images/SolarWhat.jpg"
import Benefits from "./Images/SolarBenefits.jpg"
import Limit from "./Images/SolarLimit.jpg"
import Hexagon from "./Images/Hexagon.png"

function Energy1() {
  return (
    <div class="energy_page1">
    
      <div class="energy_subsection_1">
        <div class="home_titles">
          <p class="home_hollow_title">Solar</p>
          <br></br>
          <p class="home_full_title">Energy</p>
          <p class="home_subtitle" style={{color: 'lightgray'}}>A Ray of Hope</p>
        </div>
        <div class="home_slant_container">
          <img class="home_slant_image" id="solar_header" alt="" src={Cover} style={{objectFit: 'cover'}} />
        </div>
      </div>

      <div class="energy_subsection_2">
        <div class="energy_subsection_1_trans"></div>
        <p class="energy_subsection_header">What is Solar Energy?</p>
        <p class="energy_subsection_body">Solar energy, as the name suggests, is energy derived from the Sun’s radiation. Several living organisms such as plants and algae are reliant on the Sun’s radiation for their energy. Solar energy for the production of electricity, however, is much different from the process that plants use to photosynthesize. Solar energy makes up 12% of the energy produced through renewable means. Even calculators make use of tiny solar panels to recharge their batteries. Solar energy is projected to produce 45% of the total energy consumption by the year 2050. </p>
        <img class="energy_subsection_image" src={What} style={{objectFit: 'cover'}} alt=""></img>
      </div>

      <div class="energy_subsection">
        <p class="energy_subsection_header">What are its benefits?</p>
        <p class="energy_subsection_body">There are numerous benefits to solar energy and it is no surprise that it makes 19% of the total energy produced by renewable energy sources in the United States. Solar energy is both renewable and sustainable in the long term as it relies on the Sun. Solar energy will continue to hit the earth’s surface for several billion years, the entire lifetime of the Sun. Solar energy is relatively simple in terms of its requirements and almost any household can have solar panels installed and integrated with the local power grid. Currently most houses with solar panels installed sell energy back to the grid during the day as they produce a net positive amount of energy. They can then use this money to buy power from the grid during the day. This means even during the nighttime, solar energy produced during the day will reduce energy costs.  Though there are initial installation costs, in the long term solar energy is both cost effective and low maintenance. With no moving or frequently worn out parts, solar energy can last, oftentimes, 30 - 35 years before having to be replaced. Sometimes solar energy can be the only viable option in  a certain location. In remote or rural areas, places without access to the central power grid, solar energy can be the only option.  Solar energy is also clean. It produces no harmful emissions of greenhouse gasses. </p>
        <img class="energy_subsection_image" src={Benefits} style={{objectFit: 'cover'}} alt=""></img>
      </div>

      <div class="energy_subsection">
        <p class="energy_subsection_header">What are its limitations and shortcomings?</p>
        <p class="energy_subsection_body">Though solar energy has several benefits, it is still developing technology. One of the main drawbacks is that it only works during the day. Since solar energy relies on the Sun, energy is only produced when there is sunlight. Any interference from clouds or other irregularities in weather conditions will also reduce or completely inhibit the harnessing of solar energy. In addition, modern technologies can’t store electricity, easily, for later use. This means solar energy produced must be used immediately. In addition, solar panels, the primary way to harness solar energy from the Sun, is inefficient. Solar fields require large amounts of area to produce significant amounts of energy. This is because most solar panels today can only convert between 18-22% of the energy that strikes their surfaces. To make more efficient solar panels would drastically increase their costs. Solar panel installations are already expensive to conduct. The average cost per 2000 square feet is between $10,000 - $12,000. Per KWh of electricity produced solar energy costs 6-9 cents while coal costs just 3.2 cents per KWh. This is one of the main limitations with solar panels, they cost much more than the dirty alternatives already present. Also, some materials used in the production of solar panels are harmful to humans and the environment. Some metals used like lead and cadmium are known to be dangerous. Some other materials needed like silicon release Carbon Monoxide as seen in this reaction: SiO2 + 2C → Si + 2CO. Many question the environmental friendliness of solar energy as the materials needed to produce its components are harmful to the environment.  </p>
        <img class="energy_subsection_image" src={Limit} style={{objectFit: 'cover'}} alt=""></img>
      </div>

      <div class="energy_subsection">
        <p class="energy_subsection_header">What is the chemistry behind it?</p>
        <p class="energy_subsection_body">Photovoltaic (PV) technology is based on the conversion of solar energy into electrical energy through a semiconductor device called a solar cell. The most commonly used material for solar cells is silicon (Si). A typical Si PV module consists of multiple solar cells connected together to form a solar panel. The process of converting sunlight into electricity involves several steps. When sunlight strikes the surface of a solar cell, the photons from the light transfer their energy to electrons in the semiconductor material. This energy is enough to free the electrons from their atomic bonds, creating electron-hole pairs. The free electrons are negatively charged, while the holes are positively charged. In a solar cell, the semiconductor material is doped with impurities to create a p-n junction, which is a boundary between a region of excess electrons (n-type) and a region of excess holes (p-type). The p-n junction creates an electric field that separates the electrons and holes, causing the electrons to migrate towards the n-type region and the holes towards the p-type region. The movement of the electrons and holes in the solar cell creates an electric field, which further enhances the separation and collection of the charges. The electric field is created by the difference in potential between the n-type and p-type regions of the semiconductor, which is due to the doping of the material with impurities. The conversion of solar energy into electrical energy in a photovoltaic cell involves several chemical reactions. The main chemical reaction that occurs is the absorption of photons by the semiconductor material in the solar cell. This reaction results in the excitation of electrons from the valence band to the conduction band of the semiconductor, leaving behind a positively charged hole in the valence band. The chemical equation for this reaction is hν + Si → e^- + h+. where hν represents a photon of light, Si represents the silicon semiconductor, e^- represents a free electron, and h+ represents a positively charged hole. Once the electrons are excited to the conduction band, they are free to move and can be collected by an electrode, creating an electrical current. The holes, on the other hand, migrate towards the p-n junction and can also be collected by an electrode, creating a flow of electrical current in the opposite direction. The chemical reaction involved in the creation of the p-n junction in the semiconductor material is a doping reaction, which involves the introduction of impurities into the silicon lattice. For example, doping the silicon with phosphorus creates an n-type region, while doping it with boron creates a p-type region. The doping process creates an excess of either electrons or holes in the semiconductor, which enhances the separation and collection of charges in the solar cell. </p>
        <img class="energy_subsection_image" src={Chem} style={{objectFit: 'cover'}} alt=""></img>
      </div>

      <div class="energy_pattern_position" style={{position: 'relative'}}>
        <img class="energy_pattern" src={Hexagon} style={{height: '85.5vw'}} alt=""></img>
      </div>

    </div>
  );
}

export default Energy1;