import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Energy1 from './pages/Energy1'
import Energy2 from './pages/Energy2'
import Energy3 from './pages/Energy3'
import Map from './pages/Map'
import Error from './pages/Error'
import Layout from './pages/Layout'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Chemistry-Olympics-Website/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="energy1" element={<Energy1 />} />
        <Route path="energy2" element={<Energy2 />} />
        <Route path="energy3" element={<Energy3 />} />
        <Route path="map" element={<Map />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
