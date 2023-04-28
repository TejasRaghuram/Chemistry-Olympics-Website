import './Layout.css';
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import React from "react";
import Hamburger from "./Images/Hamburger.png";
import Close from "./Images/Close.png";

function Layout() {
  
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  let icon_class = "";
  let icon = Hamburger;
  let menu = "menu_closed";

  if(open)
  {
    menu = "menu_opened"
    icon = Close;
    if(hover)
    {
      icon_class = "close_hover"
    }
    else
    {
      icon_class = "close"
    }
  }
  else
  {
    if(hover)
    {
      icon_class = "hamburger_hover"
    }
    else
    {
      icon_class = "hamburger"
    }
  }

  let name = useLocation().pathname;

  return (
    <div onMouseDown={(e) => {if(e.clientX > 275){setOpen(false);}}}>
      <img class={icon_class} src={icon} onPointerEnter = {() => setHover(true)} onPointerLeave = {() => setHover(false)} onClick = {() => setOpen(!open)} alt="-"/>
      <img class="load" src={Close} alt="" />
      <div class="navbar">
        <h3 class="title">SBHS Energy</h3>
      </div>
      <div class={menu}>
        <Link to="/Chemistry-Olympics-Website" class={(name === '/Chemistry-Olympics-Website' || name === '/Chemistry-Olympics-Website/') ? "selected":"selectable"} onClick = {() => setOpen(!open)}>Home Page</Link>
        <br></br>
        <Link to="/Chemistry-Olympics-Website/Energy1" class={(name === '/Chemistry-Olympics-Website/Energy1' || name === '/Chemistry-Olympics-Website/Energy1/') ? "selected":"selectable"} onClick = {() => setOpen(!open)}>Energy 1</Link>
        <br></br>
        <Link to="/Chemistry-Olympics-Website/Energy2" class={(name === '/Chemistry-Olympics-Website/Energy2' || name === '/Chemistry-Olympics-Website/Energy2/') ? "selected":"selectable"} onClick = {() => setOpen(!open)}>Energy 2</Link>
        <br></br>
        <Link to="/Chemistry-Olympics-Website/Energy3" class={(name === '/Chemistry-Olympics-Website/Energy3' || name === '/Chemistry-Olympics-Website/Energy3/') ? "selected":"selectable"} onClick = {() => setOpen(!open)}>Energy 3</Link>
        <br></br>
        <Link to="/Chemistry-Olympics-Website/Map" class={(name === '/Chemistry-Olympics-Website/Map' || name === '/Chemistry-Olympics-Website/Map/') ? "selected":"selectable"} onClick = {() => setOpen(!open)}>Interactive Map</Link>
      </div>
      <Outlet />
      <div class="footer">
        <div class="footer_segments">
          <div class="footer_segment">
            <p class="footer_header">Contact</p>
            <p class="footer_body">10021395@sbstudents.org</p>
            <p class="footer_body">10018114@sbstudents.org</p>
            <p class="footer_body">10021913@sbstudents.org</p>
          </div>
          <div class="footer_segment">
            <p class="footer_header">Developers</p>
            <p class="footer_body">Ishaan Sinha</p>
            <p class="footer_body">Tejas Raghuram</p>
            <p class="footer_body">Vignesh Saravanakumar</p>
          </div>
          <div class="footer_segment">
            <p class="footer_header">Site Links</p>
            <Link to="/Chemistry-Olympics-Website" class="site_link" onClick = {() => setOpen(false)}>Home Page</Link>
            <br></br>
            <Link to="/Chemistry-Olympics-Website/Energy1" class="site_link" onClick = {() => setOpen(false)}>Energy 1</Link>
            <br></br>
            <Link to="/Chemistry-Olympics-Website/Energy2" class="site_link" onClick = {() => setOpen(false)}>Energy 2</Link>
            <br></br>
            <Link to="/Chemistry-Olympics-Website/Energy3" class="site_link" onClick = {() => setOpen(false)}>Energy 3</Link>
            <br></br>
            <Link to="/Chemistry-Olympics-Website/Map" class="site_link" onClick = {() => setOpen(false)}>Interactive Map</Link>
          </div>
        </div>
        <div class="citations">
          <p class="citation_header">Works Cited</p>
          <p class="citation_body">Barbier, E. (2002). Geothermal energy technology and current status: an overview. Renewable and Sustainable Energy Reviews, 6(1-2), 3-65. https://doi.org/10.1016/S1364-0321(02)00002-3<br></br><br></br>
Gelfand, I., Sahajpal, R., Zhang, X., Izaurralde, R. C., Gross, K. L., & Robertson, G. P. (2013). Sustainable bioenergy production from marginal lands in the US Midwest. Nature, 493(7433), 514-517. https://doi.org/10.1038/nature11811<br></br><br></br>
Jody, B. J., Petchsingto, T., Doctor, R. D., & Snyder, S. W. (2016). Capture of Geothermal Heat as Chemical Energy. UESO#721056, VOL 00, 1-9. https://www.osti.gov/pages/servlets/purl/1339155<br></br><br></br>
Mburu, M. (2021). Geothermal energy utilization. Exploration for Geothermal Resources, 1-9. https://orkustofnun.is/gogn/unu-gtp-sc/UNU-GTP-SC-21-0202.pdf<br></br><br></br>
Schmalensee, R. (2015). The Future of Solar Energy. AN INTERDISCIPLINARY MIT STUDY, 28-80. https://energy.mit.edu/wp-content/uploads/2015/05/MITEI-The-Future-of-Solar-Energy.pdf<br></br><br></br>
William J. Orts, Kevin M. Holtman, and James N. Seiber Journal of Agricultural and Food Chemistry 2008 56 (11), 3892-3899 DOI: 10.1021/jf8006695<br></br><br></br>
"Geothermal energy." (n.d.). In Wikipedia. Retrieved April 20, 2023, from https://en.wikipedia.org/wiki/Geothermal_energy<br></br><br></br>
"Bioenergy." (n.d.). In Wikipedia. Retrieved April 20, 2023, from https://en.wikipedia.org/wiki/Bioenergy<br></br><br></br>
“Biomass Resources in the United States.” Union of Concerned Scientists, 2012, www.ucsusa.org/resources/biomass-resources-united-states.<br></br><br></br>
U.S. Energy Information Administration. “Where Solar Is Found - U.S. Energy Information Administration (EIA).” Eia.gov, 2016, www.eia.gov/energyexplained/solar/where-solar-is-found.php.<br></br><br></br>
U.S. Energy Information Administration . “Where Geothermal Energy Is Found - U.S. Energy Information Administration (EIA).” Eia.gov, 2016, www.eia.gov/energyexplained/geothermal/where-geothermal-energy-is-found.php.<br></br><br></br></p>
        </div>
        <p class="school">South Brunswick High School, 2023</p>
      </div>
    </div>
  );
}

export default Layout;