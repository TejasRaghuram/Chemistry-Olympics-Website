import './Home.css';
import TitleCard from "./Images/HomePageTitleCard.png";
import Background from "./Images/HomePageBackground.jpeg";
import Solar from "./Images/HomeSolar.jpg";
import Bio from "./Images/HomeBio.png";
import Geo from "./Images/HomeGeo.jpg";
import Stats from "./Images/HomeStatistics.png";
import Stats2 from "./Images/HomeStatistics2.png";
import Map from "./Images/MapIcon.png";
import { Link } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div class="home_page" style={{backgroundColor: '#303030', position: 'relative'}}>

      <div class="home_subsection_1">
        <img class="home_image_background" src={Background} alt="" />
        <div class="home_titles">
          <p class="home_hollow_title">Alternate</p>
          <br></br>
          <p class="home_full_title">Energy</p>
          <p class="home_subtitle">By Ishaan, Tejas, and Vignesh</p>
        </div>
        <div class="home_slant_container">
          <img class="home_slant_image" src={TitleCard} alt="" />
        </div>
      </div>

      <div class="home_subsection_titles">
        <p class="home_subsection_title">Some</p>
        <p class="home_subsection_title_gradient">Statistics</p>
      </div>
      <div class="home_transition_1"></div>
      <div class="home_subsection_2">
        <div class="home_statistics_elements">
          <div class="home_statistics_facts">
            <p class="home_averages">US Energy Consumption</p>
            <ul class="home_fact_list">
              <li class="home_fact"><span class="home_stats_bullet_spacing">12% of the United States’ energy comes from renewable sources</span></li>
              <li class="home_fact"><span class="home_stats_bullet_spacing">The United States uses approximately 23% of the world's energy</span></li>
              <li class="home_fact"><span class="home_stats_bullet_spacing">Energy use in America is doubling every 20 years</span></li>
            </ul>
          </div>
          <img class="home_statistics_image" id="img1" src={Stats} style={{objectFit: 'scale-down'}} alt=""></img>

          <div class="home_statistics_facts" id="avg2">
            <p class="home_averages">The Average American...</p>
            <ul class="home_fact_list">
              <li class="home_fact"><span class="home_stats_bullet_spacing">Household spends $2,200 per year on energy bills</span></li>
              <li class="home_fact"><span class="home_stats_bullet_spacing">Wastes about two-thirds of the energy we they consume</span></li>
              <li class="home_fact"><span class="home_stats_bullet_spacing">Produces 4.09 tons of CO2 per year with the electricity they consume</span></li>
            </ul>
          </div>

          <img class="home_statistics_image" id="img2" src={Stats2} style={{objectFit: 'scale-down'}} alt=""></img>

          <div class="home_statistics_statement">
            <p class="home_statistics_statement_text">Daylight Savings<br></br>Reduces Energy<br></br>Consumption by<br></br>0.34%</p>
          </div>
          <table class="home_statistics_table">
            <tr>
              <th>Energy Type</th>
              <th>Percentage of Total US Energy Consumed</th>
            </tr>
            <tr>
              <td>Solar Energy</td>
              <td>1.44%</td>
            </tr>
            <tr>
              <td>Bio Energy</td>
              <td>2.76%</td>
            </tr>
            <tr>
              <td>Geothermal Energy</td>
              <td>0.24%</td>
            </tr>
          </table>
          
        </div>
      </div>

      <div class="home_transition_2"></div>
      <div class="home_subsection_3">
        <div class="home_energy_titles">
          <p class="home_subsection_title" style={{textAlign: 'center'}}>Energy Comes In Many<span class="home_subsection_title_gradient">Forms</span></p>
        </div>
        <div class="home_energy_containers">
          <div class="home_energy_container">
            <img class="home_energy_container_image" src={Solar} alt=""></img>
            <Link to="/Chemistry-Olympics-Website/Energy1" class="home_energy_title1">Solar</Link>
            <p class="home_energy_subtitle">Energy</p>
          </div>
          <div class="home_energy_container">
            <img class="home_energy_container_image" src={Bio} alt=""></img>
            <Link to="/Chemistry-Olympics-Website/Energy2" class="home_energy_title2">Bio</Link>
            <p class="home_energy_subtitle">Energy</p>
          </div>
          <div class="home_energy_container">
            <img class="home_energy_container_image" src={Geo} alt=""></img>
            <Link to="/Chemistry-Olympics-Website/Energy3" class="home_energy_title3">Geothermal</Link>
            <p class="home_energy_subtitle">Energy</p>
          </div>
        </div>
        <div class="home_transition_3"></div>
      </div>

      <div class="home_subsection_4">
        <div class="home_map_titles">
          <p class="home_subsection_title" id="home_map">Interactive<br></br><span class="home_subsection_title_gradient" style={{marginLeft: 0}}>Map</span></p>
        </div>
        <img class="home_map_image" src={Map} alt=""></img>
        <Link to="/Chemistry-Olympics-Website/Map" class="home_goto_map" style={{display:'block'}}>Go To Map</Link>
      </div>

    </div>
  );
}

export default Home;