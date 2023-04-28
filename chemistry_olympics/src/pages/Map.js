import './Map.css';
import MapImage from "./Images/Map.png";

function Map() {
  return (
    <div class="map_page">

      <p class="home_subsection_title_gradient" style={{width: '100vw', textAlign: 'center', marginTop: 100}}>Interactive Map</p>

      <div class="map">

        <div class="map_point" style={{marginLeft: "23vw", marginTop: "9vw"}}>
          <p class="map_title">Northwest</p>
          <div class="map_body" style={{marginTop: '2.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(254, 189, 69)"}}></div>
            <div class="map_text">Solar Energy: Low Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '6.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(99, 99, 255)"}}></div>
            <div class="map_text">Bio Energy: Medium Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '10.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(84, 184, 87)"}}></div>
            <div class="map_text">Geo Energy: Medium Usage</div>
          </div>
        </div>

        <div class="map_point" style={{marginLeft: "20vw", marginTop: "28vw"}}>
          <p class="map_title">Southwest</p>
          <div class="map_body" style={{marginTop: '2.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(254, 189, 69)"}}></div>
            <div class="map_text">Solar Energy: High Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '6.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(99, 99, 255)"}}></div>
            <div class="map_text">Bio Energy: Medium Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '10.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(84, 184, 87)"}}></div>
            <div class="map_text">Geo Energy: High Usage</div>
          </div>
        </div>

        <div class="map_point" style={{marginLeft: "46vw", marginTop: "17vw"}}>
          <p class="map_title">Midwest</p>
          <div class="map_body" style={{marginTop: '2.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(254, 189, 69)"}}></div>
            <div class="map_text">Solar Energy: Low Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '6.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(99, 99, 255)"}}></div>
            <div class="map_text">Bio Energy: Medium Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '10.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(84, 184, 87)"}}></div>
            <div class="map_text">Geo Energy: Medium Usage</div>
          </div>
        </div>

        <div class="map_point" style={{marginLeft: "48vw", marginTop: "35vw"}}>
          <p class="map_title">Mid South</p>
          <div class="map_body" style={{marginTop: '2.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(254, 189, 69)"}}></div>
            <div class="map_text">Solar Energy: Medium Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '6.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(99, 99, 255)"}}></div>
            <div class="map_text">Bio Energy: High Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '10.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(84, 184, 87)"}}></div>
            <div class="map_text">Geo Energy: Medium Usage</div>
          </div>
        </div>

        <div class="map_point" style={{marginLeft: "35vw", marginTop: "24vw"}}>
          <p class="map_title">Mid America</p>
          <div class="map_body" style={{marginTop: '2.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(254, 189, 69)"}}></div>
            <div class="map_text">Solar Energy: Medium Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '6.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(99, 99, 255)"}}></div>
            <div class="map_text">Bio Energy: Low Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '10.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(84, 184, 87)"}}></div>
            <div class="map_text">Geo Energy: High Usage</div>
          </div>
        </div>

        <div class="map_point" style={{marginLeft: "68vw", marginTop: "18vw"}}>
          <p class="map_title">Northeast</p>
          <div class="map_body" style={{marginTop: '2.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(254, 189, 69)"}}></div>
            <div class="map_text">Solar Energy: Low Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '6.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(99, 99, 255)"}}></div>
            <div class="map_text">Bio Energy: Medium Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '10.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(84, 184, 87)"}}></div>
            <div class="map_text">Geo Energy: Low Usage</div>
          </div>
        </div>

        <div class="map_point" style={{marginLeft: "65vw", marginTop: "34vw"}}>
          <p class="map_title">Southeast</p>
          <div class="map_body" style={{marginTop: '2.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(254, 189, 69)"}}></div>
            <div class="map_text">Solar Energy: Medium Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '6.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(99, 99, 255)"}}></div>
            <div class="map_text">Bio Energy: Medium Usage</div>
          </div>
          <div class="map_body" style={{marginTop: '10.75vw'}}>
            <div class="map_indicator" style={{backgroundColor: "rgb(84, 184, 87)"}}></div>
            <div class="map_text">Geo Energy: Low Usage</div>
          </div>
        </div>

        <img class="map_image" src={MapImage} alt=""></img>
      </div>

      <p class="map_caution">NOTE: All usage descriptions are relative to the same energy source's use in other places(ex: If Solar Energy has "High Usage" in the North Eastern Region, that means it is used more there compared to other regions).</p>

      <div class="space" style={{height: 100}}></div>

    </div>
  );
}

export default Map;